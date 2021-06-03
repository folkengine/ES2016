const { expect } = require('chai');
const hello = require('../src/index');

describe('main', function () {
  describe('#hello()', function () {
    it('should return default name if no value passed', function () {
      expect(hello()).to.equal('Hello, World!');
    });

    it('should return greeting with name when value passed in', function () {
      expect(hello('Joe')).to.equal('Hello, Joe!');
    });
  });
});
