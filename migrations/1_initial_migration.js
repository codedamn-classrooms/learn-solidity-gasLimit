const GasLimit = artifacts.require("GasLimit");

module.exports = function (deployer) {
  deployer.deploy(GasLimit);
};
