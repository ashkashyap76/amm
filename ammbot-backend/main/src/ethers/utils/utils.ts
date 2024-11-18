import { nativeTokenIdentifier } from "../../constants/generalConstants";
import {config} from "dotenv"

config();

export const isNativeToken = (tokenAddress_: `0x${string}`) => {
  return tokenAddress_?.toLowerCase() === nativeTokenIdentifier?.toLowerCase()
    ? true
    : false;
};

export const getRandomTimeInMillis = (): number => {
  const minTime = Number(process.env.RANDOM_TXN_DELAY_START);
  const maxTime = Number(process.env.RANDOM_TXN_DELAY_END);

  return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
};
