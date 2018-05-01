require('./support');
const {normalizeLanguageCode, matchesWord} = require('../lib/utility');

describe('The Utility file', function() {

  describe('matchesWord method', function() {
    it('should match latin', function() {
      expect(matchesWord('water')).to.be.deep.equal(['water']);
    });

    it('should match russian', function() {
      expect(matchesWord('Москва')).to.be.deep.equal(['Москва']);
    });

    it('should match japanese', function() {
      expect(matchesWord('北京市')).to.be.deep.equal(['北京市']);
    });

    it('should match arabic', function() {
      expect(matchesWord('إسرائيل')).to.be.deep.equal(['إسرائيل']);
    });

    it('should not match nonsense', function() {
      expect(matchesWord('!@#$')).to.be.deep.equal(null);
    });
  });

});
