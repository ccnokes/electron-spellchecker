require('./support');

const path = require('path');
const rimraf = require('rimraf');
const {next, TestScheduler} = require('@kwonoj/rxjs-testscheduler-compat');
const SpellCheckHandler = require('../lib/spell-check-handler').default;
const d = require('debug')('electron-spellchecker-test:spell-check-handler');

describe('The Spell Check Handler Class', function() {
  beforeEach(function() {
    this.fixture = new SpellCheckHandler();
    this.fixture.init();
  });

  describe('it should work', function() {
    it('should construct', function() {
      expect(this.fixture).to.be.ok;
    });

    it('should detect misspellings', function() {
      expect(this.fixture.isMisspelled('testzz')).to.be.equal(true);
      expect(this.fixture.isMisspelled('test')).to.be.equal(false);
    });
  });
});
