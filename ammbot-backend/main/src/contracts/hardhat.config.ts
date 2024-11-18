// Author: MartianAcademy
// Contact: martianacademy@gmail.com
// Usage: Give credit to MartianAcademy

// Importing necessary modules and types from Hardhat and other libraries
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox"; // Toolbox for Hardhat with commonly used plugins
import "@openzeppelin/hardhat-upgrades"; // Plugin for upgrading smart contracts
import dotenv from "dotenv"; // Module for loading environment variables
import * as tdly from "@tenderly/hardhat-tenderly"; // Tenderly integration for Hardhat
import { rpcUrls } from "../constants/rpcUrls";
import { bsc, bscTestnet } from "viem/chains";

// Load environment variables from the .env file
dotenv.config();

// Retrieve the private key from environment variables
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
if (!PRIVATE_KEY) {
  throw new Error("PRIVATE_KEY is undefined");
}

// Retrieve the Polygon API key from environment variables
const POLYGON_API_KEY = process.env.POLYGON_API_KEY || "";
if (!POLYGON_API_KEY) {
  throw new Error("POLYGON_API_KEY is undefined");
}

const BSC_MAINNET_KEY = process.env.BSC_MAINNET_KEY || "";
if (!BSC_MAINNET_KEY) {
  throw new Error("BSC_MAINNET_KEY is undefined");
}

// Retrieve Tenderly project name and username from environment variables
const TENDERLY_PROJECT_NAME = process.env.TENDERLY_PROJECT_NAME;
if (!TENDERLY_PROJECT_NAME) {
  throw new Error("TENDERLY_PROJECT_NAME is undefined");
}
const TENDERLY_USERNAME = process.env.TENDERLY_USERNAME;
if (!TENDERLY_USERNAME) {
  throw new Error("TENDERLY_USERNAME is undefined");
}

// // Check Tenderly verification settings
// const { TENDERLY_PRIVATE_VERIFICATION, TENDERLY_AUTOMATIC_VERIFICATION } =
//   process.env;

// const privateVerification = TENDERLY_PRIVATE_VERIFICATION === "false"; // Enable private verification
// const automaticVerifications = TENDERLY_AUTOMATIC_VERIFICATION === "false"; // Enable automatic verification

// // Setup Tenderly with automatic verification settings
// tdly.setup({ automaticVerifications: false });

// Hardhat configuration
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.26", // Solidity compiler version
    settings: {
      optimizer: {
        enabled: true, // Enable optimizer for gas efficiency
        runs: 200 // Number of optimization runs
      },
      viaIR: true
    }
  },
  etherscan: {
    apiKey: {
      polygon: POLYGON_API_KEY, // API key for Etherscan
      bsc: BSC_MAINNET_KEY,
      bscTestnet: BSC_MAINNET_KEY
    }
  },
  defaultNetwork: "polygonTenderly", // Default network for Hardhat
  networks: {
    hardhat: {
      forking: {
        url: "https://polygon-mainnet.infura.io/v3/640049db6b3841548b7774409e98b5cf"
      },
      chains: {
        137: {
          hardforkHistory: {
            berlin: 10000000,
            london: 20000000
          }
        }
      }
    },
    polygonGanache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    },

    polygonTenderly: {
      url: process.env.TENDERLY_POLYGON_PUBLIC_RPC, // RPC URL for Tenderly
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [] // Load private key if available
    },
    polygon: {
      url: "https://polygon-bor-rpc.publicnode.com", // RPC URL for Tenderly
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [] // Load private key if available
    },
    bscTenderly: {
      url: rpcUrls[bsc.id]?.rpc?.tenderly,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    },
    bscTestnet: {
      url: rpcUrls[bscTestnet.id]?.rpc?.primary,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  },
  sourcify: {
    enabled: true // Enable Sourcify for contract verification
  }
  // tenderly: {
  //   project: TENDERLY_PROJECT_NAME!, // Tenderly project name
  //   username: TENDERLY_USERNAME! // Tenderly username
  //   // privateVerification // Visibility setting for contract verification
  // }
};

// Export the configuration
export default config;
