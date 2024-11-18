import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// defaultsContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const defaultsContractAbi = [
  {
    type: "error",
    inputs: [{ name: "target", internalType: "address", type: "address" }],
    name: "AddressEmptyCode"
  },
  {
    type: "error",
    inputs: [{ name: "cause", internalType: "string", type: "string" }],
    name: "CommonError"
  },
  {
    type: "error",
    inputs: [
      { name: "implementation", internalType: "address", type: "address" }
    ],
    name: "ERC1967InvalidImplementation"
  },
  { type: "error", inputs: [], name: "ERC1967NonPayable" },
  { type: "error", inputs: [], name: "EnforcedPause" },
  { type: "error", inputs: [], name: "ExpectedPause" },
  { type: "error", inputs: [], name: "FailedInnerCall" },
  { type: "error", inputs: [], name: "InvalidInitialization" },
  { type: "error", inputs: [], name: "NotInitializing" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner"
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount"
  },
  { type: "error", inputs: [], name: "ReentrancyGuardReentrantCall" },
  { type: "error", inputs: [], name: "UUPSUnauthorizedCallContext" },
  {
    type: "error",
    inputs: [{ name: "slot", internalType: "bytes32", type: "bytes32" }],
    name: "UUPSUnsupportedProxiableUUID"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "", internalType: "address", type: "address", indexed: false },
      { name: "", internalType: "bool", type: "bool", indexed: false }
    ],
    name: "AdminStatusChanged"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "",
        internalType: "struct StructAdminWithFees",
        type: "tuple",
        components: [
          { name: "admin", internalType: "address", type: "address" },
          { name: "status", internalType: "bool", type: "bool" },
          {
            name: "fees",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          }
        ],
        indexed: false
      },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "BeneficiaryUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "levelsLimit",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "CalLevelLimitUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contract_",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "contractType_",
        internalType: "enum ContractType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "ContractUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "inactiveFees",
        internalType: "struct StructPerWithDivision",
        type: "tuple",
        components: [
          { name: "per", internalType: "uint256", type: "uint256" },
          { name: "division", internalType: "uint256", type: "uint256" }
        ],
        indexed: false
      }
    ],
    name: "InactiveUserFeesUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "version",
        internalType: "uint64",
        type: "uint64",
        indexed: false
      }
    ],
    name: "Initialized"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "",
        internalType: "struct StructInvest",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "user", internalType: "address", type: "address" },
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "name", internalType: "string", type: "string" },
          { name: "requireSubscription", internalType: "bool", type: "bool" },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "token",
            internalType: "struct StructSupportedToken",
            type: "tuple",
            components: [
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "isNative", internalType: "bool", type: "bool" },
              {
                name: "contractAddress",
                internalType: "address",
                type: "address"
              },
              {
                name: "chainLinkAggregatorV3Address",
                internalType: "address",
                type: "address"
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint8", type: "uint8" }
            ]
          },
          { name: "tokenValueInWei", internalType: "uint256", type: "uint256" },
          { name: "tokenPrice", internalType: "uint256", type: "uint256" },
          { name: "valueInUSD", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
          { name: "duration", internalType: "uint256", type: "uint256" },
          { name: "isPayReferral", internalType: "bool", type: "bool" },
          { name: "isPayRefferalOnROI", internalType: "bool", type: "bool" },
          { name: "pendingReward", internalType: "uint256", type: "uint256" },
          { name: "rewardClaimed", internalType: "uint256", type: "uint256" },
          {
            name: "calRewardClaimed",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perApy",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "maxLimitMultiplier",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxLimit", internalType: "uint256", type: "uint256" },
          { name: "currentLimit", internalType: "uint256", type: "uint256" }
        ],
        indexed: false
      }
    ],
    name: "InvestmentPlansUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "",
        internalType: "struct StructSupportedToken",
        type: "tuple",
        components: [
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "isNative", internalType: "bool", type: "bool" },
          { name: "contractAddress", internalType: "address", type: "address" },
          {
            name: "chainLinkAggregatorV3Address",
            internalType: "address",
            type: "address"
          },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint8", type: "uint8" }
        ],
        indexed: false
      }
    ],
    name: "NativeTokenUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "OwnershipTransferStarted"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "OwnershipTransferred"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "Paused"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "fees",
        internalType: "struct StructFeesWithTimeline",
        type: "tuple",
        components: [
          {
            name: "feesPer",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          { name: "durationBefore", internalType: "uint256", type: "uint256" }
        ],
        indexed: false
      },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "PreUnStakeFeesUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "",
        internalType: "struct StructSupportedToken",
        type: "tuple",
        components: [
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "isNative", internalType: "bool", type: "bool" },
          { name: "contractAddress", internalType: "address", type: "address" },
          {
            name: "chainLinkAggregatorV3Address",
            internalType: "address",
            type: "address"
          },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint8", type: "uint8" }
        ],
        indexed: false
      }
    ],
    name: "ProjectTokenUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "",
        internalType: "struct StructAdminWithFees",
        type: "tuple",
        components: [
          { name: "admin", internalType: "address", type: "address" },
          { name: "status", internalType: "bool", type: "bool" },
          {
            name: "fees",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          }
        ],
        indexed: false
      },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "ProviderUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "referralRates",
        internalType: "struct StructReferralRates[]",
        type: "tuple[]",
        components: [
          {
            name: "referralRate",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          { name: "levelCondition", internalType: "uint256", type: "uint256" }
        ],
        indexed: false
      },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "ReferralRatesUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "rewardObject",
        internalType: "struct StructRewardObjectDefaults[]",
        type: "tuple[]",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "name", internalType: "string", type: "string" },
          {
            name: "userInitialTimeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeRewardIdCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxUsersLimit", internalType: "uint256", type: "uint256" },
          {
            name: "rewardToDistribute",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perToDistribute",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "rewardType",
            internalType: "enum RewardType",
            type: "uint8"
          }
        ],
        indexed: false
      }
    ],
    name: "RewardsObjectUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "",
        internalType: "struct StructSupportedToken",
        type: "tuple",
        components: [
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "isNative", internalType: "bool", type: "bool" },
          { name: "contractAddress", internalType: "address", type: "address" },
          {
            name: "chainLinkAggregatorV3Address",
            internalType: "address",
            type: "address"
          },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint8", type: "uint8" }
        ],
        indexed: false
      }
    ],
    name: "StableTokenUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "",
        internalType: "struct StructSupportedToken",
        type: "tuple",
        components: [
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "isNative", internalType: "bool", type: "bool" },
          { name: "contractAddress", internalType: "address", type: "address" },
          {
            name: "chainLinkAggregatorV3Address",
            internalType: "address",
            type: "address"
          },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint8", type: "uint8" }
        ],
        indexed: false
      }
    ],
    name: "SupportedTokenUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "Unpaused"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "implementation",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "Upgraded"
  },
  {
    type: "function",
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "WETH",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "token_", internalType: "address", type: "address" }],
    name: "activateSupportedToken",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "token_", internalType: "address", type: "address" }],
    name: "disableSupportedToken",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [],
    name: "getAdminsList",
    outputs: [
      {
        name: "admins",
        internalType: "struct StructAdmin[]",
        type: "tuple[]",
        components: [
          { name: "admin", internalType: "address", type: "address" },
          { name: "status", internalType: "bool", type: "bool" }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      {
        name: "contractType_",
        internalType: "enum ContractType",
        type: "uint8"
      }
    ],
    name: "getContractById",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      }
    ],
    name: "getDefaults",
    outputs: [
      {
        name: "defaultsReturn",
        internalType: "struct StructDefaultsReturn",
        type: "tuple",
        components: [
          {
            name: "adminsList",
            internalType: "struct StructAdmin[]",
            type: "tuple[]",
            components: [
              { name: "admin", internalType: "address", type: "address" },
              { name: "status", internalType: "bool", type: "bool" }
            ]
          },
          { name: "contracts", internalType: "address[]", type: "address[]" },
          {
            name: "implementations",
            internalType: "address[]",
            type: "address[]"
          },
          {
            name: "referralRates",
            internalType: "struct StructReferralRates[]",
            type: "tuple[]",
            components: [
              {
                name: "referralRate",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              },
              {
                name: "levelCondition",
                internalType: "uint256",
                type: "uint256"
              }
            ]
          },
          { name: "calLevelsLimit", internalType: "uint256", type: "uint256" },
          {
            name: "nativeToken",
            internalType: "struct StructSupportedToken",
            type: "tuple",
            components: [
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "isNative", internalType: "bool", type: "bool" },
              {
                name: "contractAddress",
                internalType: "address",
                type: "address"
              },
              {
                name: "chainLinkAggregatorV3Address",
                internalType: "address",
                type: "address"
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint8", type: "uint8" }
            ]
          },
          {
            name: "projectToken",
            internalType: "struct StructSupportedToken",
            type: "tuple",
            components: [
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "isNative", internalType: "bool", type: "bool" },
              {
                name: "contractAddress",
                internalType: "address",
                type: "address"
              },
              {
                name: "chainLinkAggregatorV3Address",
                internalType: "address",
                type: "address"
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint8", type: "uint8" }
            ]
          },
          {
            name: "stableToken",
            internalType: "struct StructSupportedToken",
            type: "tuple",
            components: [
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "isNative", internalType: "bool", type: "bool" },
              {
                name: "contractAddress",
                internalType: "address",
                type: "address"
              },
              {
                name: "chainLinkAggregatorV3Address",
                internalType: "address",
                type: "address"
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint8", type: "uint8" }
            ]
          },
          {
            name: "supportedTokensArray",
            internalType: "struct StructSupportedToken[]",
            type: "tuple[]",
            components: [
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "isNative", internalType: "bool", type: "bool" },
              {
                name: "contractAddress",
                internalType: "address",
                type: "address"
              },
              {
                name: "chainLinkAggregatorV3Address",
                internalType: "address",
                type: "address"
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint8", type: "uint8" }
            ]
          },
          {
            name: "investmentPlans",
            internalType: "struct StructInvest[]",
            type: "tuple[]",
            components: [
              { name: "id", internalType: "uint256", type: "uint256" },
              { name: "user", internalType: "address", type: "address" },
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "name", internalType: "string", type: "string" },
              {
                name: "requireSubscription",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "investmentType",
                internalType: "enum InvestmentType",
                type: "uint8"
              },
              {
                name: "token",
                internalType: "struct StructSupportedToken",
                type: "tuple",
                components: [
                  { name: "isActive", internalType: "bool", type: "bool" },
                  { name: "isNative", internalType: "bool", type: "bool" },
                  {
                    name: "contractAddress",
                    internalType: "address",
                    type: "address"
                  },
                  {
                    name: "chainLinkAggregatorV3Address",
                    internalType: "address",
                    type: "address"
                  },
                  { name: "name", internalType: "string", type: "string" },
                  { name: "symbol", internalType: "string", type: "string" },
                  { name: "decimals", internalType: "uint8", type: "uint8" }
                ]
              },
              {
                name: "tokenValueInWei",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "tokenPrice", internalType: "uint256", type: "uint256" },
              { name: "valueInUSD", internalType: "uint256", type: "uint256" },
              { name: "timestamp", internalType: "uint256", type: "uint256" },
              { name: "duration", internalType: "uint256", type: "uint256" },
              { name: "isPayReferral", internalType: "bool", type: "bool" },
              {
                name: "isPayRefferalOnROI",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "pendingReward",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "rewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "calRewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "perApy",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              },
              {
                name: "maxLimitMultiplier",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "maxLimit", internalType: "uint256", type: "uint256" },
              {
                name: "currentLimit",
                internalType: "uint256",
                type: "uint256"
              }
            ]
          },
          {
            name: "createLiquidityPer",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "swapPer",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "preUnStakeFees",
            internalType: "struct StructFeesWithTimeline[]",
            type: "tuple[]",
            components: [
              {
                name: "feesPer",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              },
              {
                name: "durationBefore",
                internalType: "uint256",
                type: "uint256"
              }
            ]
          },
          {
            name: "claimFees",
            internalType: "struct StructFeesWithTimeline[]",
            type: "tuple[]",
            components: [
              {
                name: "feesPer",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              },
              {
                name: "durationBefore",
                internalType: "uint256",
                type: "uint256"
              }
            ]
          },
          {
            name: "provider",
            internalType: "struct StructAdminWithFees",
            type: "tuple",
            components: [
              { name: "admin", internalType: "address", type: "address" },
              { name: "status", internalType: "bool", type: "bool" },
              {
                name: "fees",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              }
            ]
          },
          {
            name: "beneficiary",
            internalType: "struct StructAdminWithFees",
            type: "tuple",
            components: [
              { name: "admin", internalType: "address", type: "address" },
              { name: "status", internalType: "bool", type: "bool" },
              {
                name: "fees",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              }
            ]
          },
          {
            name: "inactiveUserFees",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      },
      { name: "id_", internalType: "uint256", type: "uint256" }
    ],
    name: "getInvestmentPlanById",
    outputs: [
      {
        name: "",
        internalType: "struct StructInvest",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "user", internalType: "address", type: "address" },
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "name", internalType: "string", type: "string" },
          { name: "requireSubscription", internalType: "bool", type: "bool" },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "token",
            internalType: "struct StructSupportedToken",
            type: "tuple",
            components: [
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "isNative", internalType: "bool", type: "bool" },
              {
                name: "contractAddress",
                internalType: "address",
                type: "address"
              },
              {
                name: "chainLinkAggregatorV3Address",
                internalType: "address",
                type: "address"
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint8", type: "uint8" }
            ]
          },
          { name: "tokenValueInWei", internalType: "uint256", type: "uint256" },
          { name: "tokenPrice", internalType: "uint256", type: "uint256" },
          { name: "valueInUSD", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
          { name: "duration", internalType: "uint256", type: "uint256" },
          { name: "isPayReferral", internalType: "bool", type: "bool" },
          { name: "isPayRefferalOnROI", internalType: "bool", type: "bool" },
          { name: "pendingReward", internalType: "uint256", type: "uint256" },
          { name: "rewardClaimed", internalType: "uint256", type: "uint256" },
          {
            name: "calRewardClaimed",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perApy",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "maxLimitMultiplier",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxLimit", internalType: "uint256", type: "uint256" },
          { name: "currentLimit", internalType: "uint256", type: "uint256" }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [{ name: "token_", internalType: "address", type: "address" }],
    name: "getSupportedTokenByAddress",
    outputs: [
      {
        name: "",
        internalType: "struct StructSupportedToken",
        type: "tuple",
        components: [
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "isNative", internalType: "bool", type: "bool" },
          { name: "contractAddress", internalType: "address", type: "address" },
          {
            name: "chainLinkAggregatorV3Address",
            internalType: "address",
            type: "address"
          },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint8", type: "uint8" }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      {
        name: "referralRates_",
        internalType: "struct StructReferralRates[]",
        type: "tuple[]",
        components: [
          {
            name: "referralRate",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          { name: "levelCondition", internalType: "uint256", type: "uint256" }
        ]
      },
      {
        name: "roiReferralRates_",
        internalType: "struct StructReferralRates[]",
        type: "tuple[]",
        components: [
          {
            name: "referralRate",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          { name: "levelCondition", internalType: "uint256", type: "uint256" }
        ]
      },
      {
        name: "nativeToken_",
        internalType: "struct StructSupportedToken",
        type: "tuple",
        components: [
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "isNative", internalType: "bool", type: "bool" },
          { name: "contractAddress", internalType: "address", type: "address" },
          {
            name: "chainLinkAggregatorV3Address",
            internalType: "address",
            type: "address"
          },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint8", type: "uint8" }
        ]
      },
      {
        name: "projectToken_",
        internalType: "struct StructSupportedToken",
        type: "tuple",
        components: [
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "isNative", internalType: "bool", type: "bool" },
          { name: "contractAddress", internalType: "address", type: "address" },
          {
            name: "chainLinkAggregatorV3Address",
            internalType: "address",
            type: "address"
          },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint8", type: "uint8" }
        ]
      },
      {
        name: "stableToken_",
        internalType: "struct StructSupportedToken",
        type: "tuple",
        components: [
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "isNative", internalType: "bool", type: "bool" },
          { name: "contractAddress", internalType: "address", type: "address" },
          {
            name: "chainLinkAggregatorV3Address",
            internalType: "address",
            type: "address"
          },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint8", type: "uint8" }
        ]
      },
      {
        name: "supportedTokens_",
        internalType: "struct StructSupportedToken[]",
        type: "tuple[]",
        components: [
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "isNative", internalType: "bool", type: "bool" },
          { name: "contractAddress", internalType: "address", type: "address" },
          {
            name: "chainLinkAggregatorV3Address",
            internalType: "address",
            type: "address"
          },
          { name: "name", internalType: "string", type: "string" },
          { name: "symbol", internalType: "string", type: "string" },
          { name: "decimals", internalType: "uint8", type: "uint8" }
        ]
      },
      {
        name: "investmentPlans_",
        internalType: "struct StructInvest[]",
        type: "tuple[]",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "user", internalType: "address", type: "address" },
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "name", internalType: "string", type: "string" },
          { name: "requireSubscription", internalType: "bool", type: "bool" },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "token",
            internalType: "struct StructSupportedToken",
            type: "tuple",
            components: [
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "isNative", internalType: "bool", type: "bool" },
              {
                name: "contractAddress",
                internalType: "address",
                type: "address"
              },
              {
                name: "chainLinkAggregatorV3Address",
                internalType: "address",
                type: "address"
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint8", type: "uint8" }
            ]
          },
          { name: "tokenValueInWei", internalType: "uint256", type: "uint256" },
          { name: "tokenPrice", internalType: "uint256", type: "uint256" },
          { name: "valueInUSD", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
          { name: "duration", internalType: "uint256", type: "uint256" },
          { name: "isPayReferral", internalType: "bool", type: "bool" },
          { name: "isPayRefferalOnROI", internalType: "bool", type: "bool" },
          { name: "pendingReward", internalType: "uint256", type: "uint256" },
          { name: "rewardClaimed", internalType: "uint256", type: "uint256" },
          {
            name: "calRewardClaimed",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perApy",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "maxLimitMultiplier",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxLimit", internalType: "uint256", type: "uint256" },
          { name: "currentLimit", internalType: "uint256", type: "uint256" }
        ]
      },
      {
        name: "clubRewardsSubscription_",
        internalType: "struct StructRewardObjectDefaults[]",
        type: "tuple[]",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "name", internalType: "string", type: "string" },
          {
            name: "userInitialTimeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeRewardIdCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxUsersLimit", internalType: "uint256", type: "uint256" },
          {
            name: "rewardToDistribute",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perToDistribute",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "rewardType",
            internalType: "enum RewardType",
            type: "uint8"
          }
        ]
      },
      {
        name: "performanceRewardsSubscription_",
        internalType: "struct StructRewardObjectDefaults[]",
        type: "tuple[]",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "name", internalType: "string", type: "string" },
          {
            name: "userInitialTimeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeRewardIdCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxUsersLimit", internalType: "uint256", type: "uint256" },
          {
            name: "rewardToDistribute",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perToDistribute",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "rewardType",
            internalType: "enum RewardType",
            type: "uint8"
          }
        ]
      },
      { name: "beneficiary_", internalType: "address", type: "address" }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "userAddress_", internalType: "address", type: "address" }
    ],
    name: "isAdmin",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [{ name: "token_", internalType: "address", type: "address" }],
    name: "isTokenSupported",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "paused",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "pendingOwner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "adminAddress_", internalType: "address[]", type: "address[]" },
      { name: "status_", internalType: "bool[]", type: "bool[]" }
    ],
    name: "setAdminStatus",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "contract_", internalType: "address", type: "address" },
      {
        name: "contractType_",
        internalType: "enum ContractType",
        type: "uint8"
      }
    ],
    name: "updateContracts",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "newImplementation", internalType: "address", type: "address" },
      { name: "data", internalType: "bytes", type: "bytes" }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable"
  }
] as const;

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const defaultsContractAddress = {
  137: "0x9Ac94A6890477653a97bE8EDF7d742D32808F105"
} as const;

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const defaultsContractConfig = {
  address: defaultsContractAddress,
  abi: defaultsContractAbi
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// projectTokenContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const projectTokenContractAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "initialOwner_", internalType: "address", type: "address" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "error",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "allowance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC20InsufficientAllowance"
  },
  {
    type: "error",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "balance", internalType: "uint256", type: "uint256" },
      { name: "needed", internalType: "uint256", type: "uint256" }
    ],
    name: "ERC20InsufficientBalance"
  },
  {
    type: "error",
    inputs: [{ name: "approver", internalType: "address", type: "address" }],
    name: "ERC20InvalidApprover"
  },
  {
    type: "error",
    inputs: [{ name: "receiver", internalType: "address", type: "address" }],
    name: "ERC20InvalidReceiver"
  },
  {
    type: "error",
    inputs: [{ name: "sender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSender"
  },
  {
    type: "error",
    inputs: [{ name: "spender", internalType: "address", type: "address" }],
    name: "ERC20InvalidSpender"
  },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner"
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "Approval"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "OwnershipTransferred"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "Transfer"
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" }
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  }
] as const;

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const projectTokenContractAddress = {
  137: "0x1675913b4602d0D89c26AF688D7C14f542245D8f"
} as const;

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const projectTokenContractConfig = {
  address: projectTokenContractAddress,
  abi: projectTokenContractAbi
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// registrationContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const registrationContractAbi = [
  {
    type: "error",
    inputs: [{ name: "target", internalType: "address", type: "address" }],
    name: "AddressEmptyCode"
  },
  {
    type: "error",
    inputs: [{ name: "cause", internalType: "string", type: "string" }],
    name: "CommonError"
  },
  {
    type: "error",
    inputs: [
      { name: "implementation", internalType: "address", type: "address" }
    ],
    name: "ERC1967InvalidImplementation"
  },
  { type: "error", inputs: [], name: "ERC1967NonPayable" },
  { type: "error", inputs: [], name: "EnforcedPause" },
  { type: "error", inputs: [], name: "ExpectedPause" },
  { type: "error", inputs: [], name: "FailedInnerCall" },
  { type: "error", inputs: [], name: "InvalidInitialization" },
  { type: "error", inputs: [], name: "NotInitializing" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner"
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount"
  },
  { type: "error", inputs: [], name: "ReentrancyGuardReentrantCall" },
  { type: "error", inputs: [], name: "UUPSUnauthorizedCallContext" },
  {
    type: "error",
    inputs: [{ name: "slot", internalType: "bytes32", type: "bytes32" }],
    name: "UUPSUnsupportedProxiableUUID"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "beneficiary",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "tokenAddress",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "valueInWei",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "BeneficiaryRewardPaid"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "referrer",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "businessType",
        internalType: "enum BusinessType",
        type: "uint8",
        indexed: false
      },
      {
        name: "userInvestment",
        internalType: "struct StructInvest",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "user", internalType: "address", type: "address" },
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "name", internalType: "string", type: "string" },
          { name: "requireSubscription", internalType: "bool", type: "bool" },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "token",
            internalType: "struct StructSupportedToken",
            type: "tuple",
            components: [
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "isNative", internalType: "bool", type: "bool" },
              {
                name: "contractAddress",
                internalType: "address",
                type: "address"
              },
              {
                name: "chainLinkAggregatorV3Address",
                internalType: "address",
                type: "address"
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint8", type: "uint8" }
            ]
          },
          { name: "tokenValueInWei", internalType: "uint256", type: "uint256" },
          { name: "tokenPrice", internalType: "uint256", type: "uint256" },
          { name: "valueInUSD", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
          { name: "duration", internalType: "uint256", type: "uint256" },
          { name: "isPayReferral", internalType: "bool", type: "bool" },
          { name: "isPayRefferalOnROI", internalType: "bool", type: "bool" },
          { name: "pendingReward", internalType: "uint256", type: "uint256" },
          { name: "rewardClaimed", internalType: "uint256", type: "uint256" },
          {
            name: "calRewardClaimed",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perApy",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "maxLimitMultiplier",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxLimit", internalType: "uint256", type: "uint256" },
          { name: "currentLimit", internalType: "uint256", type: "uint256" }
        ],
        indexed: false
      },
      {
        name: "level",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "BusinessUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "defaultsContractAddress",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "DefaultsContractUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "user",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "reason",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "feesInWei",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      },
      {
        name: "",
        internalType: "enum RewardType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "InactiveUserFeesDeducted"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "version",
        internalType: "uint64",
        type: "uint64",
        indexed: false
      }
    ],
    name: "Initialized"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "investedDetails",
        internalType: "struct StructInvest",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "user", internalType: "address", type: "address" },
          { name: "isActive", internalType: "bool", type: "bool" },
          { name: "name", internalType: "string", type: "string" },
          { name: "requireSubscription", internalType: "bool", type: "bool" },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "token",
            internalType: "struct StructSupportedToken",
            type: "tuple",
            components: [
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "isNative", internalType: "bool", type: "bool" },
              {
                name: "contractAddress",
                internalType: "address",
                type: "address"
              },
              {
                name: "chainLinkAggregatorV3Address",
                internalType: "address",
                type: "address"
              },
              { name: "name", internalType: "string", type: "string" },
              { name: "symbol", internalType: "string", type: "string" },
              { name: "decimals", internalType: "uint8", type: "uint8" }
            ]
          },
          { name: "tokenValueInWei", internalType: "uint256", type: "uint256" },
          { name: "tokenPrice", internalType: "uint256", type: "uint256" },
          { name: "valueInUSD", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
          { name: "duration", internalType: "uint256", type: "uint256" },
          { name: "isPayReferral", internalType: "bool", type: "bool" },
          { name: "isPayRefferalOnROI", internalType: "bool", type: "bool" },
          { name: "pendingReward", internalType: "uint256", type: "uint256" },
          { name: "rewardClaimed", internalType: "uint256", type: "uint256" },
          {
            name: "calRewardClaimed",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perApy",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "maxLimitMultiplier",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxLimit", internalType: "uint256", type: "uint256" },
          { name: "currentLimit", internalType: "uint256", type: "uint256" }
        ],
        indexed: false
      }
    ],
    name: "Invested"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "token",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "valueInWei",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "InvestmentRewardDistributed"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "OwnershipTransferStarted"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "OwnershipTransferred"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "Paused"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "provider",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "tokenAddress",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "valueInWei",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "ProviderRewardPaid"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "referrer",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "user",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "level",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "reason",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "rewardType",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "ReferralNotPaid"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "referrer",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "user",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "level",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "token",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "valueInTokens",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "valueInUSD",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "rewardType",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "ReferralPaid"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "referrer",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "user",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "ReferrerAdded"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "parent",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "user",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "TeamAdded"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "Unpaused"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "implementation",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "Upgraded"
  },
  {
    type: "function",
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "user_", internalType: "address", type: "address" }],
    name: "claimInvestmentReward",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "token_", internalType: "address", type: "address" },
      { name: "valueInWei_", internalType: "uint256", type: "uint256" }
    ],
    name: "distributeInvestmentReward",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      }
    ],
    name: "getAnalytics",
    outputs: [
      {
        name: "analyticsReturn",
        internalType: "struct StructAnalyticsReturn",
        type: "tuple",
        components: [
          { name: "users", internalType: "address[]", type: "address[]" },
          {
            name: "investmentsArray",
            internalType: "struct StructInvest[]",
            type: "tuple[]",
            components: [
              { name: "id", internalType: "uint256", type: "uint256" },
              { name: "user", internalType: "address", type: "address" },
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "name", internalType: "string", type: "string" },
              {
                name: "requireSubscription",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "investmentType",
                internalType: "enum InvestmentType",
                type: "uint8"
              },
              {
                name: "token",
                internalType: "struct StructSupportedToken",
                type: "tuple",
                components: [
                  { name: "isActive", internalType: "bool", type: "bool" },
                  { name: "isNative", internalType: "bool", type: "bool" },
                  {
                    name: "contractAddress",
                    internalType: "address",
                    type: "address"
                  },
                  {
                    name: "chainLinkAggregatorV3Address",
                    internalType: "address",
                    type: "address"
                  },
                  { name: "name", internalType: "string", type: "string" },
                  { name: "symbol", internalType: "string", type: "string" },
                  { name: "decimals", internalType: "uint8", type: "uint8" }
                ]
              },
              {
                name: "tokenValueInWei",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "tokenPrice", internalType: "uint256", type: "uint256" },
              { name: "valueInUSD", internalType: "uint256", type: "uint256" },
              { name: "timestamp", internalType: "uint256", type: "uint256" },
              { name: "duration", internalType: "uint256", type: "uint256" },
              { name: "isPayReferral", internalType: "bool", type: "bool" },
              {
                name: "isPayRefferalOnROI",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "pendingReward",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "rewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "calRewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "perApy",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              },
              {
                name: "maxLimitMultiplier",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "maxLimit", internalType: "uint256", type: "uint256" },
              {
                name: "currentLimit",
                internalType: "uint256",
                type: "uint256"
              }
            ]
          },
          { name: "totalBusiness", internalType: "uint256", type: "uint256" },
          {
            name: "rewardsDistributed",
            internalType: "uint256[]",
            type: "uint256[]"
          },
          {
            name: "tokensCollected",
            internalType: "struct StructTokenWithValue[]",
            type: "tuple[]",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address"
              },
              { name: "tokenValue", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "rewardDistributedInTokens",
            internalType: "struct StructTokenWithValue[]",
            type: "tuple[]",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address"
              },
              { name: "tokenValue", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "rewardObject",
            internalType: "struct StructRewardDistributionObjectReturn[]",
            type: "tuple[]",
            components: [
              {
                name: "rewardDefaults",
                internalType: "struct StructRewardObjectDefaults",
                type: "tuple",
                components: [
                  { name: "id", internalType: "uint256", type: "uint256" },
                  { name: "name", internalType: "string", type: "string" },
                  {
                    name: "userInitialTimeCondition",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "refereeCondition",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "refereeRewardIdCondition",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "powerBusinessCount",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "powerBusinessValue",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "weakerBusinessCount",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "weakerBusinessValue",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "maxUsersLimit",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "rewardToDistribute",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "perToDistribute",
                    internalType: "struct StructPerWithDivision",
                    type: "tuple",
                    components: [
                      { name: "per", internalType: "uint256", type: "uint256" },
                      {
                        name: "division",
                        internalType: "uint256",
                        type: "uint256"
                      }
                    ]
                  },
                  {
                    name: "investmentType",
                    internalType: "enum InvestmentType",
                    type: "uint8"
                  },
                  {
                    name: "rewardType",
                    internalType: "enum RewardType",
                    type: "uint8"
                  }
                ]
              },
              {
                name: "rewardDistributed",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "calReward", internalType: "uint256", type: "uint256" },
              {
                name: "achievers",
                internalType: "address[]",
                type: "address[]"
              }
            ]
          },
          {
            name: "calReward",
            internalType: "struct StructCalRewardWithBusiness",
            type: "tuple",
            components: [
              { name: "reward", internalType: "uint256", type: "uint256" },
              { name: "business", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "defaultsContract",
            internalType: "address",
            type: "address"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [{ name: "user_", internalType: "address", type: "address" }],
    name: "getSubscriptionStatus",
    outputs: [
      { name: "startTime", internalType: "uint256", type: "uint256" },
      { name: "endTime", internalType: "uint256", type: "uint256" },
      { name: "timeRemaining", internalType: "uint256", type: "uint256" },
      { name: "isActive", internalType: "bool", type: "bool" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      }
    ],
    name: "getUserAccount",
    outputs: [
      {
        name: "userAccountReturn",
        internalType: "struct StructUserAccountReturn",
        type: "tuple",
        components: [
          { name: "user", internalType: "address", type: "address" },
          { name: "referrer", internalType: "address", type: "address" },
          { name: "referees", internalType: "address[]", type: "address[]" },
          {
            name: "teams",
            internalType: "struct StructTeam[]",
            type: "tuple[]",
            components: [
              { name: "member", internalType: "address", type: "address" },
              { name: "level", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "business",
            internalType: "struct StructBusinessReturn",
            type: "tuple",
            components: [
              {
                name: "selfBusiness",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "directBusiness",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "teamBusiness",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "teamBusinessTypeCount",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "calBusiness", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "pendingRewards",
            internalType: "uint256[]",
            type: "uint256[]"
          },
          {
            name: "rewardsClaimed",
            internalType: "uint256[]",
            type: "uint256[]"
          },
          {
            name: "rewardClaimedInTokens",
            internalType: "struct StructTokenWithValue[]",
            type: "tuple[]",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address"
              },
              { name: "tokenValue", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investedWithTokens",
            internalType: "struct StructTokenWithValue[]",
            type: "tuple[]",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address"
              },
              { name: "tokenValue", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investments",
            internalType: "struct StructInvest[]",
            type: "tuple[]",
            components: [
              { name: "id", internalType: "uint256", type: "uint256" },
              { name: "user", internalType: "address", type: "address" },
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "name", internalType: "string", type: "string" },
              {
                name: "requireSubscription",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "investmentType",
                internalType: "enum InvestmentType",
                type: "uint8"
              },
              {
                name: "token",
                internalType: "struct StructSupportedToken",
                type: "tuple",
                components: [
                  { name: "isActive", internalType: "bool", type: "bool" },
                  { name: "isNative", internalType: "bool", type: "bool" },
                  {
                    name: "contractAddress",
                    internalType: "address",
                    type: "address"
                  },
                  {
                    name: "chainLinkAggregatorV3Address",
                    internalType: "address",
                    type: "address"
                  },
                  { name: "name", internalType: "string", type: "string" },
                  { name: "symbol", internalType: "string", type: "string" },
                  { name: "decimals", internalType: "uint8", type: "uint8" }
                ]
              },
              {
                name: "tokenValueInWei",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "tokenPrice", internalType: "uint256", type: "uint256" },
              { name: "valueInUSD", internalType: "uint256", type: "uint256" },
              { name: "timestamp", internalType: "uint256", type: "uint256" },
              { name: "duration", internalType: "uint256", type: "uint256" },
              { name: "isPayReferral", internalType: "bool", type: "bool" },
              {
                name: "isPayRefferalOnROI",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "pendingReward",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "rewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "calRewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "perApy",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              },
              {
                name: "maxLimitMultiplier",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "maxLimit", internalType: "uint256", type: "uint256" },
              {
                name: "currentLimit",
                internalType: "uint256",
                type: "uint256"
              }
            ]
          },
          { name: "rewardIds", internalType: "uint256[]", type: "uint256[]" },
          {
            name: "subscriptionStartTime",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "subscriptionDuration",
            internalType: "uint256",
            type: "uint256"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      }
    ],
    name: "getUserInvestmentReward",
    outputs: [
      {
        name: "totalInvestmentReward",
        internalType: "uint256",
        type: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      },
      { name: "rewardType_", internalType: "enum RewardType", type: "uint8" }
    ],
    name: "getUsersRewards",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "defaultsContract_", internalType: "address", type: "address" },
      { name: "beneficiary_", internalType: "address", type: "address" }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      { name: "referrer_", internalType: "address", type: "address" },
      { name: "token_", internalType: "address", type: "address" },
      { name: "valueInWei_", internalType: "uint256", type: "uint256" },
      { name: "planId_", internalType: "uint256", type: "uint256" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      }
    ],
    name: "invest",
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      { name: "referrer_", internalType: "address", type: "address" },
      { name: "token_", internalType: "address", type: "address" },
      { name: "valueInWei_", internalType: "uint256", type: "uint256" },
      { name: "planId_", internalType: "uint256", type: "uint256" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      },
      { name: "transfer_", internalType: "bool", type: "bool" }
    ],
    name: "investAdmin",
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [],
    name: "paused",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "pendingOwner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      {
        name: "defaultsContractAddress_",
        internalType: "address",
        type: "address"
      }
    ],
    name: "updateDefaultsContract",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      }
    ],
    name: "updateUser",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "newImplementation", internalType: "address", type: "address" },
      { name: "data", internalType: "bytes", type: "bytes" }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable"
  }
] as const;

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const registrationContractAddress = {
  137: "0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF"
} as const;

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const registrationContractConfig = {
  address: registrationContractAddress,
  abi: registrationContractAbi
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// rewardsContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const rewardsContractAbi = [
  {
    type: "error",
    inputs: [{ name: "target", internalType: "address", type: "address" }],
    name: "AddressEmptyCode"
  },
  {
    type: "error",
    inputs: [{ name: "cause", internalType: "string", type: "string" }],
    name: "CommonError"
  },
  {
    type: "error",
    inputs: [
      { name: "implementation", internalType: "address", type: "address" }
    ],
    name: "ERC1967InvalidImplementation"
  },
  { type: "error", inputs: [], name: "ERC1967NonPayable" },
  { type: "error", inputs: [], name: "EnforcedPause" },
  { type: "error", inputs: [], name: "ExpectedPause" },
  { type: "error", inputs: [], name: "FailedInnerCall" },
  { type: "error", inputs: [], name: "InvalidInitialization" },
  { type: "error", inputs: [], name: "NotInitializing" },
  {
    type: "error",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "OwnableInvalidOwner"
  },
  {
    type: "error",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "OwnableUnauthorizedAccount"
  },
  { type: "error", inputs: [], name: "ReentrancyGuardReentrantCall" },
  { type: "error", inputs: [], name: "UUPSUnauthorizedCallContext" },
  {
    type: "error",
    inputs: [{ name: "slot", internalType: "bytes32", type: "bytes32" }],
    name: "UUPSUnsupportedProxiableUUID"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "user", internalType: "address", type: "address", indexed: true },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      },
      {
        name: "",
        internalType: "enum RewardType",
        type: "uint8",
        indexed: false
      },
      {
        name: "clubRewardId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "AchieverAddedToRewardObject"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "user", internalType: "address", type: "address", indexed: true },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      },
      {
        name: "",
        internalType: "enum RewardType",
        type: "uint8",
        indexed: false
      },
      {
        name: "clubRewardId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "AchieverRemovedFromRewardObject"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "defaultsContractAddress",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "DefaultsContractUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "user",
        internalType: "address",
        type: "address",
        indexed: false
      },
      {
        name: "reason",
        internalType: "string",
        type: "string",
        indexed: false
      },
      {
        name: "feesInWei",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      },
      {
        name: "",
        internalType: "enum RewardType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "InactiveUserFeesDeducted"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "version",
        internalType: "uint64",
        type: "uint64",
        indexed: false
      }
    ],
    name: "Initialized"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "OwnershipTransferStarted"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "OwnershipTransferred"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "Paused"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "user", internalType: "address", type: "address", indexed: true },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      },
      {
        name: "",
        internalType: "enum RewardType",
        type: "uint8",
        indexed: false
      },
      {
        name: "rewardObjectId",
        internalType: "uint256",
        type: "uint256",
        indexed: true
      },
      {
        name: "rewardUSD",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "RewardClaimedFromRewardObject"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "valueInUSD",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      },
      {
        name: "",
        internalType: "enum RewardType",
        type: "uint8",
        indexed: false
      },
      {
        name: "rewadObjectId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "RewardDistributedRewardObject"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: false
      }
    ],
    name: "Unpaused"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "implementation",
        internalType: "address",
        type: "address",
        indexed: true
      }
    ],
    name: "Upgraded"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      },
      {
        name: "",
        internalType: "enum RewardType",
        type: "uint8",
        indexed: false
      }
    ],
    name: "UserPendingRewardUpdated"
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "user", internalType: "address", type: "address", indexed: true },
      {
        name: "",
        internalType: "enum InvestmentType",
        type: "uint8",
        indexed: false
      },
      {
        name: "",
        internalType: "enum RewardType",
        type: "uint8",
        indexed: false
      },
      {
        name: "rewardObjectId",
        internalType: "uint256",
        type: "uint256",
        indexed: false
      }
    ],
    name: "UserUpgradedInRewardObject"
  },
  {
    type: "function",
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "user_", internalType: "address", type: "address" }],
    name: "checkUserClubRewardQualify",
    outputs: [{ name: "clubId", internalType: "uint256", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      { name: "token_", internalType: "address", type: "address" }
    ],
    name: "claimPendingClubRewardSubscription",
    outputs: [
      { name: "rewardInUSD", internalType: "uint256", type: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      },
      { name: "token_", internalType: "address", type: "address" }
    ],
    name: "claimUserPendingPerformanceReward",
    outputs: [
      { name: "rewardClaimed", internalType: "uint256", type: "uint256" },
      { name: "id", internalType: "uint256", type: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "valueInUSD_", internalType: "uint256", type: "uint256" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      },
      { name: "token_", internalType: "address", type: "address" },
      { name: "valueInWei_", internalType: "uint256", type: "uint256" }
    ],
    name: "distributeClubRewards",
    outputs: [
      { name: "rewardDistributed", internalType: "uint256", type: "uint256" }
    ],
    stateMutability: "payable"
  },
  {
    type: "function",
    inputs: [
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      }
    ],
    name: "getAnalytics",
    outputs: [
      {
        name: "analyticsReturn",
        internalType: "struct StructAnalyticsReturn",
        type: "tuple",
        components: [
          { name: "users", internalType: "address[]", type: "address[]" },
          {
            name: "investmentsArray",
            internalType: "struct StructInvest[]",
            type: "tuple[]",
            components: [
              { name: "id", internalType: "uint256", type: "uint256" },
              { name: "user", internalType: "address", type: "address" },
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "name", internalType: "string", type: "string" },
              {
                name: "requireSubscription",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "investmentType",
                internalType: "enum InvestmentType",
                type: "uint8"
              },
              {
                name: "token",
                internalType: "struct StructSupportedToken",
                type: "tuple",
                components: [
                  { name: "isActive", internalType: "bool", type: "bool" },
                  { name: "isNative", internalType: "bool", type: "bool" },
                  {
                    name: "contractAddress",
                    internalType: "address",
                    type: "address"
                  },
                  {
                    name: "chainLinkAggregatorV3Address",
                    internalType: "address",
                    type: "address"
                  },
                  { name: "name", internalType: "string", type: "string" },
                  { name: "symbol", internalType: "string", type: "string" },
                  { name: "decimals", internalType: "uint8", type: "uint8" }
                ]
              },
              {
                name: "tokenValueInWei",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "tokenPrice", internalType: "uint256", type: "uint256" },
              { name: "valueInUSD", internalType: "uint256", type: "uint256" },
              { name: "timestamp", internalType: "uint256", type: "uint256" },
              { name: "duration", internalType: "uint256", type: "uint256" },
              { name: "isPayReferral", internalType: "bool", type: "bool" },
              {
                name: "isPayRefferalOnROI",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "pendingReward",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "rewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "calRewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "perApy",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              },
              {
                name: "maxLimitMultiplier",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "maxLimit", internalType: "uint256", type: "uint256" },
              {
                name: "currentLimit",
                internalType: "uint256",
                type: "uint256"
              }
            ]
          },
          { name: "totalBusiness", internalType: "uint256", type: "uint256" },
          {
            name: "rewardsDistributed",
            internalType: "uint256[]",
            type: "uint256[]"
          },
          {
            name: "tokensCollected",
            internalType: "struct StructTokenWithValue[]",
            type: "tuple[]",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address"
              },
              { name: "tokenValue", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "rewardDistributedInTokens",
            internalType: "struct StructTokenWithValue[]",
            type: "tuple[]",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address"
              },
              { name: "tokenValue", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "rewardObject",
            internalType: "struct StructRewardDistributionObjectReturn[]",
            type: "tuple[]",
            components: [
              {
                name: "rewardDefaults",
                internalType: "struct StructRewardObjectDefaults",
                type: "tuple",
                components: [
                  { name: "id", internalType: "uint256", type: "uint256" },
                  { name: "name", internalType: "string", type: "string" },
                  {
                    name: "userInitialTimeCondition",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "refereeCondition",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "refereeRewardIdCondition",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "powerBusinessCount",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "powerBusinessValue",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "weakerBusinessCount",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "weakerBusinessValue",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "maxUsersLimit",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "rewardToDistribute",
                    internalType: "uint256",
                    type: "uint256"
                  },
                  {
                    name: "perToDistribute",
                    internalType: "struct StructPerWithDivision",
                    type: "tuple",
                    components: [
                      { name: "per", internalType: "uint256", type: "uint256" },
                      {
                        name: "division",
                        internalType: "uint256",
                        type: "uint256"
                      }
                    ]
                  },
                  {
                    name: "investmentType",
                    internalType: "enum InvestmentType",
                    type: "uint8"
                  },
                  {
                    name: "rewardType",
                    internalType: "enum RewardType",
                    type: "uint8"
                  }
                ]
              },
              {
                name: "rewardDistributed",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "calReward", internalType: "uint256", type: "uint256" },
              {
                name: "achievers",
                internalType: "address[]",
                type: "address[]"
              }
            ]
          },
          {
            name: "calReward",
            internalType: "struct StructCalRewardWithBusiness",
            type: "tuple",
            components: [
              { name: "reward", internalType: "uint256", type: "uint256" },
              { name: "business", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "defaultsContract",
            internalType: "address",
            type: "address"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [{ name: "user_", internalType: "address", type: "address" }],
    name: "getPendingClubRewardSubscription",
    outputs: [{ name: "clubReward", internalType: "uint256", type: "uint256" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      {
        name: "investmentType",
        internalType: "enum InvestmentType",
        type: "uint8"
      },
      { name: "rewardType_", internalType: "enum RewardType", type: "uint8" },
      { name: "rewardId", internalType: "uint256", type: "uint256" }
    ],
    name: "getRewardById",
    outputs: [
      {
        name: "rewardObject",
        internalType: "struct StructRewardObjectDefaults",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "name", internalType: "string", type: "string" },
          {
            name: "userInitialTimeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeRewardIdCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxUsersLimit", internalType: "uint256", type: "uint256" },
          {
            name: "rewardToDistribute",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perToDistribute",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "rewardType",
            internalType: "enum RewardType",
            type: "uint8"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "valueInUSD_", internalType: "uint256", type: "uint256" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      },
      { name: "token_", internalType: "address", type: "address" }
    ],
    name: "getTokenValueToDistributeClubReward",
    outputs: [
      { name: "rewardDistributed", internalType: "uint256", type: "uint256" },
      { name: "tokenValueWei", internalType: "uint256", type: "uint256" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      }
    ],
    name: "getUserAccount",
    outputs: [
      {
        name: "userAccountReturn",
        internalType: "struct StructUserAccountReturn",
        type: "tuple",
        components: [
          { name: "user", internalType: "address", type: "address" },
          { name: "referrer", internalType: "address", type: "address" },
          { name: "referees", internalType: "address[]", type: "address[]" },
          {
            name: "teams",
            internalType: "struct StructTeam[]",
            type: "tuple[]",
            components: [
              { name: "member", internalType: "address", type: "address" },
              { name: "level", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "business",
            internalType: "struct StructBusinessReturn",
            type: "tuple",
            components: [
              {
                name: "selfBusiness",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "directBusiness",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "teamBusiness",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "teamBusinessTypeCount",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "calBusiness", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "pendingRewards",
            internalType: "uint256[]",
            type: "uint256[]"
          },
          {
            name: "rewardsClaimed",
            internalType: "uint256[]",
            type: "uint256[]"
          },
          {
            name: "rewardClaimedInTokens",
            internalType: "struct StructTokenWithValue[]",
            type: "tuple[]",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address"
              },
              { name: "tokenValue", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investedWithTokens",
            internalType: "struct StructTokenWithValue[]",
            type: "tuple[]",
            components: [
              {
                name: "tokenAddress",
                internalType: "address",
                type: "address"
              },
              { name: "tokenValue", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investments",
            internalType: "struct StructInvest[]",
            type: "tuple[]",
            components: [
              { name: "id", internalType: "uint256", type: "uint256" },
              { name: "user", internalType: "address", type: "address" },
              { name: "isActive", internalType: "bool", type: "bool" },
              { name: "name", internalType: "string", type: "string" },
              {
                name: "requireSubscription",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "investmentType",
                internalType: "enum InvestmentType",
                type: "uint8"
              },
              {
                name: "token",
                internalType: "struct StructSupportedToken",
                type: "tuple",
                components: [
                  { name: "isActive", internalType: "bool", type: "bool" },
                  { name: "isNative", internalType: "bool", type: "bool" },
                  {
                    name: "contractAddress",
                    internalType: "address",
                    type: "address"
                  },
                  {
                    name: "chainLinkAggregatorV3Address",
                    internalType: "address",
                    type: "address"
                  },
                  { name: "name", internalType: "string", type: "string" },
                  { name: "symbol", internalType: "string", type: "string" },
                  { name: "decimals", internalType: "uint8", type: "uint8" }
                ]
              },
              {
                name: "tokenValueInWei",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "tokenPrice", internalType: "uint256", type: "uint256" },
              { name: "valueInUSD", internalType: "uint256", type: "uint256" },
              { name: "timestamp", internalType: "uint256", type: "uint256" },
              { name: "duration", internalType: "uint256", type: "uint256" },
              { name: "isPayReferral", internalType: "bool", type: "bool" },
              {
                name: "isPayRefferalOnROI",
                internalType: "bool",
                type: "bool"
              },
              {
                name: "pendingReward",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "rewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "calRewardClaimed",
                internalType: "uint256",
                type: "uint256"
              },
              {
                name: "perApy",
                internalType: "struct StructPerWithDivision",
                type: "tuple",
                components: [
                  { name: "per", internalType: "uint256", type: "uint256" },
                  {
                    name: "division",
                    internalType: "uint256",
                    type: "uint256"
                  }
                ]
              },
              {
                name: "maxLimitMultiplier",
                internalType: "uint256",
                type: "uint256"
              },
              { name: "maxLimit", internalType: "uint256", type: "uint256" },
              {
                name: "currentLimit",
                internalType: "uint256",
                type: "uint256"
              }
            ]
          },
          { name: "rewardIds", internalType: "uint256[]", type: "uint256[]" },
          {
            name: "subscriptionStartTime",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "subscriptionDuration",
            internalType: "uint256",
            type: "uint256"
          }
        ]
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "user_", internalType: "address", type: "address" },
      {
        name: "investmentType_",
        internalType: "enum InvestmentType",
        type: "uint8"
      }
    ],
    name: "getUserPerformanceRewards",
    outputs: [
      { name: "pendingReward", internalType: "uint256", type: "uint256" },
      { name: "performanceRewardId", internalType: "uint256", type: "uint256" },
      { name: "powerBusinessCount", internalType: "uint256", type: "uint256" },
      { name: "weakerBusinessCount", internalType: "uint256", type: "uint256" }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [
      { name: "defaultsContract_", internalType: "address", type: "address" },
      {
        name: "clubRewardsSubscription_",
        internalType: "struct StructRewardObjectDefaults[]",
        type: "tuple[]",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "name", internalType: "string", type: "string" },
          {
            name: "userInitialTimeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeRewardIdCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxUsersLimit", internalType: "uint256", type: "uint256" },
          {
            name: "rewardToDistribute",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perToDistribute",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "rewardType",
            internalType: "enum RewardType",
            type: "uint8"
          }
        ]
      },
      {
        name: "performanceRewardsSubscription_",
        internalType: "struct StructRewardObjectDefaults[]",
        type: "tuple[]",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "name", internalType: "string", type: "string" },
          {
            name: "userInitialTimeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "refereeRewardIdCondition",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "powerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessCount",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "weakerBusinessValue",
            internalType: "uint256",
            type: "uint256"
          },
          { name: "maxUsersLimit", internalType: "uint256", type: "uint256" },
          {
            name: "rewardToDistribute",
            internalType: "uint256",
            type: "uint256"
          },
          {
            name: "perToDistribute",
            internalType: "struct StructPerWithDivision",
            type: "tuple",
            components: [
              { name: "per", internalType: "uint256", type: "uint256" },
              { name: "division", internalType: "uint256", type: "uint256" }
            ]
          },
          {
            name: "investmentType",
            internalType: "enum InvestmentType",
            type: "uint8"
          },
          {
            name: "rewardType",
            internalType: "enum RewardType",
            type: "uint8"
          }
        ]
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [],
    name: "paused",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "pendingOwner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view"
  },
  {
    type: "function",
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      {
        name: "defaultsContractAddress_",
        internalType: "address",
        type: "address"
      }
    ],
    name: "updateDefaultsContract",
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [{ name: "user_", internalType: "address", type: "address" }],
    name: "updateUserClubRewardId",
    outputs: [
      { name: "clubIdUpdated", internalType: "uint256", type: "uint256" }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    inputs: [
      { name: "newImplementation", internalType: "address", type: "address" },
      { name: "data", internalType: "bytes", type: "bytes" }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable"
  }
] as const;

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const rewardsContractAddress = {
  137: "0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd"
} as const;

/**
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const rewardsContractConfig = {
  address: rewardsContractAddress,
  abi: rewardsContractAbi
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContract = /*#__PURE__*/ createUseReadContract({
  abi: defaultsContractAbi,
  address: defaultsContractAddress
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "UPGRADE_INTERFACE_VERSION"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"WETH"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractWeth = /*#__PURE__*/ createUseReadContract({
  abi: defaultsContractAbi,
  address: defaultsContractAddress,
  functionName: "WETH"
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"getAdminsList"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractGetAdminsList =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "getAdminsList"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"getContractById"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractGetContractById =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "getContractById"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"getDefaults"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractGetDefaults =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "getDefaults"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"getInvestmentPlanById"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractGetInvestmentPlanById =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "getInvestmentPlanById"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"getSupportedTokenByAddress"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractGetSupportedTokenByAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "getSupportedTokenByAddress"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"isAdmin"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractIsAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "isAdmin"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"isTokenSupported"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractIsTokenSupported =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "isTokenSupported"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractOwner = /*#__PURE__*/ createUseReadContract(
  {
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "owner"
  }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractPaused =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "paused"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "pendingOwner"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useReadDefaultsContractProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "proxiableUUID"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContract = /*#__PURE__*/ createUseWriteContract({
  abi: defaultsContractAbi,
  address: defaultsContractAddress
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContractAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "acceptOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"activateSupportedToken"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContractActivateSupportedToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "activateSupportedToken"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"disableSupportedToken"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContractDisableSupportedToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "disableSupportedToken"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContractInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "initialize"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContractRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "renounceOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"setAdminStatus"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContractSetAdminStatus =
  /*#__PURE__*/ createUseWriteContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "setAdminStatus"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContractTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "transferOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"updateContracts"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContractUpdateContracts =
  /*#__PURE__*/ createUseWriteContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "updateContracts"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWriteDefaultsContractUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "upgradeToAndCall"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContractAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "acceptOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"activateSupportedToken"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContractActivateSupportedToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "activateSupportedToken"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"disableSupportedToken"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContractDisableSupportedToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "disableSupportedToken"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContractInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "initialize"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContractRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "renounceOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"setAdminStatus"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContractSetAdminStatus =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "setAdminStatus"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContractTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "transferOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"updateContracts"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContractUpdateContracts =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "updateContracts"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link defaultsContractAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useSimulateDefaultsContractUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    functionName: "upgradeToAndCall"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"AdminStatusChanged"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractAdminStatusChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "AdminStatusChanged"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"BeneficiaryUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractBeneficiaryUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "BeneficiaryUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"CalLevelLimitUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractCalLevelLimitUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "CalLevelLimitUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"ContractUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractContractUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "ContractUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"InactiveUserFeesUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractInactiveUserFeesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "InactiveUserFeesUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "Initialized"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"InvestmentPlansUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractInvestmentPlansUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "InvestmentPlansUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"NativeTokenUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractNativeTokenUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "NativeTokenUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "OwnershipTransferStarted"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "OwnershipTransferred"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "Paused"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"PreUnStakeFeesUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractPreUnStakeFeesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "PreUnStakeFeesUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"ProjectTokenUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractProjectTokenUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "ProjectTokenUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"ProviderUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractProviderUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "ProviderUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"ReferralRatesUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractReferralRatesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "ReferralRatesUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"RewardsObjectUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractRewardsObjectUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "RewardsObjectUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"StableTokenUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractStableTokenUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "StableTokenUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"SupportedTokenUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractSupportedTokenUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "SupportedTokenUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "Unpaused"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link defaultsContractAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x9Ac94A6890477653a97bE8EDF7d742D32808F105)
 */
export const useWatchDefaultsContractUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: defaultsContractAbi,
    address: defaultsContractAddress,
    eventName: "Upgraded"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTokenContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useReadProjectTokenContract = /*#__PURE__*/ createUseReadContract({
  abi: projectTokenContractAbi,
  address: projectTokenContractAddress
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useReadProjectTokenContractAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "allowance"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useReadProjectTokenContractBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "balanceOf"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useReadProjectTokenContractDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "decimals"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useReadProjectTokenContractName =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "name"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useReadProjectTokenContractOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "owner"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useReadProjectTokenContractSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "symbol"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useReadProjectTokenContractTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "totalSupply"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTokenContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWriteProjectTokenContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWriteProjectTokenContractApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "approve"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWriteProjectTokenContractRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "renounceOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWriteProjectTokenContractTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "transfer"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWriteProjectTokenContractTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "transferFrom"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWriteProjectTokenContractTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "transferOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTokenContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useSimulateProjectTokenContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useSimulateProjectTokenContractApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "approve"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useSimulateProjectTokenContractRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "renounceOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useSimulateProjectTokenContractTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "transfer"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useSimulateProjectTokenContractTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "transferFrom"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link projectTokenContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useSimulateProjectTokenContractTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    functionName: "transferOwnership"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTokenContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWatchProjectTokenContractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTokenContractAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWatchProjectTokenContractApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    eventName: "Approval"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTokenContractAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWatchProjectTokenContractOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    eventName: "OwnershipTransferred"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link projectTokenContractAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x1675913b4602d0D89c26AF688D7C14f542245D8f)
 */
export const useWatchProjectTokenContractTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: projectTokenContractAbi,
    address: projectTokenContractAddress,
    eventName: "Transfer"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContract = /*#__PURE__*/ createUseReadContract({
  abi: registrationContractAbi,
  address: registrationContractAddress
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "UPGRADE_INTERFACE_VERSION"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"getAnalytics"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractGetAnalytics =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "getAnalytics"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"getSubscriptionStatus"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractGetSubscriptionStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "getSubscriptionStatus"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"getUserAccount"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractGetUserAccount =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "getUserAccount"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"getUserInvestmentReward"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractGetUserInvestmentReward =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "getUserInvestmentReward"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"getUsersRewards"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractGetUsersRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "getUsersRewards"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "owner"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractPaused =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "paused"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "pendingOwner"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useReadRegistrationContractProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "proxiableUUID"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "acceptOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"claimInvestmentReward"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractClaimInvestmentReward =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "claimInvestmentReward"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"distributeInvestmentReward"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractDistributeInvestmentReward =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "distributeInvestmentReward"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "initialize"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"invest"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractInvest =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "invest"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"investAdmin"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractInvestAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "investAdmin"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractPause =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "pause"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "renounceOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "transferOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractUnpause =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "unpause"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"updateDefaultsContract"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractUpdateDefaultsContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "updateDefaultsContract"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"updateUser"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractUpdateUser =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "updateUser"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWriteRegistrationContractUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "upgradeToAndCall"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "acceptOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"claimInvestmentReward"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractClaimInvestmentReward =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "claimInvestmentReward"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"distributeInvestmentReward"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractDistributeInvestmentReward =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "distributeInvestmentReward"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "initialize"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"invest"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "invest"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"investAdmin"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractInvestAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "investAdmin"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "pause"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "renounceOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "transferOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "unpause"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"updateDefaultsContract"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractUpdateDefaultsContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "updateDefaultsContract"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"updateUser"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractUpdateUser =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "updateUser"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link registrationContractAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useSimulateRegistrationContractUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    functionName: "upgradeToAndCall"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"BeneficiaryRewardPaid"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractBeneficiaryRewardPaidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "BeneficiaryRewardPaid"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"BusinessUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractBusinessUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "BusinessUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"DefaultsContractUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractDefaultsContractUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "DefaultsContractUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"InactiveUserFeesDeducted"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractInactiveUserFeesDeductedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "InactiveUserFeesDeducted"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "Initialized"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"Invested"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractInvestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "Invested"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"InvestmentRewardDistributed"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractInvestmentRewardDistributedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "InvestmentRewardDistributed"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "OwnershipTransferStarted"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "OwnershipTransferred"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "Paused"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"ProviderRewardPaid"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractProviderRewardPaidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "ProviderRewardPaid"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"ReferralNotPaid"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractReferralNotPaidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "ReferralNotPaid"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"ReferralPaid"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractReferralPaidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "ReferralPaid"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"ReferrerAdded"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractReferrerAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "ReferrerAdded"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"TeamAdded"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractTeamAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "TeamAdded"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "Unpaused"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link registrationContractAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x7729BFa6DAcFdB49a571bf0E3413094b53F7a2fF)
 */
export const useWatchRegistrationContractUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: registrationContractAbi,
    address: registrationContractAddress,
    eventName: "Upgraded"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContract = /*#__PURE__*/ createUseReadContract({
  abi: rewardsContractAbi,
  address: rewardsContractAddress
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "UPGRADE_INTERFACE_VERSION"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"checkUserClubRewardQualify"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractCheckUserClubRewardQualify =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "checkUserClubRewardQualify"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"getAnalytics"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractGetAnalytics =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "getAnalytics"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"getPendingClubRewardSubscription"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractGetPendingClubRewardSubscription =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "getPendingClubRewardSubscription"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"getRewardById"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractGetRewardById =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "getRewardById"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"getTokenValueToDistributeClubReward"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractGetTokenValueToDistributeClubReward =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "getTokenValueToDistributeClubReward"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"getUserAccount"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractGetUserAccount =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "getUserAccount"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"getUserPerformanceRewards"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractGetUserPerformanceRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "getUserPerformanceRewards"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractOwner = /*#__PURE__*/ createUseReadContract({
  abi: rewardsContractAbi,
  address: rewardsContractAddress,
  functionName: "owner"
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractPaused = /*#__PURE__*/ createUseReadContract(
  {
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "paused"
  }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "pendingOwner"
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useReadRewardsContractProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "proxiableUUID"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContract = /*#__PURE__*/ createUseWriteContract({
  abi: rewardsContractAbi,
  address: rewardsContractAddress
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "acceptOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"claimPendingClubRewardSubscription"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractClaimPendingClubRewardSubscription =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "claimPendingClubRewardSubscription"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"claimUserPendingPerformanceReward"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractClaimUserPendingPerformanceReward =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "claimUserPendingPerformanceReward"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"distributeClubRewards"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractDistributeClubRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "distributeClubRewards"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "initialize"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractPause =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "pause"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "renounceOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "transferOwnership"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractUnpause =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "unpause"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"updateDefaultsContract"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractUpdateDefaultsContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "updateDefaultsContract"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"updateUserClubRewardId"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractUpdateUserClubRewardId =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "updateUserClubRewardId"
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWriteRewardsContractUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "upgradeToAndCall"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "acceptOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"claimPendingClubRewardSubscription"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractClaimPendingClubRewardSubscription =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "claimPendingClubRewardSubscription"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"claimUserPendingPerformanceReward"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractClaimUserPendingPerformanceReward =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "claimUserPendingPerformanceReward"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"distributeClubRewards"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractDistributeClubRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "distributeClubRewards"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "initialize"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "pause"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "renounceOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "transferOwnership"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "unpause"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"updateDefaultsContract"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractUpdateDefaultsContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "updateDefaultsContract"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"updateUserClubRewardId"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractUpdateUserClubRewardId =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "updateUserClubRewardId"
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsContractAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useSimulateRewardsContractUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    functionName: "upgradeToAndCall"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"AchieverAddedToRewardObject"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractAchieverAddedToRewardObjectEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "AchieverAddedToRewardObject"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"AchieverRemovedFromRewardObject"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractAchieverRemovedFromRewardObjectEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "AchieverRemovedFromRewardObject"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"DefaultsContractUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractDefaultsContractUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "DefaultsContractUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"InactiveUserFeesDeducted"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractInactiveUserFeesDeductedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "InactiveUserFeesDeducted"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "Initialized"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "OwnershipTransferStarted"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "OwnershipTransferred"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "Paused"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"RewardClaimedFromRewardObject"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractRewardClaimedFromRewardObjectEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "RewardClaimedFromRewardObject"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"RewardDistributedRewardObject"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractRewardDistributedRewardObjectEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "RewardDistributedRewardObject"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "Unpaused"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "Upgraded"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"UserPendingRewardUpdated"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractUserPendingRewardUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "UserPendingRewardUpdated"
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsContractAbi}__ and `eventName` set to `"UserUpgradedInRewardObject"`
 *
 * [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x018496D24E4Db521EEA5d85C0fBfD5D7BF158aBd)
 */
export const useWatchRewardsContractUserUpgradedInRewardObjectEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsContractAbi,
    address: rewardsContractAddress,
    eventName: "UserUpgradedInRewardObject"
  });
