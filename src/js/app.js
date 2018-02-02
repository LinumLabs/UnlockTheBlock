App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // Is there an injected web3 instance?
    console.log('WEB 3 typeof: ' + typeof web3);
    console.log('WEB 3 current provider: ' + web3.currentProvider);
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('../CertStore.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var CertStoreArtifact = data;
      App.contracts.CertStore = TruffleContract(CertStoreArtifact);
    
      // Set the provider for our contract
      App.contracts.CertStore.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the adopted pets
      //return App.markAdopted();
      return App.deployContract();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    //$(document).on('click', '.btn-adopt', App.handleAdopt);
    $(document).on('click', '.btn-verifyCert', App.handleVerifyCert);
    $(document).on('click', '.btn-storeCert', App.handleStoreCert);
  },

  handleVerifyCert: function(event) {

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      event.preventDefault();

      console.log('FIRED handleVerifyCert');

      App.contracts.CertStore.deployed().then(function(instance) {
        helloWorldInstance = instance;

        console.log("#institutionName " + $('#institutionName').val());

        var institutionName = $('#institutionName').val();
        var personId = $('#personId').val();
        var certId = $('#certId').val();
        var courseType = $('#courseType').val();

        console.log(institutionName + " | " + personId + " | " + certId + " | " + courseType);

        //Verifying that the record exists
        instance.verifyProof(institutionName, personId, certId, courseType, {from: account}).then(function(isSuccess){  
          console.log("test on credential: " + isSuccess);
          if(isSuccess) {
            $('#successIndicator').val("Verification of the record is SUCCESSFUL");}
            else 
            $('#successIndicator').val("The record CANNOT be verified.");
        });
      
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  handleStoreCert: function(event) {

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      event.preventDefault();

      console.log('FIRED handleStoreCert');

      App.contracts.CertStore.deployed().then(function(instance) {

        var institutionName = $('#institutionName').val();
        var personId = $('#personId').val();
        var certId = $('#certId').val();
        var courseType = $('#courseType').val();

        console.log(institutionName + " | " + personId + " | " + certId + " | " + courseType);

        instance.storeProof(institutionName, personId, certId, courseType, {from: account}).then(function(isSuccess){  
          console.log("test result is: " + isSuccess);
          if(isSuccess) {
            $('#successIndicator').val("The record has been STORED.");
          }
          else ($('#successIndicator').val("The record CANNOT be stored."));
        });
      
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
