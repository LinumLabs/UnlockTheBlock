var NGO = artifacts.require("./NGO.sol");
const assertRevert = require('./helpers/assertRevert')

contract('NGO', function (accounts) {
    let ngo = null;
    beforeEach(async () => {
        ngo = await NGO.new(100000, 100000);
    })
    
    describe('Testing GDOs', () => {
        it('should add a valid gdo', async () => {
            await ngo.addGDO("0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef", "WorldAid", 1000);
            const gdo = await ngo.findGDO("0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef"); 
            assert.equal(gdo[0], "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef".toLowerCase(), "address does not match of added merchant");
            assert.equal(gdo[1], "WorldAid", "gdo name doesn't match");
            assert.equal(gdo[2], 1000, "doanteable funds don't match");
        })
    });

    describe('Testing GDO funding', () => {
        it('should sends funds', async () => {
            await ngo.addGDO("0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef", "WorldAid", 1000);
            await ngo.fundNGO("0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef",1000);
            const gdo = await ngo.findGDO("0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef");
            assert.equal(gdo[0], "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef".toLowerCase(),"address doesn't match");
            assert.equal(gdo[1], 'WorldAid', "name doesn't match");
        })
    })
});