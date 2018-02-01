// var discovery = artifacts.require("./MiniMeToken.sol");

// contract('MiniMeToken', function(accounts) {
//     it("should put 0 MiniMeToken in the first account", function() {
//         return discovery.deployed().then(function(instance) {
//           return instance.balanceOf.call({from: web3.eth.accounts[1], gas:3000000});
//         }).then(function(balance) {
//           assert.equal(balance.valueOf(), 0, "0 was in the first account");
//         });
//       });
      
//     it("should put 1000 MiniMeTokens in the first account", function() {
//         return discovery.deployed().then(function(instance) {
//             instance.generateTokens.call({from: web3.eth.accounts[1], gas:3000000} );
//             return instance.balanceOf.call(instance);
//         }).then(function(balance) {
//             assert.equal(balance.valueOf(), 1000, "1000 was in the first account");
//         });
//     });

// });