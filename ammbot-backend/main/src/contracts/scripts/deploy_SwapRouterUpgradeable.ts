import { nativeTokenIdentifier } from "../../constants/generalConstants";
import { deployUpgradeableContract } from "./deploymentFunctions";

const contractName = "SwapRouterUpgradeable";

deployUpgradeableContract(contractName, [nativeTokenIdentifier], true, true)
  ?.then(async () => {
    console.log("deployed");
  })

  .catch(() => console.log("Error"));
