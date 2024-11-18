import { ethers } from "ethers";
import { rpcUrls } from "../../constants/rpcUrls";
import { bsc } from "viem/chains";
import { config } from "dotenv";

config(); // Load .env

export const privateKey: `0x${string}` | undefined = process.env.PRIVATE_KEY as
  | `0x${string}`
  | undefined;

if (!privateKey) {
  console.error("PRIVATE_KEY is undefined");
  throw new Error("Private key is undefined");
}

console.log("Loaded PRIVATE_KEY:", privateKey);

const selectedChain = bsc;
const rpcUrl = rpcUrls?.[selectedChain?.id]?.rpc?.primary;
const ethersProvider = new ethers.JsonRpcProvider(rpcUrl);

export const ethersConfig = {
  selectedChain: selectedChain,
  rpcUrl: rpcUrl,
  ethersProvider: ethersProvider,
  ethersUserAccount: (privateKey_?: `0x${string}`) => {
    const key = privateKey_ || privateKey;
    if (!key) throw new Error("A valid private key is required.");
    return new ethers.Wallet(key, ethersProvider);
  }
};
