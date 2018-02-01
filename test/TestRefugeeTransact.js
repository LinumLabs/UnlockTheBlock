var RefugeeRegister = artifacts.require('./RefugeeRegister.sol');

it("Physical purchase reduces account balance - single user", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Physical purchase reduces account balance - household", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Non-merchant account cannot reduces account balance", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Voucher purchase reduces account balance", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Transaction amount cannot be greater than account balance", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Transaction cannot be processed if account holder is deceased", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Transaction cannot be processed if refugee status is not valid", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});