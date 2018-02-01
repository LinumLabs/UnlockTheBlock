
var HDWalletProvider = require("truffle-hdwallet-provider");
var secrets = require('./secret.js')
module.exports = {
  networks: {
     truffle: {
      provider: function() {
        return new HDWalletProvider(secrets.truffle, "http://localhost:9545", 0)
      },
      network_id: 666
    },
    ganache: {
      provider: function() {
        return new HDWalletProvider(secrets.truffle, "http://localhost:7545", 0)
      },
      network_id: 5777
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(secrets.mnemonic, "https://rinkeby.infura.io/" + secrets.infura, 0)
      },
      network_id: 4
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(secrets.mnemonic, "https://ropsten.infura.io/" + secrets.infura, 0)
      },
      gas: 4700000,
      network_id: 3
    },
    kovan: {
      provider: function() {
        let id = new HDWalletProvider(secrets.mnemonic, "https://kovan.infura.io/" + secrets.infura, 1)
        return id
      },
      network_id: 42,
      gas:4700000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
