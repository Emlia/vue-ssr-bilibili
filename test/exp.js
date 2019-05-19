const {
  add,
  mul
} = require('./math');
const {
  should,
  expect,
  assert
} = require('chai')


should()
add(2, 3).should.equal(5)
expect(add(2, 3)).to.be.equal(5)


describe('#math', function () {
  describe('add', function () {
    it('2+3 should to be 5', () => {
      expect(add(2, 3), 5)
    })
  })
  describe('mul', function () {
    it('2*3 should to be 6', () => {
      expect(mul(2, 3), 6)
    })
  })
  describe.skip('mul', function () {
    it('2*3 should to be 6', () => {
      expect(mul(2, 3), 6)
    })
  })
})
