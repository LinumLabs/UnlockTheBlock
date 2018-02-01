var controller = artifacts.require("Controller");
var tokenSeller = artifacts.require("TokenSellerFactory");
var token = artifacts.require("H2ICO");
var tokenSeller = artifacts.require("TokenSeller");
/*
module.exports = function(deployer) {
  deployer.deploy(token)
    .then(() => {
      return token.deployed()
        .then(t => {
          tok = t;
          deployer.deploy(tokenSellerFactory,tok.address);
          deployer.deploy(controller,tok.address);
          return controller.deployed().then(c => {
            control = c;
            console.log('Controller:', control.address)
            tok.transferOwnership(control.address).then((res) => {
            console.log('Changed controller!', res.tx);
            });
          })
        })
      })
};
*/

module.exports = function(deployer) {
  deployer.deploy(controller, "0x0").then(() => {
    return controller.deployed().then(t => {
      control = t;
      return token.new()})
      .then(t => {
        tok = t;
        tok.transferOwnership(control.address);
      })
  })
}
