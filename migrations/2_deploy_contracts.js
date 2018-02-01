var Agreement = artifacts.require("./Agreement.sol");
var BasicToken = artifacts.require("./BasicToken.sol");
var ThembaR = artifacts.require("./ThembaR.sol");
var ThembaRController = artifacts.require("./ThembaRController.sol");

module.exports = function(deployer) {
  deployer.deploy(ThembaRController)
    deployer.deploy(ThembaR).then(function(error,data){
      deployer.deploy(Agreement);
    });
   

};
