var CertStore = artifacts.require("CertStore");

module.exports = function(deployer) {
  deployer.deploy(CertStore);
};