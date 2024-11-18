/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { TBot, TBotInterface } from "../../contracts/TBot";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523461037e57610011610383565b610019610383565b81516001600160401b03811161028957600354600181811c91168015610374575b602082101461026957601f811161030f575b50602092601f82116001146102aa579281929360009261029f575b50508160011b916000199060031b1c1916176003555b80516001600160401b03811161028957600454600181811c9116801561027f575b602082101461026957601f8111610204575b50602091601f82116001146101a057918192600092610195575b50508160011b916000199060031b1c1916176004555b331561017f576002546b033b2e3c9fd0803ce8000000810180911161016957600255600033815280602052604081206b033b2e3c9fd0803ce80000008154019055604051906b033b2e3c9fd0803ce800000082527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203393a360405161065490816103b48239f35b634e487b7160e01b600052601160045260246000fd5b63ec442f0560e01b600052600060045260246000fd5b0151905038806100ca565b601f198216926004600052806000209160005b8581106101ec575083600195106101d3575b505050811b016004556100e0565b015160001960f88460031b161c191690553880806101c5565b919260206001819286850151815501940192016101b3565b60046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c8101916020841061025f575b601f0160051c01905b81811061025357506100b0565b60008155600101610246565b909150819061023d565b634e487b7160e01b600052602260045260246000fd5b90607f169061009e565b634e487b7160e01b600052604160045260246000fd5b015190503880610067565b601f198216936003600052806000209160005b8681106102f757508360019596106102de575b505050811b0160035561007d565b015160001960f88460031b161c191690553880806102d0565b919260206001819286850151815501940192016102bd565b60036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c8101916020841061036a575b601f0160051c01905b81811061035e575061004c565b60008155600101610351565b9091508190610348565b90607f169061003a565b600080fd5b60408051919082016001600160401b038111838210176102895760405260048252631d109bdd60e21b602083015256fe608080604052600436101561001357600080fd5b60003560e01c90816306fdde031461041157508063095ea7b31461038b57806318160ddd1461036d57806323b872dd14610280578063313ce5671461026457806370a082311461022a57806395d89b4114610109578063a9059cbb146100d85763dd62ed3e1461008257600080fd5b346100d35760403660031901126100d35761009b61052d565b6100a3610543565b6001600160a01b039182166000908152600160209081526040808320949093168252928352819020549051908152f35b600080fd5b346100d35760403660031901126100d3576100fe6100f461052d565b6024359033610559565b602060405160018152f35b346100d35760003660031901126100d35760405160006004548060011c90600181168015610220575b60208310811461020c578285529081156101f05750600114610199575b50819003601f01601f191681019067ffffffffffffffff8211818310176101835761017f829182604052826104e4565b0390f35b634e487b7160e01b600052604160045260246000fd5b905060046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b6000905b8282106101da5750602091508201018261014f565b60018160209254838588010152019101906101c5565b90506020925060ff191682840152151560051b8201018261014f565b634e487b7160e01b84526022600452602484fd5b91607f1691610132565b346100d35760203660031901126100d3576001600160a01b0361024b61052d565b1660005260006020526020604060002054604051908152f35b346100d35760003660031901126100d357602060405160128152f35b346100d35760603660031901126100d35761029961052d565b6102a1610543565b6001600160a01b03821660008181526001602081815260408084203385529091529091205491936044359392909181016102e1575b506100fe9350610559565b83811061035057841561033a573315610324576100fe946000526001602052604060002060018060a01b03331660005260205283604060002091039055846102d6565b634a1406b160e11b600052600060045260246000fd5b63e602df0560e01b600052600060045260246000fd5b8390637dc7a0d960e11b6000523360045260245260445260646000fd5b346100d35760003660031901126100d3576020600254604051908152f35b346100d35760403660031901126100d3576103a461052d565b60243590331561033a576001600160a01b031690811561032457336000526001602052604060002082600052602052806040600020556040519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560203392a3602060405160018152f35b346100d35760003660031901126100d35760006003548060011c906001811680156104da575b60208310811461020c578285529081156101f057506001146104835750819003601f01601f191681019067ffffffffffffffff8211818310176101835761017f829182604052826104e4565b905060036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b6000905b8282106104c45750602091508201018261014f565b60018160209254838588010152019101906104af565b91607f1691610437565b91909160208152825180602083015260005b818110610517575060409293506000838284010152601f8019910116010190565b80602080928701015160408286010152016104f6565b600435906001600160a01b03821682036100d357565b602435906001600160a01b03821682036100d357565b6001600160a01b0316908115610608576001600160a01b03169182156105f25760008281528060205260408120548281106105d85791604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815280845220818154019055604051908152a3565b916064928463391434e360e21b8452600452602452604452fd5b63ec442f0560e01b600052600060045260246000fd5b634b637e8f60e11b600052600060045260246000fdfea2646970667358221220b9f86fdeba43747214e8302f8b0358bab6d6a5a971b87f1cdde99edf31b375d664736f6c634300081a0033";

type TBotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TBotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TBot__factory extends ContractFactory {
  constructor(...args: TBotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TBot & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TBot__factory {
    return super.connect(runner) as TBot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TBotInterface {
    return new Interface(_abi) as TBotInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TBot {
    return new Contract(address, _abi, runner) as unknown as TBot;
  }
}
