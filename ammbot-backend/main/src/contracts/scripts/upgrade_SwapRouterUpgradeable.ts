import { RewardsUpgradeableDeploymentDetails } from "../contractDeploymentDetails/RewardsUpgradeable";
import { upgradeContract } from "./deploymentFunctions";

upgradeContract(RewardsUpgradeableDeploymentDetails, true).then(() =>
  console.log("contract upgraded")
);
