var myStepDefinitionsWrapper = function () {
  this.World = require("../supports/world.js").World; // overwrite default World constructor


  this.Given(/^I open the browser of Chrome & navigate to google$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    this.World.visit('http://www.google.com.hk', function(){
        assert.ok(true);
    });

  });

  this.When(/^I search key word with "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    console.log(keyWord, 11111);
    callback.pending();
  });

  this.Then(/^I should see "([^"]*)" at the top of search detail$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    console.log(keyWord, 2222);
    callback.pending();
  });

};

module.exports = myStepDefinitionsWrapper;
