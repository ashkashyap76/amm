console.log("Bot script execution started...");
require('dotenv').config();
console.log("PER_OF_NATIVE_TO_TRADE:", process.env.PER_OF_NATIVE_TO_TRADE);

import { ethers } from "ethers";
import { erc20Abi } from "viem";
import { uniswapRouterV2Abi } from "../constants/abis/uniswapABI";
import { nativeTokenIdentifier } from "../constants/generalConstants";
import { uniswapContracts } from "../constants/uniswapContracts";
import { ethersConfig } from "./config/ethersConfig";
import {
  getAmountsOutUniswapV2,
  validateNativeWETH
} from "./utils/uniswapFunctionsEthers";
import { getRandomTimeInMillis, isNativeToken } from "./utils/utils";

const intervals: NodeJS.Timeout[] = [];

// Example: Track intervals
intervals.push(setInterval(() => {
  console.log("Bot task executing...");
}, 5000));

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Cleaning up...');
  intervals.forEach(clearInterval); // Clear all intervals
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Cleaning up...');
  intervals.forEach(clearInterval); // Clear all intervals
  process.exit(0);
});

console.log("Bot script execution started...");

// Environment Variable Handling
let privateKeysArray: `0x${string}`[];

if (process.env.PRIVATE_KEYS_ARRAY) {
  try {
    privateKeysArray = JSON.parse(process.env.PRIVATE_KEYS_ARRAY) as `0x${string}`[];
  } catch (error) {
    throw new Error("Invalid JSON format for PRIVATE_KEYS_ARRAY");
  }
} else if (process.env.PRIVATE_KEY) {
  privateKeysArray = [process.env.PRIVATE_KEY as `0x${string}`];
} else {
  throw new Error("Please define either process.env.PRIVATE_KEYS_ARRAY or process.env.PRIVATE_KEY");
}

if (privateKeysArray.length === 0) {
  throw new Error("No private keys provided in PRIVATE_KEYS_ARRAY or PRIVATE_KEY");
}

type PrivateKeyWithObjectArrayType = {
  privateKey: `0x${string}`;
  buy: boolean;
  index: number;
};

const privateKeyWithObjectArray: PrivateKeyWithObjectArrayType[] =
  privateKeysArray.map((privateKey: `0x${string}`, key: number) => ({
    privateKey: privateKey,
    buy: true,
    index: key,
  }));

console.log("privateKeyWithObjectArray", privateKeyWithObjectArray);

const getRandomPrivateKeyWithObject = () => {
  const randomIndex = Math.floor(
    Math.random() * privateKeyWithObjectArray.length
  );

  return privateKeyWithObjectArray[randomIndex];
};

const percentageOfFundsWithTrade = parseFloat(process.env.PER_OF_NATIVE_TO_TRADE || "0");

if (!percentageOfFundsWithTrade || isNaN(percentageOfFundsWithTrade)) {
  throw new Error("Please define a valid PER_OF_NATIVE_TO_TRADE in the environment");
}

console.log("Percentage of funds to trade:", percentageOfFundsWithTrade);

const token0 = process.env.TOKEN_0 as `0x${string}`;
if (!token0) {
  throw new Error("Please define TOKEN_0 in the environment");
}

const token1 = process.env.TOKEN_1 as `0x${string}`;
if (!token1) {
  throw new Error("Please define TOKEN_1 in the environment");
}

const uniswapRouterV2: `0x${string}` =
  uniswapContracts?.pancakeswap?.[ethersConfig?.selectedChain?.id]?.v2
    ?.routerAddress!;

let isTransactionInProgress = false;

// Function Definitions

const getToken1BalanceToTrade = async (token1_: `0x${string}`) => {
  let userTokenBalance = BigInt(0);
  const isTokenNative = isNativeToken(token1_);

  console.log("isTokenNative", isTokenNative);

  isTransactionInProgress = true;

  if (isTokenNative) {
    token1_ = await validateNativeWETH(token1_);

    try {
      userTokenBalance = await ethersConfig?.ethersProvider?.getBalance(
        ethersConfig?.ethersUserAccount()?.address
      );
    } finally {
      isTransactionInProgress = false;
    }
  } else {
    try {
      const balance = (await new ethers.Contract(
        token1_,
        erc20Abi,
        ethersConfig?.ethersProvider
      ).balanceOf(ethersConfig?.ethersUserAccount()?.address)) as bigint;

      userTokenBalance = balance;
    } finally {
      isTransactionInProgress = false;
    }
  }

  console.log("userTokenBalance", userTokenBalance);

  if (userTokenBalance === BigInt(0)) {
    throw new Error("User token1Balance is zero");
  }

  return BigInt(
    Number(Number(userTokenBalance) * percentageOfFundsWithTrade)?.toFixed(0)
  );
};

const executeSwapUsingUniswapV2 = async (
  tokenIn_: `0x${string}`,
  valueInTokens_: bigint,
  tokenOut_: `0x${string}`,
  uniswapRouterV2_: `0x${string}`,
  privateKeyObject: PrivateKeyWithObjectArrayType
) => {
  const isTokenInNative = isNativeToken(tokenIn_);
  const isTokenOutNative = isNativeToken(tokenOut_);

  const uniswapRouterContract = new ethers.Contract(
    uniswapRouterV2_,
    uniswapRouterV2Abi,
    ethersConfig?.ethersUserAccount(privateKeyObject?.privateKey)
  );

  if (isTokenInNative) {
    tokenIn_ = await validateNativeWETH(tokenIn_);
  }

  if (isTokenOutNative) {
    tokenOut_ = await validateNativeWETH(tokenOut_);
  }

  let transactionHash = "";

  if (isTokenInNative) {
    isTransactionInProgress = true;

    try {
      const tx = await uniswapRouterContract.swapExactETHForTokens(
        0,
        [tokenIn_, tokenOut_],
        ethersConfig?.ethersUserAccount().address,
        Math.floor(Date.now() / 1000) + 60 * 20,
        { value: valueInTokens_ }
      );

      await tx?.wait;
      transactionHash = tx?.hash;
    } finally {
      isTransactionInProgress = false;
    }
  } else {
    const erc20Contract = new ethers.Contract(
      tokenIn_,
      erc20Abi,
      ethersConfig?.ethersUserAccount(privateKeyObject?.privateKey)
    );

    isTransactionInProgress = true;

    try {
      const approveTx = await erc20Contract.approve(
        uniswapRouterV2_,
        valueInTokens_
      );

      await approveTx?.wait();
      transactionHash = approveTx?.hash;
    } finally {
      isTransactionInProgress = false;
    }

    isTransactionInProgress = true;

    try {
      const tx = await uniswapRouterContract.swapExactTokensForTokens(
        valueInTokens_,
        0,
        [tokenIn_, tokenOut_],
        ethersConfig?.ethersUserAccount().address,
        Math.floor(Date.now() / 1000) + 60 * 20
      );

      await tx?.wait();
      transactionHash = tx?.hash;
    } finally {
      isTransactionInProgress = false;
    }
  }

  console.log("Transaction executed. TransactionHash is:", transactionHash);
  return transactionHash;
};

const getUserToken0TradableTokens = async (
  tokenIn_: `0x${string}`,
  tokenOut_: `0x${string}`
) => {
  let getToken0ToTrade = [BigInt(0), BigInt(0)];

  const token1ToTrade = await getToken1BalanceToTrade(token1);

  isTransactionInProgress = true;

  tokenOut_ = await validateNativeWETH(tokenOut_);

  try {
    getToken0ToTrade = (await getAmountsOutUniswapV2(
      uniswapRouterV2,
      tokenOut_,
      tokenIn_,
      token1ToTrade
    )) as bigint[];
  } finally {
    isTransactionInProgress = false;
  }

  let userToken0Balance = BigInt(0);

  isTransactionInProgress = true;

  try {
    userToken0Balance = (await new ethers.Contract(
      tokenIn_,
      erc20Abi,
      ethersConfig?.ethersProvider
    ).balanceOf(ethersConfig?.ethersUserAccount()?.address)) as bigint;
  } finally {
    isTransactionInProgress = false;
  }

  const userToken0TradableAmount =
    userToken0Balance > getToken0ToTrade[1]
      ? getToken0ToTrade[1]
      : userToken0Balance;

  if (userToken0TradableAmount === BigInt(0))
    throw new Error("token0 invalid value to trade");

  return userToken0TradableAmount;
};

const buyToken0 = async (
  token1_: `0x${string}`,
  randomWalletKeyObject: PrivateKeyWithObjectArrayType
) => {
  console.log("Buying token0:", token0);
  const token1BalanceToBuy = await getToken1BalanceToTrade(token1_);

  console.log("token1BalanceToBuy", token1BalanceToBuy);

  if (token1BalanceToBuy === BigInt(0)) {
    throw new Error("buyToken0(): token1BalanceToBuy is zero.");
  }

  isTransactionInProgress = true;

  try {
    const transactionHash = await executeSwapUsingUniswapV2(
      token1_,
      token1BalanceToBuy,
      token0,
      uniswapRouterV2,
      randomWalletKeyObject
    );

    console.log(
      "Token Swap",
      transactionHash,
      "TokenIn",
      token1_,
      "tokenInAmount",
      token1BalanceToBuy,
      "tokenOut",
      token0
    );
  } finally {
    isTransactionInProgress = false;
  }
};

const sellToken0 = async (
  token0_: `0x${string}`,
  randomWalletKeyObject: PrivateKeyWithObjectArrayType
) => {
  console.log("Selling token0:", token0_);
  const token0BalanceToSell = await getUserToken0TradableTokens(
    token0_,
    token1
  );

  if (token0BalanceToSell === BigInt(0)) {
    throw new Error("sellToken0(): token0BalanceToSell is zero.");
  }

  isTransactionInProgress = true;

  try {
    const transactionHash = await executeSwapUsingUniswapV2(
      token0_,
      token0BalanceToSell,
      token1,
      uniswapRouterV2,
      randomWalletKeyObject
    );

    console.log(
      "Token Swap",
      transactionHash,
      "TokenIn",
      token0_,
      "tokenInAmount",
      token0BalanceToSell,
      "tokenOut",
      token1
    );
  } finally {
    isTransactionInProgress = false;
  }
};

let nextActionTime = 0;

async function main() {
  console.log("Bot logic running...");
  async function watchBlocksWithRetry() {
    try {
      ethersConfig?.ethersProvider.on("block", async (blockNumber) => {
        console.log("blockNumber", blockNumber);

        const currentTime = Math.floor(Date.now() / 1000);

        if (currentTime > nextActionTime) {
          nextActionTime = currentTime + getRandomTimeInMillis();
          if (!isTransactionInProgress) {
            const randomWalletKeyObject = getRandomPrivateKeyWithObject();
            try {
              if (randomWalletKeyObject?.buy) {
                await buyToken0(token1, randomWalletKeyObject);
              } else {
                await sellToken0(token0, randomWalletKeyObject);
              }

              privateKeyWithObjectArray[randomWalletKeyObject?.index].buy =
                !randomWalletKeyObject.buy;
            } catch (err) {
              console.log(err);
            }
          }
        }

        if (!isTransactionInProgress) {
          console.log(
            "currentTime",
            currentTime,
            "nextActionTime",
            nextActionTime
          );
        }
      });
    } catch (error) {
      console.error("Error in watchBlocks:", error);
      console.log("Retrying in 1 second...");
      setTimeout(watchBlocksWithRetry, 1000);
    }
  }

  watchBlocksWithRetry();
}

main().catch((error) => {
  console.error("Error in bot script:", error);
  process.exit(1); // Ensure process exits on error
});
