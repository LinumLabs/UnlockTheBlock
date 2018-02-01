var controller = artifacts.require("Controller");

contract('controller',function(accounts) {

    let control;
    let token;

    beforeEach(async () => {
        control = await controller.new();
        token = control.generateToken();
    });

    it("should add user", async function() {
        await control.addUser(accounts[1]);
        const user = await control.containsUser(accounts[1]);
        assert.equal(user,true,"User not added")
    });

    it("should remove user", async function() {
        await control.addUser(accounts[1]);
        const user = await control.containsUser(accounts[1]);
        assert.equal(user,true,"User not added")
        await control.removeUser(accounts[1]);
        const noUser = await control.containsUser(accounts[1]);
        assert.equal(noUser,false,"User not removed");
    });

    // it ("should have a water limit of 80",function(){
    //     return controller.deployed().then(function(instance){
    //          instance.generateToken();
    //          instance.setUserWaterLimit(80);
    //          return instance.getUserWaterLimit();
    //     }).then(function(waterLimit) {
    //         assert.equal(waterLimit.valueOf(),80,"80 wasn't the water limit")

    //     });
    // });

    it ("should have a water limit of 80", async () => {
        let set
        let get
        set = await control.setUserWaterLimit(80, {from: accounts[0]});
        get = await control.getUserWaterLimit.call();
        assert.equal(80,get.toNumber(),"80 wasn't the water limit")
    });

    it ("should not change from 80 to 90", async () => {
        let get
        await control.setUserWaterLimit(80, {from: accounts[0]});
        await control.setUserWaterLimit(90, {from: accounts[1]});
        get = await control.getUserWaterLimit.call();
        assert.equal(80,get.toNumber(),"80 wasn't the water limit")
    });

    it ("should exchange tokens", async () => {
        let get

        //test if exchange works under normal conditions
        await control.setUserWaterLimit(100, {from: accounts[0]});
        await control.addUser(accounts[1]);
        await control.addUser(accounts[2]);
        await control.withdraw({from:accounts[1]});
        const balance = await control.getBalance(accounts[1]);
        assert.equal(100, balance.toNumber(), "Withdrawal unsuccessful");
        control.requestSale(100,{from: accounts[1]});
        await control.exchange(accounts[1], accounts[2], 100);
        const balanceOne = await control.getBalance(accounts[2]);
        assert.equal(95,balanceOne.toNumber(),"Incorrectly exchanged");
        const balanceTwo = await control.getBalance(accounts[1]);
        assert.equal(0, balanceTwo.toNumber(),"Balance not reduced")


        //test to get lost water
        await control.exchange(accounts[1], accounts[2], 5);
        const balanceThree = await control.getBalance(accounts[2]);
        assert.equal(95,balanceThree.toNumber(),"incorrectly got burnt water ");

    });

    it ("should return the correct number of users", async () => {
        await control.addUser(accounts[1]);
        await control.addUser(accounts[2]);
        const addUserCount = await control.getTotalUsers();
        assert.equal(2,addUserCount.toNumber(),"Incorrect Number of users recorded");
        await control.removeUser(accounts[2]);
        const rmUserCount = await control.getTotalUsers();
        assert.equal(1,rmUserCount.toNumber(),"Incorrect Number of users after remove")
    });

    it("should withdraw Tokens", async function() {
        await control.addUser(accounts[1]);
        await control.setUserWaterLimit(80);
        await control.withdraw({from: accounts[1]});
        const balance0 = await control.getBalance(accounts[1]);
        assert.equal(balance0.toNumber(), 80, "Balance was not withdrawn");
        await control.withdraw({from: accounts[1]});
        const balance1 = await control.getBalance(accounts[1]);
        assert.equal(balance1.toNumber(), 80, "Balance was withdrawn twice")
    });

});