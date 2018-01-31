let WaterGoverning = artifacts.require("./WaterGoverning.sol");
let WaterVouchers = artifacts.require("./WaterVouchers.sol");
var HouseholdMeters = artifacts.require("./HouseholdMeters.sol");
let PriceEstimator = artifacts.require("./PriceEstimator/PriceEstimator.sol");
let IPriceEstimator = artifacts.require("./PriceEstimator/IPriceEstimator.sol");
let PriceEstimatorProxy = artifacts.require("./PriceEstimator/PriceEstimatorProxy.sol");

module.exports = async function (deployer) {
    await deployer.deploy(HouseholdMeters);
    let HouseholdMetersInstance = await HouseholdMeters.deployed();

    await deployer.deploy(WaterVouchers);
    let WaterVouchersInstance = await WaterVouchers.deployed();

    await deployer.deploy(WaterGoverning, WaterVouchersInstance.address);
    let WaterGoverningInstance = await WaterGoverning.deployed();

    await deployer.deploy(PriceEstimator);
    let PriceEstimatorImpl = await PriceEstimator.deployed();
    await deployer.deploy(PriceEstimatorProxy, PriceEstimatorImpl.address);
    let PriceEstimatorContract = await PriceEstimatorProxy.deployed();
    PriceEstimatorContract = await IPriceEstimator.at(PriceEstimatorContract.address);

    await PriceEstimatorContract.init();
    await PriceEstimatorContract.setHouseholdMetersContract(HouseholdMetersInstance.address);
    await PriceEstimatorContract.setWaterVouchersContract(WaterVouchersInstance.address);
    await WaterVouchersInstance.setWaterGoverningContractAddress(WaterGoverningInstance.address);
    await WaterVouchersInstance.setPriceEstimatorContractAddress(PriceEstimatorContract.address);

    // Ganache first Account - for demo purposes - DO NOT USE IT IN PRODUCTION
    await WaterVouchersInstance.addIntermediary("0x627306090abaB3A6e1400e9345bC60c78a8BEf57");

    await WaterVouchersInstance.purchaseVoucher("1", "0xf17f52151EbEF6C7334FAD080c5704D77216b732", 13000);
};