// Updated on 2024-11-15T12:26:51.202Z
import { ContractDeploymentObjectsBlockchain } from "../scripts/deploymentFunctions";
export const SwapRouterUpgradeableABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    name: "CommonError",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "ERC1967InvalidImplementation",
    type: "error"
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error"
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error"
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error"
  },
  {
    inputs: [],
    name: "FailedCall",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32"
      }
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256"
      }
    ],
    name: "TokenSwapped",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "router",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token0",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve0",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token1",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve1",
        type: "uint256"
      }
    ],
    name: "TradedReserveUpdatedUser",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user_",
        type: "address"
      },
      {
        internalType: "address",
        name: "router_",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenIn_",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenOut_",
        type: "address"
      }
    ],
    name: "getUserTrades",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "token0Reserve",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "token1Reserve",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256"
          }
        ],
        internalType: "struct StructTradedPrice[]",
        name: "tradedReserve",
        type: "tuple[]"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "token0Reserve",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "token1Reserve",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256"
          }
        ],
        internalType: "struct StructTradedPrice",
        name: "lastTradedReserve",
        type: "tuple"
      },
      {
        internalType: "bool",
        name: "isTraded",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "weth_",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user_",
        type: "address"
      },
      {
        internalType: "address",
        name: "router_",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenOut_",
        type: "address"
      }
    ],
    name: "swapEthForTokensV2",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user_",
        type: "address"
      },
      {
        internalType: "address",
        name: "router_",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenIn_",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountInTokens_",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "tokenOut_",
        type: "address"
      }
    ],
    name: "swapTokensForTokensV2",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
export const SwapRouterUpgradeableDeploymentDetails: ContractDeploymentObjectsBlockchain =
  {
    [97]: {
      isProxyContract: true,
      proxyAddress: "0x563fB22Fc134e4E28Af5a55eA4AfCD8d0b77A48D",
      implementationAddress: "0xE1178b5740AaE06f07871EcC410Ea2c682F115C4",
      contractName: "SwapRouterUpgradeable",
      chainId: 97,
      deployer: "0x33d97D33a9cE65Bd88298E5b4Dd80599dE2937A5",
      abi: SwapRouterUpgradeableABI
    }
  };
