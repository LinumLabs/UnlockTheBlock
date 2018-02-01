
module.exports = async promise => {
    try {
      await promise
      assert.fail('Expected revert not received')
    } catch (error) {
      const revertOrAssertFound = error.message.search('revert') >= 0 || error.message.search('assert') >= 0
      assert(revertOrAssertFound, `Expected "revert", got ${error} instead`)
    }
  }