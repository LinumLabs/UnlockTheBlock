var NGO = artifacts.require("./NGO.sol");
var Bank = artifacts.require("./Bank.sol");
var SIFcoin = artifacts.require("./SifCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(NGO);
  deployer.deploy(Bank);
  deployer.deploy(SIFcoin);
};
