
App = {
  web3Provider: null,
  contracts: {},
  displayWater: 500,

 
  /**Initialize the page
   * 
   */
  init: function() {
    return App.initWeb3();
  },

  /**Intialize and inject web3 provider
   * 
   */
  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
      web3 = new Web3(App.web3Provider);
    }
    // after intilising web3 we want intialize the contract
    return App.initContract();
  },

  /**
   * Initialise the Contract 
   */
  initContract: function() {
    $.getJSON('Controller.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var ControllerArtifact = data;
      App.contracts.Controller = TruffleContract(ControllerArtifact);

      // Set the provider for our contract.
      App.contracts.Controller.setProvider(App.web3Provider);

      //TODO: we can retreive what information we need here
      // Use our contract to retieve and mark the adopted pets.
      // return App.getBalances();

    });

    //bind events allows us to set onclick listeners
    return App.bindEvents();
  },

  bindEvents: function() {
    //TODO: write the corresponding event handlers for these events 
    //TODO: write function to be able to show the water limit
    //TODO: write function to show total valid users 

    //$(document).on('click', '#transferButton', App.handleTransfer);
    $(document).on('click', '#setTokenAddressButton', App.handleSetTokenAddress); //TODO: write event
    $(document).on('click', '#generateTokensButton', App.handleGenerateTokens);   //TODO: write event
    $(document).on('click', '#setWaterLimitButton', App.handleSetWaterLimit);     
    $(document).on('click', '#addValidatedUserButton', App.handleAddValidatedUser); 
    $(document).on('click', '#removeUserButton', App.handleRemoveUser);             
    $(document).on('click', '#withDrawTokensButton', App.handleWithDrawTokens);     
    $(document).on('click', '#checkAddressIfCanWithdrawButton', App.handleCheckAddressIfItCanWithDraw); 
    $(document).on('click', '#currentUserTokenBalanceButton', App.handleViewCurrentUserTokenBalance); 
  },

  /**
   * Handle the event for changing the water limit 
   * TESTED PASSED
   */
  handleSetWaterLimit :function(event){
    event.preventDefault();

    //get the account in order to be able to execute function on the blockchain
    //in particular access account[0]
    web3.eth.getAccounts(function(error, accounts) {
    if (error) {
        console.log(error);
    }
    var account = accounts[0];

    //get the water limit from the ui element
    var waterLimit = parseInt($('#waterLimitInput').val());

    //get an instance of the contract
    var controllerInstance;
    App.contracts.Controller.deployed().then(function(instance) {
      controllerInstance = instance;

    // Execute function on smart contract
    console.log("calling getsetWaterLimit");
      return controllerInstance.setUserWaterLimit(waterLimit, {from: account});
      }).then(async function(result) {
       
        console.log(result);
          const newWaterLimit = await App.getWaterLimit();
          console.log("new water limit" + newWaterLimit);
          App.displayWaterLimit(newWaterLimit);
      
        
    
      }).catch(function(err) {
        console.log(err.message);
       });
    });
  },


  /**
   * Handle the event for adding validated users to the smart contract
   */
  handleAddValidatedUser :function(event){
    event.preventDefault();

    //get access to account 0
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];

       //pull value off of UI element
       //CAN TAKE THIS VALUE IN AS A STRING AS WEB3 WILL AUTOMATICALLY CAST TO ADDRESS
      var validatedUser = $('#validateUserTextBox').val();
  
       //get an instance of the contract
      var controllerInstance;
      App.contracts.Controller.deployed().then(function(instance) {
      controllerInstance = instance;

      // Execute addUser
      return controllerInstance.addUser(validatedUser, {from: account});
      }).then(async function(result) {
        console.log(result);

        const newUserCount = await App.getUserCount();
        console.log("new usercount limit" + newUserCount);
        App.displayUserCount(newUserCount);
      
      
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  /**
   * Handle the event to remove a user from the smart contract
   */
  handleRemoveUser :function(event){
    event.preventDefault();

    //get access to account 0
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];

       //pull value off of UI element
       //CAN TAKE THIS VALUE IN AS A STRING AS WEB3 WILL AUTOMATICALLY CAST TO ADDRESS
      var ValidatedUser = $('#removeUserTextBox').val();
  
       //get an instance of the contract
      var controllerInstance;
      App.contracts.Controller.deployed().then(function(instance) {
      controllerInstance = instance;

      // Execute removeUser
      return controllerInstance.removeUser( {from: account}, ValidatedUser);
      }).then(async function(result) {
        console.log(result);

        const newUserCount = await App.getUserCount();
        console.log("new usercount limit" + newUserCount);
        App.displayUserCount(newUserCount);
      
      
      }).catch(function(err) {
        console.log(err.message);
      });
    });

  },

  /**Allow users to draw their monthly allocation of tokens */
  handleWithDrawTokens :function(event){
    event.preventDefault();
    //get the account in order to be able to execute function on the blockchain
    //in particular access account[0]
    web3.eth.getAccounts(function(error, accounts) {
    if (error) {
        console.log(error);
    }
    var account = accounts[0];

    //get an instance of the contract
    var controllerInstance;
    App.contracts.Controller.deployed().then(function(instance) {
      controllerInstance = instance;

    // Execute function on smart contract
    console.log("calling withdraw");
      return controllerInstance.withdraw({from: account});
      }).then(async function(result) {
       
        console.log(result);
         // const newWaterLimit = await App.getWaterLimit();
         // console.log("new water limit" + newWaterLimit);
         // App.displayWaterLimit(newWaterLimit);
      
        
    
      }).catch(function(err) {
        console.log(err.message);
       });
    });

  },

  /**
   * Handle event to see if use can withdraw ther tokens 
   */
  handleCheckAddressIfItCanWithDraw: function(event){
    event.preventDefault();

    //get account[0]
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];


    //pull value off of UI element
    var checkAddress = $('#checkAdressIfCanWithdrawInput').val(); 
    
     //get an instance of the contract
     var controllerInstance;
     App.contracts.Controller.deployed().then(function(instance) {
        controllerInstance = instance;
 
       // Execute can Withdraw
       return controllerInstance.canWithdraw(checkAddress, {from: account});
      }).then(function(result) {
    
        console.log(result);
      
        
      });
    });

  },
  /** */
 
  
  /**function to return the water balance  
   * TESTED PASSED
   * 
  */
  getWaterLimit: function() {
    var controllerInstance;
    return App.contracts.Controller.deployed().then(function(instance) {
      //call function to return waterLimit 
      controllerInstance = instance;
      console.log("calling getUserWaterLimit");
      return controllerInstance.getUserWaterLimit.call();

    }).then(function(result) {

      App.displayWater = result.c[0]; 
      console.log("this is display water"+ App.displayWater);
      return result.c[0];
     
      
    //handle errors
    }).catch(function(err) {
      console.log(err.message);
      return err.message;
    });
  },

  handleViewCurrentUserTokenBalance: function(event) {

    //get the value off the box
    var getUser = $('#currentUserTokenBalanceBox').val();

    var controllerInstance;

    return App.contracts.Controller.deployed().then(function(instance) {
      //call function to return waterLimit 
      controllerInstance = instance;
      console.log("calling getUserBalance");
      console.log(getUser);
      return controllerInstance.getBalance(getUser);

    }).then(function(result) {

     // App.displayWater = result.c[0]; 
      
      console.log("this the user balance:");
      console.log(result);
      return result.c[0];
     
      
    //handle errors
    }).catch(function(err) {
      console.log(err.message);
      return err.message;
    });
  },



  /**Display Water Limit
   * TESTED WORKS
  */
  displayWaterLimit(wl)
  {
    document.getElementById("currentWaterLimit").innerHTML = wl;
  },


  /**funtction to get the current user count
  */
  getUserCount: function() {
    var controllerInstance;
    return App.contracts.Controller.deployed().then(function(instance) {
      
      //call function to return totalUsers
      controllerInstance = instance;
      console.log("calling getTotalUsers");
      return controllerInstance.getTotalUsers();

    }).then(function(result) {

      console.log(result);
      //App.displayWater = result.c[0]; 
      //console.log("this is display water"+ App.displayWater);
      return result.c[0];
     
      
    //handle errors
    }).catch(function(err) {
      console.log(err.message);
      return err.message;
    });
    
  },




  /**Displays the validated user account MUST up */
  displayUserCount(uCount){
    document.getElementById("totalValidUsers").innerHTML = uCount;
  },



};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
