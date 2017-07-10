var assert = require('assert');

var assert = require('assert');

describe('demo', function() {
  it('basic auth', () => {
    browser.url('http://admin:admin@the-internet.herokuapp.com/basic_auth');
    var text = browser.getText('p');
    assert.equal(text, 'Congratulations! You must have the proper credentials.');
  });
});