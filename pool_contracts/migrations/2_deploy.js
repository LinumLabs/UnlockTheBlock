var Patron = artifacts.require("./Patron.sol");
var SimpleToken = artifacts.require("zeppelin/contracts/examples/SimpleToken.sol");

module.exports = async function(deployer, helper, accounts) {
  try {
    await deployer.deploy(SimpleToken)
    await deployer.deploy(Patron, 'Test Project', 'ASDF', SimpleToken.address, 0, 2)
  } catch (error) {
    console.log(error)
  }
}
