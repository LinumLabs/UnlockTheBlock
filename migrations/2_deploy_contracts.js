var LocalGvt  = artifacts.require("LocalGvt");
var Merchant  = artifacts.require("Merchant");
var MonthlyAidToken  = artifacts.require("MonthlyAidToken");
var Utilities  = artifacts.require("Utilities");

module.exports = function (deployer) {
    deployer.deploy(LocalGvt);
    deployer.deploy(Merchant);
    deployer.deploy(MonthlyAidToken);
    deployer.deploy(Utilities);
};
