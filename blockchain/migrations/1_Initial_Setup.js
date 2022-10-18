var HydroBloxAuthority = artifacts.require("./HydroBloxAuthority.sol");
var HydroBloxDistributor = artifacts.require("./HydroBloxDistributor.sol");

module.exports = async function (deployer) {
    await deployer.deploy(HydroBloxAuthority);

    const authority = await HydroBloxAuthority.deployed();
    const consumptionMeter = await authority.consumptionMeter();
    const productionMeter = await authority.productionMeter();

    await deployer.deploy(HydroBloxDistributor, consumptionMeter, productionMeter);
};