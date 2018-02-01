var HouseholdContract = artifacts.require("./HouseholdContract.sol");
var HouseholdLibrary = artifacts.require("./HouseholdLibrary.sol");

module.exports = function (deployer) {
	deployer.deploy(HouseholdLibrary).then(() => {
        deployer.link(HouseholdLibrary, HouseholdContract);
        return deployer.deploy(HouseholdContract);
    });
};
