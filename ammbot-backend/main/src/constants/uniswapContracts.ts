import { bsc, bscTestnet } from "viem/chains";

type UniswapSupportedExchangesNamesTypes =
  | "uniswap"
  | "pancakeswap"
  | "quickswap"
  | "sushiswap"
  | "kyberswap";

type RouterType = "v2" | "v3" | "v4";

type UniswapContractsType = Partial<{
  [key in UniswapSupportedExchangesNamesTypes]: Partial<{
    [key: number]: Partial<{
      [key in RouterType]: {
        routerAddress: `0x${string}`;
      };
    }>;
  }>;
}>;

export const uniswapContracts: UniswapContractsType = {
  pancakeswap: {
    [bscTestnet.id]: {
      v2: {
        routerAddress: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3"
      },
      v3: {
        routerAddress: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3"
      },
      v4: {
        routerAddress: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3"
      }
    },
    [bsc.id]: {
      v2: {
        routerAddress: "0x10ED43C718714eb63d5aA57B78B54704E256024E"
      },
      v3: {
        routerAddress: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3"
      },
      v4: {
        routerAddress: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3"
      }
    }
  }
};
