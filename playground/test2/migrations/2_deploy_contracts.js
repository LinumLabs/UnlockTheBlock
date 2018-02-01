var students = artifacts.require("./Contracts.sol");

module.exports = function(deployer) {
  deployer.deploy(Contracts);
};
