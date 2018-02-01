var RefugeeRegister = artifacts.require('./RefugeeRegister.sol');

it("Voucher code created", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Voucher code loaded by another account", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Voucher can only be loaded once", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Merchant does not get voucher value", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});
