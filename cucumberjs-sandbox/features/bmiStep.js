var chai = require('chai');
chai.should();

module.exports = function() {

  this.Given(/^身高是 "([^"]*)"$/, function(height) {
    this.height = +height;
  });

  this.Given(/^體重是 "([^"]*)"$/, function(weight) {
    this.weight = +weight;
  });

  this.When(/^計算兩個值的結果$/, function() {
    this.result = this.weight / (this.height * this.height)
  });

  this.Then(/^結果應該是 "([^"]*)"$/, function(result) {
    this.result.toFixed(1).should.be.equal(result);
  });

};
