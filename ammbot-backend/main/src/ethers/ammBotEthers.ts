import { ethers, parseEther } from "ethers";
import { ethersConfig } from "./config/ethersConfig";
import { uniswapContracts } from "../constants/uniswapContracts";
import { TBotDeploymentDetails } from "../contracts/contractDeploymentDetails/TBot";
import { TTetherDeploymentDetails } from "../contracts/contractDeploymentDetails/TTether";
import {
  uniswapFactoryV2Abi,
  uniswapPairV2Abi,
  uniswapRouterV2Abi
} from "../constants/abis/uniswapABI";
import { nativeTokenIdentifier } from "../constants/generalConstants";
import { erc20Abi } from "viem";
import {
  SwapRouterUpgradeableABI,
  SwapRouterUpgradeableDeploymentDetails
} from "../contracts/contractDeploymentDetails/SwapRouterUpgradeable";
import { StructTradedPriceStructOutput } from "../contracts/typechain-types/contracts/SwapRouterUpgradeable.sol/SwapRouterUpgradeable";

// Pre-set percentage change in price to trigger a trade
const percentageChangeThreshold = 0.05; // 5%
const percentagePriceChangeLower = 0.01;
const percentageOfFundsWithTrade = 0.1; // 10%
const perSlippageTollarance = 0.1; // 10%
const perMaxTokensVsReserve = 0.1; // 10%

const token0: `0x${string}` =
  TBotDeploymentDetails[ethersConfig?.selectedChain?.id]?.proxyAddress;
const token1: `0x${string}` =
  TTetherDeploymentDetails[ethersConfig?.selectedChain?.id]?.proxyAddress;
const uniswapRouterV2: `0x${string}` =
  uniswapContracts?.pancakeswap?.[ethersConfig?.selectedChain?.id]?.v2
    ?.routerAddress!;

const swapRouterAddress = SwapRouterUpgradeableDeploymentDetails[
  ethersConfig?.selectedChain.id
]?.proxyAddress as `0x${string}`;

let tokenIn = token1;
let tokenOut = token0;

let isTransactionInProgress = false; // Flag to track transaction status

const erc20TokenReadInterface = async (tokenAddress: `0x${string}`) => {
  const contract = new ethers.Contract(
    tokenAddress,
    erc20Abi,
    ethersConfig?.ethersProvider
  );
};

const erc20TokenWriteInterface = async (tokenAddress: `0x${string}`) => {
  const contract = new ethers.Contract(
    tokenAddress,
    erc20Abi,
    ethersConfig?.ethersUserAccount()
  );
};

const getWethV2Address = async (uniswapRouterV2Address_: `0x${string}`) => {
  const contract = new ethers.Contract(
    uniswapRouterV2Address_,
    uniswapRouterV2Abi,
    ethersConfig?.ethersProvider
  );

  const weth = await contract.WETH();
  return weth as `0x${string}`;
};

const validateNativeToken = async (
  tokenIn_: `0x${string}`,
  tokenOut_: `0x${string}`
) => {
  if (tokenIn_?.toLowerCase() === nativeTokenIdentifier?.toLowerCase()) {
    tokenIn_ = await getWethV2Address(uniswapRouterV2);
  } else if (
    tokenOut_?.toLowerCase() === nativeTokenIdentifier?.toLowerCase()
  ) {
    tokenOut_ = await getWethV2Address(uniswapRouterV2);
  }
};

const getAmountsOut = async (
  uniswapRouterV2Address_: `0x${string}`,
  tokenIn_: `0x${string}`,
  tokenOut_: `0x${string}`,
  amountIn_: bigint
) => {
  const contract = new ethers.Contract(
    uniswapRouterV2Address_,
    uniswapRouterV2Abi,
    ethersConfig?.ethersProvider
  );

  const amountsOut = (await contract.getAmountsOut(amountIn_, [
    tokenIn_,
    tokenOut_
  ])) as bigint[];

  return amountsOut;
};

const getCurrentReserve = async (
  uniswapV2RouterAddress_: `0x${string}`,
  tokenIn_: `0x${string}`,
  tokenOut_: `0x${string}`
) => {
  const routerContract = new ethers.Contract(
    uniswapV2RouterAddress_,
    uniswapRouterV2Abi,
    ethersConfig?.ethersProvider
  );

  const factoryAddress = await routerContract.factory();

  const factoryContract = new ethers.Contract(
    factoryAddress,
    uniswapFactoryV2Abi,
    ethersConfig?.ethersProvider
  );

  const pairAddress = await factoryContract.getPair(tokenIn_, tokenOut_);

  const pairContract = new ethers.Contract(
    pairAddress,
    uniswapPairV2Abi,
    ethersConfig?.ethersProvider
  );

  const reserves =
    (await pairContract.getReserves()) as StructTradedPriceStructOutput;

  const token0Address = await pairContract.token0();

  let tokenInReserve = BigInt(0);
  let tokenOutReserve = BigInt(0);

  if (token0Address === tokenIn_) {
    tokenInReserve = reserves[0];
    tokenOutReserve = reserves[1];
  } else {
    tokenInReserve = reserves[1];
    tokenOutReserve = reserves[0];
  }

  const tokenInDecimals = (await new ethers.Contract(
    tokenIn_,
    erc20Abi,
    ethersConfig?.ethersProvider
  ).decimals()) as bigint;

  const tokenOutDecimals = (await new ethers.Contract(
    tokenOut_,
    erc20Abi,
    ethersConfig?.ethersProvider
  ).decimals()) as bigint;

  const tokenInReserveIn18Decimals =
    tokenInReserve * BigInt(10 ** (18 - Number(tokenInDecimals)));

  const tokenOutReserveIn18Decimals =
    tokenOutReserve * BigInt(10 ** (18 - Number(tokenOutDecimals)));

  return {
    tokenInReserve: tokenInReserveIn18Decimals,
    tokenOutReserve: tokenOutReserveIn18Decimals
  };
};

const getLastTradedPriceFromSwapRouter = async (
  userAddress_: `0x${string}`,
  swapRouterAddress_: `0x${string}`,
  uniswapRouterV2Address_: `0x${string}`,
  tokenIn_: `0x${string}`,
  tokenOut_: `0x${string}`
) => {
  const contract = new ethers.Contract(
    swapRouterAddress_,
    SwapRouterUpgradeableABI,
    ethersConfig?.ethersProvider
  );

  const result = (await contract.getUserTrades(
    userAddress_,
    uniswapRouterV2Address_,
    tokenIn_,
    tokenOut_
  )) as [
    StructTradedPriceStructOutput[],
    StructTradedPriceStructOutput,
    boolean
  ] & {
    tradedReserve: StructTradedPriceStructOutput[];
    lastTradedReserve: StructTradedPriceStructOutput;
    isTraded: boolean;
  };

  let lastTradedTokenInReserve = result.tradedReserve?.[0];
  let lastTradedTokenOutReserve = result?.tradedReserve?.[1];
  let isTraded = result?.tradedReserve?.[2];

  return { lastTradedTokenInReserve, lastTradedTokenOutReserve, isTraded };
};

const executeSwapUsingSwapRouter = async (
  tokenIn_: `0x${string}`,
  valueInTokens_: bigint,
  tokenOut_: `0x${string}`,
  uniswapRouterV2_: `0x${string}`
) => {
  const swapRouterContract = new ethers.Contract(
    swapRouterAddress,
    SwapRouterUpgradeableABI,
    ethersConfig?.ethersUserAccount()
  );

  let transactionHash = "";

  if (tokenIn_.toLowerCase() === nativeTokenIdentifier.toLowerCase()) {
    const tx = await swapRouterContract.swapEthForTokensV2(
      ethersConfig?.ethersUserAccount()?.address,
      uniswapRouterV2_,
      tokenOut_,
      { value: valueInTokens_ }
    );

    transactionHash = tx.hash;
  } else {
    const erc20Contract = new ethers.Contract(
      tokenIn_,
      erc20Abi,
      ethersConfig?.ethersUserAccount()
    );

    const approveTx = await erc20Contract.approve(
      swapRouterAddress,
      valueInTokens_
    );

    await approveTx?.wait();

    const swapTx = await swapRouterContract.swapTokensForTokensV2(
      ethersConfig?.ethersUserAccount()?.address,
      uniswapRouterV2_,
      tokenIn_,
      valueInTokens_,
      tokenOut_
    );

    await swapTx?.wait();

    transactionHash = swapTx?.hash;
  }

  console.log("Transaction executed. TransactionHash is:", transactionHash);
  return transactionHash;
};

const executeSwapUsingUniswapV2 = async (
  tokenIn_: `0x${string}`,
  valueInTokens_: bigint,
  tokenOut_: `0x${string}`,
  uniswapRouterV2_: `0x${string}`
) => {
  // Create the Uniswap V2 Router contract with the wallet (which includes a signer)
  const uniswapRouterContract = new ethers.Contract(
    uniswapRouterV2_,
    uniswapRouterV2Abi,
    ethersConfig?.ethersUserAccount()
  );

  let transactionHash = "";

  if (tokenIn_.toLowerCase() === nativeTokenIdentifier.toLowerCase()) {
    // Swap ETH for tokens
    const tx = await uniswapRouterContract.swapExactETHForTokens(
      0, // Minimum amount of tokens to receive
      [tokenIn_, tokenOut_], // Path (ETH -> tokenOut)
      ethersConfig?.ethersUserAccount()?.address, // Recipient address
      Math.floor(Date.now() / 1000) + 60 * 20, // Deadline (20 minutes from now)
      { value: valueInTokens_ }
    );

    transactionHash = tx?.hash;
  } else {
    // Create the ERC20 contract with the wallet (which includes a signer)
    const erc20Contract = new ethers.Contract(
      tokenIn_,
      erc20Abi,
      ethersConfig?.ethersUserAccount()
    );

    // Approve the Uniswap V2 Router to spend the tokens
    const approveTx = await erc20Contract.approve(
      uniswapRouterV2_,
      valueInTokens_
    );

    await approveTx?.wait();

    transactionHash = approveTx?.hash;

    // Swap tokens for tokens
    const tx = await uniswapRouterContract.swapExactTokensForTokens(
      valueInTokens_, // Amount of tokens to swap
      0, // Minimum amount of tokens to receive
      [tokenIn_, tokenOut_], // Path (tokenIn -> tokenOut)
      ethersConfig?.ethersUserAccount()?.address, // Recipient address
      Math.floor(Date.now() / 1000) + 60 * 20 // Deadline (20 minutes from now)
    );

    transactionHash = tx?.hash;
  }

  console.log("Transaction executed. TransactionHash is:", transactionHash);
  return transactionHash;
};

const getTokenPrice = (
  tokenIn_: `0x${string}`,
  currentReserve_: {
    tokenInReserve: bigint;
    tokenOutReserve: bigint;
  },
  lastTradedReserve_: {
    lastTradedTokenInReserve: StructTradedPriceStructOutput;
    lastTradedTokenOutReserve: StructTradedPriceStructOutput;
    isTraded: StructTradedPriceStructOutput;
  }
) => {
  let currentPrice = BigInt(0);
  let lastTradedPrice = BigInt(0);

  if (
    (tokenIn?.toLocaleLowerCase() === token0?.toLocaleLowerCase() &&
      currentReserve_.tokenInReserve > BigInt(0)) ||
    currentReserve_.tokenOutReserve > BigInt(0) ||
    lastTradedReserve_?.lastTradedTokenInReserve?.token0Reserve > BigInt(0) ||
    lastTradedReserve_?.lastTradedTokenInReserve?.token1Reserve > BigInt(0)
  ) {
    currentPrice =
      currentReserve_.tokenInReserve / currentReserve_.tokenOutReserve;
    lastTradedPrice =
      lastTradedReserve_?.lastTradedTokenInReserve?.token0Reserve /
      lastTradedReserve_?.lastTradedTokenInReserve?.token1Reserve;
  } else {
    currentPrice =
      currentReserve_.tokenOutReserve / currentReserve_.tokenInReserve;
    lastTradedPrice =
      lastTradedReserve_?.lastTradedTokenInReserve?.token1Reserve /
      lastTradedReserve_?.lastTradedTokenInReserve?.token0Reserve;
  }

  return { currentPrice, lastTradedPrice };
};

const getToken1BalanceToTrade = async (token1_: `0x${string}`) => {
  let user1TokenBalance = BigInt(0);

  isTransactionInProgress = true;

  try {
    user1TokenBalance = (await new ethers.Contract(
      token1_,
      erc20Abi,
      ethersConfig?.ethersProvider
    ).balanceOf(ethersConfig?.ethersUserAccount()?.address)) as bigint;
  } finally {
    isTransactionInProgress = false;
  }

  if (user1TokenBalance === BigInt(0)) {
    throw new Error("User token1Balance is zero");
  }

  const token1ToTrade = user1TokenBalance * BigInt(percentageOfFundsWithTrade);
  return token1ToTrade;
};

const getUserToken0TradableTokens = async (
  tokenIn_: `0x${string}`,
  tokenOut_: `0x${string}`
) => {
  let getToken0ToTrade = [BigInt(0), BigInt(0)];

  const token1ToTrade = await getToken1BalanceToTrade(tokenOut_);

  isTransactionInProgress = true;

  try {
    getToken0ToTrade = (await getAmountsOut(
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

async function main() {
  async function watchBlocksWithRetry() {
    try {
      ethersConfig?.ethersProvider.on("block", async (blockNumber) => {
        console.log("blockNumber", blockNumber);

        await validateNativeToken(tokenIn, tokenOut);

        const currentReserve = await getCurrentReserve(
          uniswapRouterV2,
          tokenIn,
          tokenOut
        );

        console.log("currentReserve", currentReserve);

        const lastTradedReserve = await getLastTradedPriceFromSwapRouter(
          ethersConfig?.ethersUserAccount()?.address as `0x${string}`,
          swapRouterAddress,
          uniswapRouterV2,
          tokenIn,
          tokenOut
        );

        if (
          currentReserve.tokenInReserve === BigInt(0) ||
          currentReserve.tokenOutReserve === BigInt(0)
        ) {
          throw new Error("No valid reserve.");
        }

        const { currentPrice, lastTradedPrice } = getTokenPrice(
          tokenIn,
          currentReserve,
          lastTradedReserve
        );

        if (currentPrice === BigInt(0)) {
          throw new Error("Invalid current price");
        }

        if (
          (currentPrice * BigInt(100 + 100 * percentageChangeThreshold) <
            lastTradedPrice ||
            !lastTradedReserve.isTraded) &&
          !isTransactionInProgress
        ) {
          console.log(
            "isTraded",
            lastTradedReserve.isTraded,
            "User running bot first time placing first transaction"
          );

          const tokenInValue = await getToken1BalanceToTrade(tokenIn);

          isTransactionInProgress = true;

          try {
            const transactionHash = await executeSwapUsingSwapRouter(
              tokenIn,
              tokenInValue,
              tokenOut,
              uniswapRouterV2
            );

            console.log("Buy Executed", transactionHash);
          } finally {
            isTransactionInProgress = false; // Reset the flag after the transaction is completed
          }
        } else {
          if (
            currentPrice >
            lastTradedPrice * BigInt(100 + 100 * percentageChangeThreshold)
          ) {
            const tokensToSell = await getUserToken0TradableTokens(
              tokenOut,
              tokenIn
            );

            if (tokensToSell > BigInt(0)) {
              isTransactionInProgress = true;

              try {
                const transactionHash = await executeSwapUsingSwapRouter(
                  tokenOut,
                  tokensToSell,
                  tokenIn,
                  uniswapRouterV2
                );

                console.log("Sell Executed", transactionHash);
              } finally {
                isTransactionInProgress = false; // Reset the flag after the transaction is completed
              }
            }
          }

          isTransactionInProgress = true;
        }
      });
    } catch (error) {
      console.error("Error in watchBlocks:", error);
      console.log("Retrying in 1 second...");
      setTimeout(watchBlocksWithRetry, 1000);
    }
  }

  // Start watching blocks with retry logic
  watchBlocksWithRetry();
}

main().catch(console.error);
