var TutorialToken = artifacts.require("GweiIToken");

module.exports = function(deployer) {
  deployer.deploy(TutorialToken);
};