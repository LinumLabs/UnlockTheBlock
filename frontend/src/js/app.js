$.ajaxSetup({ cache: false });

const middleWareURL = 'http://localhost:8080'

function catTweet(params) {
  if (!params) {
    $.get(middleWareURL, (data) => {
      $("#tweet_text").html(data.text)
    })
  } else {
    $.get(middleWareURL + params[0] + "&sentiment=" + params[1], (data) => {
      $("#tweet_text").html(data.text)
      console.log("recorded tweet")
    })
  }
}

App = {
  web3Provider: null,
  contracts: {},
  userAddress: null,

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
      web3 = new Web3(App.web3Provider);
      appWeb3 = web3;
    }

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      App.userAddress = account
      $("#ethAddress").html(account)
    });

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('GweiItoken.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var TutorialTokenArtifact = data;
      App.contracts.TutorialToken = TruffleContract(TutorialTokenArtifact);

      // Set the provider for our contract.
      App.contracts.TutorialToken.setProvider(App.web3Provider);

      // Use our contract to retieve and mark the adopted pets.
      return App.getBalances();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#transferButton', App.handleTransfer);
    $(document).on('click', '#positiveButton', App.positiveSentiment);
    $(document).on('click', '#negativeButton', App.negitiveSentiment);
  },

  handleTransfer: function(event) {
    event.preventDefault();

    var amount = parseInt($('#TTTransferAmount').val());
    var toAddress = $('#TTTransferAddress').val();

    console.log('Transfer ' + amount + ' TT to ' + toAddress);

    var tutorialTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.TutorialToken.deployed().then(function(instance) {
        tutorialTokenInstance = instance;

        return tutorialTokenInstance.transfer(toAddress, amount, {from: account});
      }).then(function(result) {
        alert('Transfer Successful!');
        return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  positiveSentiment: function(event) {
    App.sentiment(event, 1)
  },

  negitiveSentiment: function(event) {
    App.sentiment(event, -1)
  },

  sentiment: function(event, sent) {
    event.preventDefault()
    console.log('logging sentiment')
    console.log(sent)
    console.log(App.userAddress)
    params = [App.userAddress, sent]
    getNewTweet(params)
  },

  getBalances: function(adopters, account) {
    console.log('Getting balances...');

    var tutorialTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.TutorialToken.deployed().then(function(instance) {
        tutorialTokenInstance = instance;

        return tutorialTokenInstance.balanceOf(account);
      }).then(function(result) {
        balance = result.c[0];

        $('#TTBalance').text(balance);
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

};

$(function() {
  
  $(window).load(function() {
    App.init();
    getNewTweet(false)
  });
});
