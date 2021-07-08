const CakeToken = artifacts.require("CakeToken");
const MasterChef = artifacts.require("MasterChef");
const MOCHI = artifacts.require('CakeToken.sol');
const SyrupBar = artifacts.require('SyrupBar.sol');

module.exports = async function(deployer) {
  await deployer.deploy(CakeToken);
  await deployer.deploy(SyrupBar, MOCHI.address);
  await deployer.deploy(MasterChef, MOCHI.address, SyrupBar.address, `0xe291CA329864b53F44964592B3BC52E6a8894b2C`, "1000000000000000000", 1127073);
};
