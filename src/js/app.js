App = {
    web3Provider: null,
    contracts: {},
  
    init:function() {

        //we can load some stuff here to show on the screen
        //connect to another html page
    $.getJSON('../cows.json', function(data) {
      var cowRow = $('#cowRow');
      var cowTemplate = $('#cowTemplate');

      for (i = 0; i < data.length; i ++) {
        cowTemplate.find('.panel-title').text(data[i].name);
        cowTemplate.find('img').attr('src', data[i].picture);
        cowTemplate.find('.cow-tag').text(data[i].tag);
        cowTemplate.find('.cow-breed').text(data[i].breed);
        cowTemplate.find('.cow-age').text(data[i].age);
        cowTemplate.find('.cow-price').text(data[i].price);
        cowTemplate.find('.btn-invest').attr('data-id', data[i].id);
        cowRow.append(cowTemplate.html());
      }
    });


      return App.initWeb3();  //where we connect contract to front-end
    },
  
    initWeb3: function() {
      // Initialize web3 and set the provider to the testRPC.
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
      } else {
        // set the provider you want from Web3.providers
        App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
        web3 = new Web3(App.web3Provider);
      }
  
      return App.initContract(); //initalise the contract
    },


    initContract: function() {
        $.getJSON('ERC721Token.json', function(data) {
          // Get the necessary contract artifact file and instantiate it with truffle-contract.
          var ERC721TokenArtifact = data;
          App.contracts.ERC721Token = TruffleContract(ERC721TokenArtifact);
    
          // Set the provider for our contract.
          App.contracts.ERC721Token.setProvider(App.web3Provider);
    
          // Use our contract to retieve total supply of tokanes
          return App.mytokens();
        
        });
    
        return App.bindEvents();
      },
      bindEvents: function() {
        $(document).on('click', '.btn-invest', App.handleInvest);
      },
    
      mytokens: function(totalTokens, account) {
        var tokenInstance;
    
    App.contracts.ERC721Token.deployed().then(function(instance) {
        tokenInstance = instance;
    
      return tokenInstance.totalSupply.call(); //calling to see the total supply of tokens
    
    }).then(function(totalTokens) {
    
      //looping through 3 addresses,
       for (i = 0; i < totalTokens.length; i++) {
        if (totalTokens[i] !== '0x0000000000000000000000000000000000000000') {
          $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
         }
       }
    }).catch(function(err) {
      console.log(err.message);
    });
      },
    
      handleInvest: function(event) {
        event.preventDefault();
    
        //the id we passed from the page. 
        var cowId = parseInt($(event.target).data('id'));
    
        var  ERC721TokenInstance;
    
        //var gasPrice = gasStationAPI(), can be specified --> ask later                                                                        
    
    
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
    
      //find specific accounts that will be used to talk to network
      var account = accounts[0];
      App.contracts.ERC721Token.deployed().then(function(instance) {
        ERC721TokenInstance = instance;
        console.log("The instance: ", ERC721TokenInstance)

        //add current farmer
        ERC721TokenInstance.newFarmer(account);
        
        // Execute mint as a transaction by sending account (that is already a farmer)
        return ERC721TokenInstance._mint(account,cowId, {from: account});
        
        
      }).then(function(result) {
        console.log(result)
        alert('Your transaction hash is: ' + result.tx)
        
        return App.mytokens();

      }).catch(function(err) {
        console.log(err.message);
      });
    });

      }
    
    };

    $(function() {
      $(window).load(function() {
        App.init();
      });
    });

   
    
    
  