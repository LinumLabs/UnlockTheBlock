var ERC721 = artifacts.require("ERC721Token.sol");

// NOTE: Use this file to easily deploy the contracts you're writing.
//   (but make sure to reset this file before committing
//    with `git checkout HEAD -- migrations/2_deploy_contracts.js`)


module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(ERC721);
};