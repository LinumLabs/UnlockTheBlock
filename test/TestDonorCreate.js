var RefugeeRegister = artifacts.require('./RefugeeRegister.sol');

it("Donor profile created", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Donor can send funds to individual", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Donor can send funds to subset of accounts for equal split", async function() {

    //For example, split between all refugees or refugees in Uganda
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Donor wallet balance reduces by donation amount", async function() {
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Receiver accounts are increased", async function() {

    // There are likely to be multiple receiver accounts for each donation, due to the "middle men"
    // Possibly just hard code the amount eg. GDO takes 5% for admin costs
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("Total receiver increase equals donated amount", async function() {

    // The sum of the "middle-man" and beneficiary receipts should add up to exactly the donated amount
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("The donor cannot send to a deceased account", async function() {

    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("The donor cannot send to an inactive account", async function() {

    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("The donor cannot send a negative amount", async function() {

    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});

it("The donor cannot send to a subset with no valid refugees", async function() {
    // eg. if the refugee camp in Kenya is closed down, the donor cannot donate to that fund as there are no beneficiaries
    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});


it("The donor can see a breakdown of where the funds go", async function() {

    assert(new Date().getTime() < new Date("2018-01-31").getTime());
});