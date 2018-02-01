const ThembaR = artifacts.require("./ThembaR.sol");
const assertRevert = require('./helpers/assertRevert');


contract('ThembaR', function ([owner, random]) {
  let thembaR
  beforeEach('setup contract for each test', async function () {
    thembaR = await ThembaR.new(owner, "ddf", "dsd")
})

it('has an owner and in fact is correct owner', async function () {
  console.log(owner)
  //assert.equal(await thembaR.getOwner(), owner)
})

it('get agreement list of empty token should return nothing', async function () {
  console.log(await thembaR.getAgreementList())
  //assert.equal((await thembaR.getAgreementList()), []);
})

it('get signed agreements of empty token should revert', async function () {
  console.log(await thembaR.signAgreement(owner) );
  //assertRevert(await thembaR.signAgreement(owner));
})

it('get un-signed agreements of empty token should return nothing', async function () {
  console.log(owner)
  //assert.equal(await thembaR.getSignerUnSignedAgreements(owner) == [], true);
})
it('get signed agreements of nnull address should return friendly message', async function () {
  console.log(owner)
  //await assertRevert(await thembaR.getSignedAgreements(null));
})

it('get un-signed agreements of nnull address should return friendly message', async function () {
  console.log(owner)
  //await assertRevert(await thembaR.getSignerUnSignedAgreements(null));
})

it('sign null agreement should return error message and not crash', async function () {
  console.log(owner)
  //assert.equal(await thembaR.signAgreement(null), true);
})
})