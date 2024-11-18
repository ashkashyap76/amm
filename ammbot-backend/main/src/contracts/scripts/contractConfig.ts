rewards: 2;
import { zeroAddress } from "viem";
import { polygon } from "viem/chains";
import {
  StructInvestStruct,
  StructRewardObjectDefaultsStruct
} from "../typechain-types/contracts/RegistrationUpgradeable";

export const projectName = "Cartelverse";

export const InvestmentType = {
  subscription: 0,
  investment: 1
} as const;

export const BusinessType = {
  self: 0,
  direct: 1,
  team: 2
} as const;

export const RewardType = {
  referral: 0,
  roiReferral: 1,
  investmentROI: 2,
  subscription: 3,
  club: 4,
  community: 5,
  bonanza: 6,
  performance: 7,
  others: 8,
  initialCalReward: 9
} as const;

export const ContractType = {
  registration: 0,
  invest: 1,
  rewards: 2
};

export type InvestmentType =
  (typeof InvestmentType)[keyof typeof InvestmentType];
export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType];
export type RewardType = (typeof RewardType)[keyof typeof RewardType];

export const contractConfigAndDefaults = {
  [polygon.id]: {
    investmentPlans: [
      {
        id: BigInt(1),
        user: zeroAddress,
        isActive: true,
        name: "Subscription",
        requireSubscription: false,
        investmentType: BigInt(InvestmentType?.subscription),
        token: {
          isActive: true,
          isNative: true,
          contractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          chainLinkAggregatorV3Address:
            "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0",
          name: "Native",
          symbol: "Native",
          decimals: BigInt(18)
        },
        tokenValueInWei: BigInt(0),
        tokenPrice: BigInt(0),
        valueInUSD: BigInt(50e18),
        timestamp: BigInt(0),
        duration: BigInt(365 * 86400),
        isPayReferral: true,
        isPayRefferalOnROI: false,
        pendingReward: BigInt(0),
        rewardClaimed: BigInt(0),
        calRewardClaimed: BigInt(0),
        perApy: {
          per: BigInt(0),
          division: BigInt(0)
        },
        maxLimitMultiplier: BigInt(0),
        maxLimit: BigInt(0),
        currentLimit: BigInt(0)
      },
      {
        id: BigInt(1),
        user: zeroAddress,
        isActive: true,
        name: "Investment",
        requireSubscription: true,
        investmentType: BigInt(InvestmentType?.investment),
        token: {
          isActive: true,
          isNative: true,
          contractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          chainLinkAggregatorV3Address:
            "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0",
          name: "Native",
          symbol: "Native",
          decimals: BigInt(18)
        },
        tokenValueInWei: BigInt(0),
        tokenPrice: BigInt(0),
        valueInUSD: BigInt(50e18),
        timestamp: BigInt(0),
        duration: BigInt(0),
        isPayReferral: false,
        isPayRefferalOnROI: true,
        pendingReward: BigInt(0),
        rewardClaimed: BigInt(0),
        calRewardClaimed: BigInt(0),
        perApy: {
          per: BigInt(0),
          division: BigInt(0)
        },
        maxLimitMultiplier: BigInt(0),
        maxLimit: BigInt(0),
        currentLimit: BigInt(0)
      }
    ] as StructInvestStruct[],
    supportedTokens: {
      nativeToken: {
        isActive: true,
        isNative: true,
        name: "Native",
        symbol: "Native",
        decimals: 18,
        contractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        chainLinkAggregatorV3Address:
          "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"
      },
      stableToken: {
        isActive: true,
        isNative: false,
        name: "Tether",
        symbol: "USDT",
        decimals: 6,
        contractAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        chainLinkAggregatorV3Address:
          "0x0A6513e40db6EB1b165753AD52E80663aeA50545"
      },
      projectToken: {
        isActive: true,
        isNative: false,
        name: "Cartelverse",
        symbol: "CRTV",
        decimals: 18,
        contractAddress: "0x1aba83280AC63d6CAA03F946bFF0D8ac5E61e08E",
        chainLinkAggregatorV3Address:
          "0x0000000000000000000000000000000000000000"
      },
      tradeTokens: [
        {
          isActive: true,
          name: "Native",
          symbol: "Native",
          contractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
          isNative: true,
          decimals: 18,
          chainLinkAggregatorV3Address:
            "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"
        },
        {
          isActive: true,
          name: "Dai Stablecoin",
          symbol: "DAI",
          decimals: 18,
          contractAddress: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
          isNative: false,
          chainLinkAggregatorV3Address:
            "0x4746dec9e833a82ec7c2c1356372ccf2cfcd2f3d"
        },
        {
          isActive: true,
          name: "Tether",
          symbol: "USDT",
          decimals: 6,
          contractAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
          isNative: false,
          chainLinkAggregatorV3Address:
            "0x0A6513e40db6EB1b165753AD52E80663aeA50545"
        },
        {
          isActive: true,
          name: "USD Coin",
          symbol: "USDC",
          decimals: 18,
          contractAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
          isNative: false,
          chainLinkAggregatorV3Address:
            "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7"
        },
        {
          isActive: true,
          name: "ChainLink",
          symbol: "LINK",
          contractAddress: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
          isNative: false,
          decimals: 18,
          chainLinkAggregatorV3Address:
            "0xd9FFdb71EbE7496cC440152d43986Aae0AB76665"
        }
      ]
    },
    referralRates: [
      { referralRate: { per: 16, division: 100 }, levelCondition: 0 },
      { referralRate: { per: 8, division: 100 }, levelCondition: 1 },
      { referralRate: { per: 4, division: 100 }, levelCondition: 1 },
      { referralRate: { per: 3, division: 100 }, levelCondition: 2 },
      { referralRate: { per: 2, division: 100 }, levelCondition: 2 },
      { referralRate: { per: 1, division: 100 }, levelCondition: 2 },
      { referralRate: { per: 1, division: 100 }, levelCondition: 3 },
      { referralRate: { per: 1, division: 100 }, levelCondition: 3 },
      { referralRate: { per: 1, division: 100 }, levelCondition: 3 },
      { referralRate: { per: 1, division: 100 }, levelCondition: 4 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 4 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 4 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 5 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 5 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 5 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 6 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 6 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 6 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 7 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 7 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 7 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 8 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 8 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 8 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 9 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 9 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 9 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 10 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 10 },
      { referralRate: { per: 5, division: 1000 }, levelCondition: 10 }
    ],
    roiReferralRates: [
      { referralRate: { per: 12, division: 100 }, levelCondition: 0 }, // 1
      { referralRate: { per: 5, division: 100 }, levelCondition: 1 }, // 2
      { referralRate: { per: 3, division: 100 }, levelCondition: 1 }, // 3
      { referralRate: { per: 2, division: 100 }, levelCondition: 2 }, // 4
      { referralRate: { per: 50, division: 1000 }, levelCondition: 2 }, // 5
      { referralRate: { per: 50, division: 1000 }, levelCondition: 2 }, // 6
      { referralRate: { per: 50, division: 1000 }, levelCondition: 3 }, // 7
      { referralRate: { per: 50, division: 1000 }, levelCondition: 3 }, // 8
      { referralRate: { per: 50, division: 1000 }, levelCondition: 3 }, // 9
      { referralRate: { per: 50, division: 1000 }, levelCondition: 4 }, // 10
      { referralRate: { per: 25, division: 1000 }, levelCondition: 4 }, // 11
      { referralRate: { per: 25, division: 1000 }, levelCondition: 4 }, // 12
      { referralRate: { per: 25, division: 1000 }, levelCondition: 5 }, // 13
      { referralRate: { per: 25, division: 1000 }, levelCondition: 5 }, // 14
      { referralRate: { per: 25, division: 1000 }, levelCondition: 5 }, // 15
      { referralRate: { per: 25, division: 1000 }, levelCondition: 6 }, // 16
      { referralRate: { per: 25, division: 1000 }, levelCondition: 6 }, // 17
      { referralRate: { per: 25, division: 1000 }, levelCondition: 6 }, // 18
      { referralRate: { per: 25, division: 1000 }, levelCondition: 7 }, // 19
      { referralRate: { per: 25, division: 1000 }, levelCondition: 7 }, // 20
      { referralRate: { per: 25, division: 1000 }, levelCondition: 7 }, // 21
      { referralRate: { per: 25, division: 1000 }, levelCondition: 8 }, // 22
      { referralRate: { per: 25, division: 1000 }, levelCondition: 8 }, // 23
      { referralRate: { per: 25, division: 1000 }, levelCondition: 8 }, // 24
      { referralRate: { per: 25, division: 1000 }, levelCondition: 9 }, // 25
      { referralRate: { per: 25, division: 1000 }, levelCondition: 9 }, // 26
      { referralRate: { per: 25, division: 1000 }, levelCondition: 9 }, // 27
      { referralRate: { per: 25, division: 1000 }, levelCondition: 10 }, // 28
      { referralRate: { per: 25, division: 1000 }, levelCondition: 10 }, // 29
      { referralRate: { per: 25, division: 1000 }, levelCondition: 10 } // 30
    ],
    beneficiary_: "0xDABD695642955eBE857AB4040AeD93AE896fd724",
    clubRewards: [
      {
        id: 1,
        name: "Stellar Nomad",
        userInitialTimeCondition: 10 * 86400, // 10 days in seconds
        refereeCondition: 3,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 0,
        powerBusinessValue: 0,
        weakerBusinessCount: 0,
        weakerBusinessValue: 0,
        maxUsersLimit: 25000,
        rewardToDistribute: 0,
        perToDistribute: { per: 5, division: 100 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 2,
        name: "Lunar Drifter",
        userInitialTimeCondition: 0,
        refereeCondition: 3,
        refereeRewardIdCondition: 1,
        powerBusinessCount: 0,
        powerBusinessValue: 0,
        weakerBusinessCount: 0,
        weakerBusinessValue: 0,
        maxUsersLimit: 10000,
        rewardToDistribute: 0,
        perToDistribute: { per: 4, division: 100 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 3,
        name: "Intergalactic Lodge",
        userInitialTimeCondition: 0,
        refereeCondition: 4,
        refereeRewardIdCondition: 2,
        powerBusinessCount: 0,
        powerBusinessValue: 0,
        weakerBusinessCount: 0,
        weakerBusinessValue: 0,
        maxUsersLimit: 1000,
        rewardToDistribute: 0,
        perToDistribute: { per: 3, division: 100 },
        investmentType: 0,
        rewardType: 4
      }
    ] as StructRewardObjectDefaultsStruct[],
    performanceRewards: [
      {
        id: 1,
        name: "Starling",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 25,
        powerBusinessValue: 0,
        weakerBusinessCount: 25,
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `50000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 2,
        name: "Nova",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 75, // 25 + 50
        powerBusinessValue: 0,
        weakerBusinessCount: 75, // 25 + 50
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `100000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 3,
        name: "Lunar",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 175, // 75 + 100
        powerBusinessValue: 0,
        weakerBusinessCount: 175, // 75 + 100
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `250000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 4,
        name: "Celestian",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 675, // 175 + 500
        powerBusinessValue: 0,
        weakerBusinessCount: 675, // 175 + 500
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `1150000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 5,
        name: "Meteorite",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 1675, // 675 + 1000
        powerBusinessValue: 0,
        weakerBusinessCount: 1675, // 675 + 1000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `2300000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 6,
        name: "Astrolite",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 3675, // 1675 + 2000
        powerBusinessValue: 0,
        weakerBusinessCount: 3675, // 1675 + 2000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `4500000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 7,
        name: "Starwalker",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 8675, // 3675 + 5000
        powerBusinessValue: 0,
        weakerBusinessCount: 8675, // 3675 + 5000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `11500000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 8,
        name: "Orbitron",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 18675, // 8675 + 10000
        powerBusinessValue: 0,
        weakerBusinessCount: 18675, // 8675 + 10000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `23000000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 9,
        name: "Nebulon",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 43675, // 18675 + 25000
        powerBusinessValue: 0,
        weakerBusinessCount: 43675, // 18675 + 25000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `56000000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 10,
        name: "Astrovoyager",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 93675, // 43675 + 50000
        powerBusinessValue: 0,
        weakerBusinessCount: 93675, // 43675 + 50000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `112000000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 11,
        name: "Hypernaut",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 193675, // 93675 + 100000
        powerBusinessValue: 0,
        weakerBusinessCount: 193675, // 93675 + 100000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `227000000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 12,
        name: "Quantum",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 443675, // 193675 + 250000
        powerBusinessValue: 0,
        weakerBusinessCount: 443675, // 193675 + 250000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `515000000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 13,
        name: "Cosmosmith",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 943675, // 443675 + 500000
        powerBusinessValue: 0,
        weakerBusinessCount: 943675, // 443675 + 500000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `1120000000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      },
      {
        id: 14,
        name: "Galaxian",
        userInitialTimeCondition: 0,
        refereeCondition: 2,
        refereeRewardIdCondition: 0,
        powerBusinessCount: 1943675, // 943675 + 1000000
        powerBusinessValue: 0,
        weakerBusinessCount: 1943675, // 943675 + 1000000
        weakerBusinessValue: 0,
        maxUsersLimit: 0,
        rewardToDistribute: `2250000000000000000000000`,
        perToDistribute: { per: 0, division: 0 },
        investmentType: 0,
        rewardType: 4
      }
    ] as StructRewardObjectDefaultsStruct[]
  }
};
