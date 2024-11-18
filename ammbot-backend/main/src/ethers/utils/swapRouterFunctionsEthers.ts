import { ethers } from "ethers";
import { erc20Abi } from "viem";
import { nativeTokenIdentifier } from "../../constants/generalConstants";
import {
  SwapRouterUpgradeableABI,
  SwapRouterUpgradeableDeploymentDetails
} from "../../contracts/contractDeploymentDetails/SwapRouterUpgradeable";
import { StructTradedPriceStructOutput } from "../../contracts/typechain-types/contracts/SwapRouterUpgradeable.sol/SwapRouterUpgradeable";
import { ethersConfig } from "../config/ethersConfig";

const swapRouterAddress = SwapRouterUpgradeableDeploymentDetails[
  ethersConfig?.selectedChain.id
]?.proxyAddress as `0x${string}`;

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
