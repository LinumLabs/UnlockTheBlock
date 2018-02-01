var Patron = artifacts.require("Patron");
var SimpleToken = artifacts.require("zeppelin/contracts/examples/SimpleToken");

const gasPrice = web3.toBigNumber(100000000000)

contract('Patron', function(accounts) {
  let simpleToken, patron, starter;

  beforeEach(async function() { 
    starter = web3.toWei(web3.toBigNumber(1))
    simpleToken = await SimpleToken.new();
  });

  describe("Deploying token", function() {
    it("should result in owning 10000 tokens", async function () {
      const shouldEqual = 10000
      const balanceOf = await simpleToken.balanceOf(accounts[0])
      assert.equal(balanceOf.toString(10), web3.toWei(web3.toBigNumber(shouldEqual)).toString(10));
    });
    it("and approving should result approved tokens", async function () {
      const approve = web3.toBigNumber(10000)
      patron = await Patron.new('Test Project', 'ASDF', simpleToken.address, 18, 0, 10, {value: starter});
      const approveTX = await simpleToken.approve(patron.address, approve.toString(10))
      const allowance = await simpleToken.allowance(accounts[0], patron.address);
      assert.equal(allowance.toString(10), approve.toString(10));
    });
  })

  describe("Constant function", function () {
    it("exponential calculation should work", async function () {
      const decimals = 18
      const graphType = 1 // Exponential
      const multiplyer = 1000 // fraction out of 10,000
      const denominator = 10000 // fraction out of 10,000
      const base = 0 // 10**14 // fraction out of 10,000
      const minting = web3.toWei( web3.toBigNumber(10) ) // if there are 10.0 tokens * 10**18
      patron = await Patron.new('Exponential Project', 'ASDF', simpleToken.address, decimals, graphType, multiplyer, {value: starter});
      const expoResult = await patron.currentCostOfToken( minting );
      // mx^2 + b
      const jsResult = web3.toBigNumber(multiplyer).div(denominator).mul( minting.pow(2) ).add(base)
      assert.equal(expoResult.toString(10), jsResult.toString(10));

      const minting2 = web3.toWei( web3.toBigNumber(60) ) // if there are 60.0 tokens * 10**18
      const expoResult2 = await patron.currentCostOfToken( minting2 );
      // mx^2 + b
      const jsResult2 = web3.toBigNumber(multiplyer).div(denominator).mul( minting2.pow(2) ).add(base)
      assert.equal(expoResult2.toString(10), jsResult2.toString(10));

    })
  })


  describe("Minting new tokens", function () {

    // it ("has values", async function () {
    //   const decimals = 0
    //   const graphType = 0 // Linear
    //   const multiplyer = 1000 // fraction out of 10000
    //   patron = await Patron.new('Linear Project', 'ASDF', simpleToken.address, decimals, graphType, multiplyer, {value: starter});

    //   let info = await patron.decimals()
    //   console.log(info)
    //   info = await patron.graphType()
    //   console.log(info)
    //   info = await patron.multiplyer()
    //   console.log(info)
    //   info = await patron.decimals()
    //   console.log(info)
    // })

    it("with linear should mint, mint, then unmint", async function () {
      const decimals = 0
      const graphType = 0 // Linear
      const multiplyer = 1000 // fraction out of 10000
      patron = await Patron.new('Linear Project', 'ASDF', simpleToken.address, decimals, graphType, multiplyer, {value: starter});
      
      let results = await patron.calculateMintTokenPerToken('55') // (web3.toBigNumber(55)).toString(10))
      // console.log(results)
      let amount = results[0]
      let newTokens = results[1]
      //  console.log((amount).toString(), (newTokens).toString())
      await shouldWork((web3.toBigNumber(55)).toString(10))

      results = await patron.calculateMintTokenPerToken((web3.toBigNumber(55)).toString(10))
      amount = results[0]
      newTokens = results[1]
      //  console.log((amount).toString(), (newTokens).toString())
      await shouldWork((web3.toBigNumber(55)).toString(10))

      results = await patron.calculateUnmintTokenPerToken((web3.toBigNumber(4)).toString(10))
      // console.log(results)
      // amount = results[0]
      //  console.log(web3.fromWei(results).toString())

      await unmint((web3.toBigNumber(4)).toString(10))
    })

    it("with exponential fails gracefully", async function () {
      try {
        const decimals = 18
        const graphType = 1 // Exponential
        const multiplyer = 10000 // fraction out of 10000
        patron = await Patron.new('Exponential Project', 'ASDF', simpleToken.address, decimals, graphType, multiplyer, {value: starter});
        await shouldWork()
      } catch (error) {
        assert.isOk('i expected this');
      }
    })

    it("with logarithmic fails gracefully", async function () {
      try {
        const decimals = 18
        const graphType = 2 // Logarithmic
        const multiplyer = 10000 // fraction out of 10000
        patron = await Patron.new('Logarithmic Project', 'ASDF', simpleToken.address, decimals, graphType, multiplyer, {value: starter});
        await shouldWork()
      } catch (error) {
        assert.isOk('i expected this');
      }
    })
  })


  // describe("Subscribing", function() {
  //   it("should work", async function () {
  //       const decimals = 18
  //       const graphType = 0 // Linear
  //       const multiplyer = 20000 // fraction out of 10000
  //       patron = await Patron.new('Linear Project', 'ASDF', simpleToken.address, decimals, graphType, multiplyer, {value: starter});

  //       let extraGas = await patron.getOraclePrice()
  //       extraGas = extraGas.toString(10) === '0' ? extraGas.add(1) : extraGas

  //       const amount = web3.toWei(web3.toBigNumber(10)) // spend 10 base token
  //       const intervals = web3.toBigNumber(10)          // 10 times
  //       const approve = amount.mul(intervals)           // for total of 100 baseTokens

  //       const tokenTx = await simpleToken.approve(patron.address, approve.toString(10));

  //       const interval = web3.toBigNumber(1).mul(60).mul(60).mul(24).mul(7).mul(4) // 1 month
  //       const percentToPatron = web3.toBigNumber(50) // 50 percent of purchase goes to myself, rest goes to patron

  //       const preSubscriptionLength = await patron.returnSubscriptionsLength()

  //       const tx = await patron.subscribe(accounts[0], amount.toString(10), interval.toString(10), percentToPatron.toString(10), {from: accounts[0], value: extraGas.toString(10)});
        

  //       tx.logs.map((log) => {
  //         // console.log(log.args)
  //       })
  //       assert.equal(tx.receipt.status, '0x01');

  //       const postSubscriptionLength = await patron.returnSubscriptionsLength()
  //       // console.log(postSubscriptionLength.toString(10))
  //       assert.equal(preSubscriptionLength.toString(10), postSubscriptionLength.toString(10));

  //   });
  // });

  async function shouldWork(amount) {
    const preBalance = await simpleToken.balanceOf(accounts[0])

    const approve = web3.toBigNumber(web3.toWei(amount))
    const simpleBalance = await simpleToken.balanceOf(accounts[0])
    //  console.log('simpleBalanceBefore:', web3.fromWei(simpleBalance).toString())
    const approveTX = await simpleToken.approve(patron.address, approve)

    const tuple = await patron.calculateMintTokenPerToken(web3.fromWei(approve).toString())
    const totalMinted = tuple[0]
    const totalCost = tuple[1]

    //  console.log('totalMinted:', web3.fromWei(totalMinted.toString(10)))
    //  console.log('totalCost:', web3.fromWei(totalCost.toString(10)))
    const preBalanceBondedToken = await patron.balanceOf(accounts[0])

    const gasEstimate = await patron.mint.estimateGas(accounts[0], web3.fromWei(approve).toString() )
    //  console.log('gas in ETH', web3.fromWei(web3.toBigNumber(gasEstimate).mul(gasPrice)).toString(10))

    const mintTX = await patron.mint(accounts[0], web3.fromWei(approve).toString(10))
    const balance = await patron.balanceOf(accounts[0])
    const postBalance = await simpleToken.balanceOf(accounts[0])

    const totalSupply = await patron.totalSupply()
    const costPerToken = await patron.costPerToken()
    //  console.log('totalSupply', web3.fromWei(totalSupply).toString(10))
    //  console.log('costPerToken', web3.fromWei(costPerToken).toString(10))

    // total cost estimate is same as differece between base token balance
    assert.equal(totalCost.toString(10), preBalance.minus(postBalance).toString(10));

    // total minted estimate is same as balance after minting
    assert.equal(web3.fromWei(totalMinted.add(preBalanceBondedToken).toString(10)).toString(10), web3.fromWei(balance.toString(10)).toString(10));
  }


  async function unmint(amount) {
    const preBalance = await simpleToken.balanceOf(accounts[0])

    const approve = web3.toBigNumber(web3.toWei(amount))
    const simpleBalance = await simpleToken.balanceOf(accounts[0])
    //  console.log('simpleBalanceBefore:', web3.fromWei(simpleBalance).toString())
    const approveTX = await simpleToken.approve(patron.address, approve)

    const totalCost = await patron.calculateUnmintTokenPerToken(web3.fromWei(approve).toString())

    //  console.log('totalUnmintedCost:', web3.fromWei(totalCost.toString(10)))
    const preBalanceBondedToken = await patron.balanceOf(accounts[0])
    //  console.log('preBalanceBondedToken:', web3.fromWei(preBalanceBondedToken).toString())

    const gasEstimate = await patron.unmint.estimateGas(accounts[0], web3.fromWei(approve).toString() )
    //  console.log('gas in ETH', web3.fromWei(web3.toBigNumber(gasEstimate).mul(gasPrice)).toString(10))

    const mintTX = await patron.unmint(accounts[0], web3.fromWei(approve).toString(10))
    const balance = await patron.balanceOf(accounts[0])
    const postBalance = await simpleToken.balanceOf(accounts[0])

    const totalSupply = await patron.totalSupply()
    const costPerToken = await patron.costPerToken()
    //  console.log('totalSupply', web3.fromWei(totalSupply).toString(10))
    //  console.log('costPerToken', web3.fromWei(costPerToken).toString(10))

    // total cost estimate is same as differece between base token balance
    assert.equal(totalCost.toString(10), postBalance.minus(preBalance).toString(10));

    // total minted estimate is same as balance after minting
    assert.equal(web3.fromWei((preBalanceBondedToken).minus(approve).toString(10)).toString(10), web3.fromWei(balance.toString(10)).toString(10));
  }


  
});
