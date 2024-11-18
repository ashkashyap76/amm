import { HardhatEthersProvider } from "@nomicfoundation/hardhat-ethers/internal/hardhat-ethers-provider";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { DeployImplementationResponse } from "@openzeppelin/hardhat-upgrades/dist/deploy-implementation";
import { getImplementationAddress } from "@openzeppelin/upgrades-core";
import fs from "fs";
import { artifacts, ethers, run, upgrades } from "hardhat";
import path from "path";
import { Abi, zeroAddress } from "viem";

export type ContractDeploymentObjectsBlockchain = {
  [key: number]: ContractDeploymentObjectType;
};

export type ContractDeploymentObjectType = {
  isProxyContract: boolean;
  proxyAddress: `0x${string}`;
  implementationAddress: `0x${string}`;
  contractName: string;
  chainId: number;
  deployer: string;
  abi: any;
};

export type ProviderDetailsType = {
  deployer: HardhatEthersSigner;
  provider: HardhatEthersProvider;
  formattedBalance: string;
  chainId: number;
};

export type DeployContractObjectType = {
  contractName: string;
  deployContract: boolean;
  args: (chainId: number) => unknown[];
  functionToRun:
    | {
        functionName: string;
        args: unknown[];
      }[]
    | [];
};

export type CallFunctionArgs = {
  deploymentDetails: ContractDeploymentObjectsBlockchain;
  functionName: string; // Function name to be called on the contract
  functionArgs: unknown[]; // Arguments for the function
};

export async function getProviderDetails(): Promise<ProviderDetailsType> {
  console.log("Getting provider ready...");
  const [deployer] = await ethers.getSigners();
  const provider = ethers.provider;
  const balance = await provider.getBalance(deployer.address);
  const formattedBalance = ethers.formatEther(balance);
  const chainId = parseInt(await provider.send("eth_chainId", []));

  console.log(
    "Provider Ready",
    "Deployer: ",
    deployer.address,
    "Deployer Native Balance: ",
    formattedBalance,
    "Chain Id: ",
    chainId
  );

  return { deployer, provider, formattedBalance, chainId };
}

export const deployContract = async (
  contractName: string,
  initializerArgs: unknown[],
  saveAbi: boolean
) => {
  const contractFactory = await ethers.getContractFactory(contractName);

  console.log(`\x1b[32mDeploying Contract: ${contractName}\x1b[0m`);

  // Deploy the proxy contract
  let contract = await contractFactory.deploy(
    initializerArgs?.length > 0 ? initializerArgs : initializerArgs
  );

  contract = await contract.waitForDeployment();

  const contractAddress = await contract.getAddress();

  console.log("Contract deployed to:", contractAddress);

  if (saveAbi) {
    await saveABIAndDeploymentDetails(
      contractName,
      false,
      contractAddress,
      zeroAddress
    );
  }

  // Automatic verification
  try {
    console.log(`\x1b[32mVerifying contract on Etherscan...\x1b[0m`);
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: initializerArgs,
      forceLicense: true // Use this flag to force verification
      // constructorArguments: args,  // Uncomment and provide if needed
    });
    console.log("\x1b[32mContract verified successfully!\x1b[0m");
  } catch (err) {
    // @ts-expect-error may be err type is not defined
    console.error("\x1b[31mVerification failed:\x1b[0m", err.message);
  }

  return {
    contractAddress: contractAddress ?? zeroAddress,
    contractName: contractName
  };
};

export const deployUpgradeableContract = async (
  contractName: string,
  initializerArgs: unknown[],
  saveAbi: boolean,
  verify: boolean
) => {
  const providerDetails: ProviderDetailsType = await getProviderDetails();
  const contractFactory = await ethers.getContractFactory(contractName);

  console.log(`\x1b[32mDeploying Contract: ${contractName}\x1b[0m`);

  // Deploy the proxy contract
  let proxyContract = await upgrades.deployProxy(
    contractFactory,
    initializerArgs,
    {
      unsafeAllow: ["delegatecall"]
    }
  );

  proxyContract = await proxyContract.waitForDeployment();

  const proxyAddress = await proxyContract.getAddress();
  const implementationAddress = await getImplementationAddress(
    providerDetails.provider,
    proxyAddress
  );

  console.log("Proxy deployed to:", proxyAddress);
  console.log("Implementation address:", implementationAddress);

  if (saveAbi) {
    await saveABIAndDeploymentDetails(
      contractName,
      true,
      proxyAddress,
      implementationAddress
    );
  }

  if (verify) {
    // Automatic verification
    try {
      console.log(`\x1b[32mVerifying contract on Etherscan...\x1b[0m`);
      await run("verify:verify", {
        address: proxyAddress,
        forceLicense: true // Use this flag to force verification
        // constructorArguments: args,  // Uncomment and provide if needed
      });
      console.log("\x1b[32mContract verified successfully!\x1b[0m");
    } catch (err) {
      // @ts-expect-error may be err type is not defined
      console.error("\x1b[31mVerification failed:\x1b[0m", err.message);
    }
  }

  return {
    proxyAddress: proxyAddress ?? zeroAddress,
    contractName: contractName
  };
};

export const deployImplementationContract = async (
  contractName: string,
  saveAbi: boolean
) => {
  const providerDetails: ProviderDetailsType = await getProviderDetails();
  const contractFactory = await ethers.getContractFactory(contractName);

  console.log(`\x1b[32mDeploying Contract: ${contractName}\x1b[0m`);

  // Deploy the proxy contract
  let implementationAddress: DeployImplementationResponse =
    await upgrades.deployImplementation(contractFactory, {
      unsafeAllow: ["delegatecall"]
    });

  console.log(
    "Implementation deployed to address:",
    implementationAddress?.toString()
  );

  if (saveAbi) {
    await saveABIAndDeploymentDetails(
      contractName,
      false,
      zeroAddress,
      implementationAddress?.toString()
    );
  }

  // Automatic verification
  try {
    console.log(`\x1b[32mVerifying contract on Etherscan...\x1b[0m`);
    await run("verify:verify", {
      address: implementationAddress,
      forceLicense: true // Use this flag to force verification
      // constructorArguments: args,  // Uncomment and provide if needed
    });
    console.log("\x1b[32mContract verified successfully!\x1b[0m");
  } catch (err) {
    // @ts-expect-error may be err type is not defined
    console.error("\x1b[31mVerification failed:\x1b[0m", err.message);
  }

  return {
    proxyAddress: zeroAddress,
    contractName: contractName
  };
};

export const upgradeContract = async (
  contractDeploymentDetails: ContractDeploymentObjectsBlockchain,
  saveAbi: boolean
) => {
  const providerDetails: ProviderDetailsType = await getProviderDetails();
  const contractObject = contractDeploymentDetails[providerDetails.chainId];

  if (
    !contractObject ||
    !contractObject.contractName ||
    !contractObject.proxyAddress
  ) {
    throw new Error("Contract deployment details are incomplete or missing.");
  }

  const contractFactory = await ethers.getContractFactory(
    contractObject.contractName
  );

  console.log(
    `\x1b[32mUpgrading Contract: ${contractObject.contractName}\x1b[0m`
  );

  // Log the current implementation address before upgrade
  const currentImplementationAddress = await getImplementationAddress(
    providerDetails.provider,
    contractObject.proxyAddress
  );
  console.log("Current implementation address:", currentImplementationAddress);

  // Deploy the proxy contract
  let proxyContract = await upgrades.upgradeProxy(
    contractObject.proxyAddress,
    contractFactory,
    {
      redeployImplementation: "always"
    }
  );

  proxyContract = await proxyContract.waitForDeployment();

  const proxyAddress = await proxyContract.getAddress();
  const newImplementationAddress = await getImplementationAddress(
    providerDetails.provider,
    proxyAddress
  );

  console.log("Proxy upgraded:", proxyAddress);
  console.log("New implementation address:", newImplementationAddress);

  if (saveAbi) {
    await saveABIAndDeploymentDetails(
      contractObject.contractName,
      true,
      proxyAddress,
      newImplementationAddress
    );
  }

  // Automatic verification
  try {
    console.log(`\x1b[32mVerifying contract on Etherscan...\x1b[0m`);
    await run("verify:verify", {
      address: newImplementationAddress,
      forceLicense: true // Use this flag to force verification
      // constructorArguments: args,  // Uncomment and provide if needed
    });

    await run("verify:verify", {
      address: proxyAddress,
      forceLicense: true // Use this flag to force verification
      // constructorArguments: args,  // Uncomment and provide if needed
    });
    console.log("\x1b[32mContract verified successfully!\x1b[0m");
  } catch (err) {
    // @ts-expect-error may be type of err is not defined
    console.error("\x1b[31mVerification failed:\x1b[0m", err.message);
  }

  return {
    proxyAddress: proxyAddress ?? zeroAddress,
    contractName: contractObject.contractName
  };
};

export const callSetterFunction = async (
  callFunctionArgs: CallFunctionArgs
) => {
  const providerDetails: ProviderDetailsType = await getProviderDetails();
  const deploymentDetails =
    callFunctionArgs?.deploymentDetails[providerDetails?.chainId];
  console.log(
    `\x1b[33mCalling function ${callFunctionArgs?.functionName} of ${deploymentDetails?.contractName} with args ${callFunctionArgs.functionArgs}\x1b[0m`
  );

  // Get the contract factory
  const contractFactory = await ethers.getContractFactory(
    deploymentDetails?.contractName
  );

  // Create a contract instance using the proxy address and ABI
  const proxyContractInterface = new ethers.Contract(
    deploymentDetails?.proxyAddress,
    contractFactory.interface,
    providerDetails.deployer
  );

  try {
    // Dynamically call the function with the provided name and arguments
    const tx = await proxyContractInterface[callFunctionArgs.functionName](
      ...callFunctionArgs.functionArgs
    );

    // Wait for the transaction to be mined
    await tx.wait();
    console.log(
      `\x1b[32m${callFunctionArgs.functionName} function called successfully!\x1b[0m`
    );
  } catch (err) {
    console.error(`Error calling ${callFunctionArgs.functionName}:`, err);
  }
};

export const saveABIAndDeploymentDetails = async (
  contractName: string,
  isProxyContract: boolean,
  proxyAddress: string,
  implementationAddress: string
) => {
  console.log("Saving abi and deployement details...");
  const directoryToSaveDeployementDetails = "../contractDeploymentDetails";
  const providerDetails: ProviderDetailsType = await getProviderDetails();
  const contractArtifact = await artifacts.readArtifact(contractName);
  const newAbi = contractArtifact.abi;

  const abiDirPath = path.join(__dirname, directoryToSaveDeployementDetails);

  const abiFilePath = path.join(abiDirPath, `${contractName}.ts`);

  // Check if the directory exists, create it if not
  if (!fs.existsSync(abiDirPath)) {
    fs.mkdirSync(abiDirPath, { recursive: true });
  }

  const newFileContent = `
        // Updated on ${new Date().toISOString()}
        import { ContractDeploymentObjectsBlockchain } from '../scripts/deploymentFunctions';
        export const ${contractName}ABI = ${JSON.stringify(newAbi, null, 2)};
        export const ${contractName}DeploymentDetails: ContractDeploymentObjectsBlockchain = {
        [${providerDetails.chainId}]: {
            isProxyContract: ${isProxyContract},
            proxyAddress: '${proxyAddress}',
            implementationAddress: '${implementationAddress}',
            contractName: '${contractName}',
            chainId: ${providerDetails.chainId},
            deployer: '${providerDetails.deployer.address}',
            abi: ${contractName}ABI
        }
    }`;

  fs.writeFileSync(abiFilePath, newFileContent, "utf-8");
  console.log(
    `${contractName} ABI and deployment details updated in: ${abiFilePath}`
  );
};
// export const runDeploymentScript = async (
//   contractToDeployArray: DeployContractObjectType[],
//   saveAbi: boolean
// ) => {
//   const providerDetails = await getProviderDetails();
//   for (const contractObject of contractToDeployArray) {
//     if (contractObject?.deployContract) {
//       console.log(`Deploying ${contractObject.contractName}...`);
//       await deployUpgradeableContract(
//         contractObject.contractName,
//         contractObject.args(providerDetails.chainId),
//         saveAbi
//       );
//     }
//   }
// };
