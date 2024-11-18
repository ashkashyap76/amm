import { bsc, bscTestnet, hardhat, polygon } from "viem/chains";

type RPCSchemaByChainType = {
  [key: number]: {
    rpc: {
      primary: string;
      secondary: string;
      tenderly: string;
    };
    wss: {
      primary: string;
      secondary: string;
      tenderly: string;
    };
  };
};

export const rpcUrls: RPCSchemaByChainType = {
  [bsc.id]: {
    rpc: {
      primary: "https://bsc-dataseed2.binance.org/",
      secondary: "https://bsc-dataseed1.binance.org/",
      tenderly:
        "https://virtual.binance.rpc.tenderly.co/2c49ddda-d88e-4570-9f71-901263193f25"
    },
    wss: {
      primary:
        "wss://virtual.binance.rpc.tenderly.co/579de612-a314-4a07-8ded-73e0a6ca92b8",
      secondary:
        "wss://virtual.binance.rpc.tenderly.co/579de612-a314-4a07-8ded-73e0a6ca92b8",
      tenderly:
        "wss://virtual.binance.rpc.tenderly.co/579de612-a314-4a07-8ded-73e0a6ca92b8"
    }
  },
  [bscTestnet.id]: {
    rpc: {
      primary: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      secondary: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      tenderly: ""
    },
    wss: {
      primary: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      secondary: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      tenderly: ""
    }
  },
  [polygon.id]: {
    rpc: {
      primary: "https://polygon-rpc.com",
      secondary: "https://polygon-rpc.com",
      tenderly:
        "https://virtual.polygon.rpc.tenderly.co/bb9e2c1f-8c02-4366-af6a-e521d0dd8262"
    },
    wss: {
      primary:
        "wss://virtual.binance.rpc.tenderly.co/579de612-a314-4a07-8ded-73e0a6ca92b8",
      secondary:
        "wss://virtual.binance.rpc.tenderly.co/579de612-a314-4a07-8ded-73e0a6ca92b8",
      tenderly:
        "wss://virtual.binance.rpc.tenderly.co/579de612-a314-4a07-8ded-73e0a6ca92b8"
    }
  },
  [hardhat.id]: {
    rpc: {
      primary: "http://127.0.0.1:8545/",
      secondary: "http://127.0.0.1:8545/",
      tenderly:
        "https://virtual.polygon.rpc.tenderly.co/5a5e2ef3-0d1c-428c-8040-f8dc6eb313dd"
    },
    wss: {
      primary: "http://127.0.0.1:8545/",
      secondary: "http://127.0.0.1:8545/",
      tenderly:
        "https://virtual.polygon.rpc.tenderly.co/5a5e2ef3-0d1c-428c-8040-f8dc6eb313dd"
    }
  }
};
