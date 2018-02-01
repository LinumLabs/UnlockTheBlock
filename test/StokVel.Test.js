
var StokBlok = artifacts.require('StokBlok');
var StokVel = artifacts.require('StokVel');

/*

contract('Bounty', function (accounts) {
  let stockvelAddr
  let st
  let stockVelInstance
  beforeEach(() => {
    StokBlok.new().then(
      (std) => {
        st = std

          return std.createStokvel(accounts, 100, 0, {from: accounts[0]})

    }).then(stockvel => {
      return st.children(0)
    }).then((val) => {
      stockvelAddr = val
      return StokVel.at(stockvelAddr)
    }).then(sti => {
      stockVelInstance = sti
      // console.log(stockVelInstance)
      
      stockVelInstance.getPersonBalance(accounts[1]).then(sti => {
        console.log('balance before', sti.toString())
        console.log(accounts[1])
        // return stockVelInstance.send(1000,accounts[1])
        
               stockVelInstance.sendTransaction({from:accounts[0],value:100})       
        return stockVelInstance.sendTransaction( {from:accounts[1],value:100} )

      })
      .then(sti => { 
        console.log(sti)
        // console.log(sti)
        return stockVelInstance.getPersonBalance(accounts[1])
      }).then(sti => {
        console.log(sti.toString())

        return stockVelInstance.withdraw(20,{from:accounts[1]});
      }).then(sti => {
        console.log(sti.logs[0])
      })
      
    })
  })

  it('sets reward', function () {
    console.log(stockvelAddr)
 
    assert(true)
  })
});

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

contract('UsersAddFunds', function (accounts) {
  let stockvelAddr
  let st
  let stockVelInstance
  beforeEach(() => {
    StokBlok.new().then(
      (std) => {
        st = std
          //CREATE NEW STOKVEL
          return std.createStokvel(accounts, 100, 0, {from: accounts[0]})

    }).then(stockvel => {
      return st.children(0)
    }).then((val) => {
      stockvelAddr = val
      return StokVel.at(stockvelAddr)
    }).then(sti => {
      stockVelInstance = sti
      // console.log(stockVelInstance)
      
      stockVelInstance.getPersonBalance(accounts[1])
      .then(sti => {
        console.log('Populating Accounts')
        // return stockVelInstance.send(1000,accounts[1])
        stockVelInstance.sendTransaction({from: accounts[0],value:100})       
        stockVelInstance.sendTransaction({from: accounts[1],value:100})
        stockVelInstance.sendTransaction({from: accounts[2],value:100})
        stockVelInstance.sendTransaction({from: accounts[3],value:100})
        stockVelInstance.sendTransaction({from: accounts[4],value:100})
        stockVelInstance.sendTransaction({from: accounts[5],value:100})
        stockVelInstance.sendTransaction({from: accounts[6],value:100})
        stockVelInstance.sendTransaction({from: accounts[7],value:100})
        stockVelInstance.sendTransaction({from: accounts[8],value:100})
        stockVelInstance.sendTransaction({from: accounts[9],value:100})
        stockVelInstance.withdraw(20,{from:accounts[1]});
        var a= stockVelInstance.getTheBalance() 
        console.log(a)
        return a 
      }).then(sti => { 
        console.log(sti)
      })


    })
  })

  it('UsersAddFunds', function () {
    console.log(stockvelAddr)
    assert(true)
  })
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

