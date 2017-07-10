var assert = require('assert');
var path = require('path');

describe('test', function() {
  it('上傳檔案', () => {
    browser.url('http://the-internet.herokuapp.com/upload');
    var toUpload = path.join(__dirname, '..', '..', 'package.json');
    console.log(toUpload);
    browser.chooseFile('#file-upload', toUpload);
    browser.getValue('#file-upload');
    browser.click('#file-submit');
    var text = browser.getText('#uploaded-files');
    assert.equal(text, 'package.json');
  });
});