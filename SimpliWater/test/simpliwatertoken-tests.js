var SimplyWaterToken = artifacts.require('./SimpliWaterToken.sol');

contract('SimpliWaterToken', function (accounts) {
   let contract;
   const admin = accounts[0];
   const meter = accounts[1];      
   const user_1 = accounts[2];       

   //TODO: Implement test that cause exceptions.

    before(async function(){
        contract = await SimplyWaterToken.deployed();   
      });

      it("Total supply set to zero", async function() {
        let returnedTotalSupply = await contract.totalSupply();
        assert.equal(returnedTotalSupply, 0);
      });


      it("Owner can register meter with 0 users", async function() {
        let epochTime = 1517385490;
        await contract.registerMeter(meter, epochTime);
        let returnedMeterStats = await contract.retrieveMeterStats(meter);        
        let returnedMeterUsage = await contract.getMeterUsage(meter);
        assert.equal(returnedMeterStats[0], meter);
        assert.equal(returnedMeterStats[1], 0);
        assert.equal(returnedMeterStats[2], epochTime);
        assert.equal(returnedMeterStats[3], 0);                    
        assert.equal(returnedMeterStats[4], 0);          
        assert.equal(returnedMeterUsage, 0);          
      });

      it("Owner can add user to meter", async function() {
        let testUserFirstName = "Satoshi";
        let testUserLastName = "Nakomoto";
        let testUserID = 123456789;
        
        await contract.addUserToMeter(meter, testUserFirstName, testUserLastName, testUserID);
        let returnedMeterStats = await contract.retrieveMeterStats(meter);
        assert.equal(returnedMeterStats[0], meter);
        assert.equal(returnedMeterStats[1], 1);        
      });


      it("Owner can top up meter balance by an arbitrary amount", async function() { 
        let topUpAmount = 1000;      
        let meterBalanceBefore = await contract.balanceOf(meter);  
        await contract.topUpBalance(meter, topUpAmount);
        let meterBalanceAfter = await contract.balanceOf(meter); 
        assert.equal(parseInt(meterBalanceAfter), parseInt(meterBalanceBefore) + parseInt(topUpAmount));
      });


      it("Meter can burn an arbitrary amount and increment overall usage", async function() { 
        let burnAmount = 500;      
        let meterUsageBefore = await contract.getMeterUsage(meter);          
        let meterBalanceBefore = await contract.balanceOf(meter);  
        await contract.burn(burnAmount, {from: meter});
        let meterBalanceAfter = await contract.balanceOf(meter); 
        let meterUsageAfter = await contract.getMeterUsage(meter);                  
        assert.equal(parseInt(meterBalanceAfter), parseInt(meterBalanceBefore) - parseInt(burnAmount));
        assert.equal(parseInt(meterUsageBefore), parseInt(meterUsageAfter) - parseInt(burnAmount));        
      });


      it("An arbitrary entity can retrieve stats for a meter", async function() { 
        let meterBalance = await contract.balanceOf(meter);  
        let returnedMeterStats = await contract.retrieveMeterStats(meter);         
        assert.equal(returnedMeterStats[0], meter);
        assert.equal(parseInt(returnedMeterStats[3]), parseInt(meterBalance));
      });

      it("An arbitrary entity can retrieve utility constants", async function() { 
        let returnedUtilityConstants = await contract.retrieveUtilityConstants(); 
        let initialDailyLimit = 50000;
        let initialPenaltyCharge = 4000;        
        let initialNormalCharge = 1000;                        
        assert.equal(returnedUtilityConstants[0], initialNormalCharge);
        assert.equal(returnedUtilityConstants[1], initialPenaltyCharge);
        assert.equal(returnedUtilityConstants[2], initialDailyLimit);
      });


      it("An arbitrary entity can send ether and top up the meter balance", async function() { 
        let topUpAmount = 5000;      
        let weiValue = 10;
        let contractBalanceBefore = await contract.getEthBalance(meter); 
        let meterBalanceBefore = await contract.balanceOf(meter);  
        await contract.topUpBalanceWithEther(meter, topUpAmount, {value:weiValue, from: user_1});
        let meterBalanceAfter = await contract.balanceOf(meter); 
        let contractBalanceAfter = await contract.getEthBalance(meter);        
        assert.equal(parseInt(meterBalanceAfter), parseInt(meterBalanceBefore) + parseInt(topUpAmount));
        assert.equal(parseInt(contractBalanceBefore), parseInt(contractBalanceAfter) + parseInt(weiValue));       
      });
});