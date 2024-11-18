import { ethers } from "ethers";
import {
  uniswapFactoryV2Abi,
  uniswapPairV2Abi,
  uniswapRouterV2Abi
} from "../../constants/abis/uniswapABI";
import { ethersConfig } from "../config/ethersConfig";
import { nativeTokenIdentifier } from "../../constants/generalConstants";
import { uniswapContracts } from "../../constants/uniswapContracts";
import { StructTradedPriceStructOutput } from "../../contracts/typechain-types/contracts/SwapRouterUpgradeable.sol/SwapRouterUpgradeable";
import { erc20Abi } from "viem";

const uniswapRouterV2: `0x${string}` =
  uniswapContracts?.pancakeswap?.[ethersConfig?.selectedChain?.id]?.v2
    ?.routerAddress!;

export const getWethV2Address = async (
  uniswapRouterV2Address_: `0x${string}`
) => {
  const contract = new ethers.Contract(
    uniswapRouterV2Address_,
    uniswapRouterV2Abi,
    ethersConfig?.ethersProvider
  );

  const weth = await contract.WETH();
  return weth as `0x${string}`;
};

export const validateNativeWETH = async (tokenAddress_: `0x${string}`) => {
  if (tokenAddress_?.toLowerCase() === nativeTokenIdentifier?.toLowerCase()) {
    return await getWethV2Address(uniswapRouterV2);
  }

  return tokenAddress_;
};

export const getAmountsOutUniswapV2 = async (
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

export const getReservesUniswapV2 = async (
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
