const AccessRestriction = artifacts.require("./AccessRestriction.sol");

contract('AccessRestriction', function ([owner]) {
  let accessRestriction
  beforeEach('setup contract for each test', async function () {
    accessRestriction = await AccessRestriction.new()
})

it('has an owner', async function () {
  console.log(owner)
  assert.equal(await accessRestriction.owner != "", true);
})

})