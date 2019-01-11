var assert = require("chai").assert;
var checkNumber = require("../lib/check-number");

describe("Check Number", function() {
  it("should return true if the number is valid", function(){
    var number = 79927398713;
    var result = checkNumber(number);
    assert.isTrue(result);
  });
});

describe("Check Number", function() {
  it("should return false if the number is valid", function(){
    var number = 79927398710;
    var result = checkNumber(number);
    assert.isFalse(result);
  });
});