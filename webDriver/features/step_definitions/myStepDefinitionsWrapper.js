 var webdriverjs = require('webdriverjs'),
     assert      = require('assert');

module.exports = function(){

    var client    = webdriverjs.remote({
        desiredCapabilities: {
            // You may choose other browsers
            // http://code.google.com/p/selenium/wiki/DesiredCapabilities
            browserName: 'phantomjs'
        },
        // webdriverjs has a lot of output which is generally useless
        // However, if anything goes wrong, remove this to see more details
        logLevel: 'verbose'
    });
    client.init();

    this.Given(/^I open the browser of Chrome & navigate to google$/, function (next) {
      // Write code here that turns the phrase above into concrete actions
      client
            .url("http://www.google.com.hk")
            .call(next);
    });

    this.When(/^I search key word with "([^"]*)"$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^I should see "([^"]*)" at the top of search detail$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    // this.Given(/^I go on the website "([^"]*)"$/, function(url, next) {
    //     client
    //         .url(url)
    //         .call(next);
    // });

    // this.When(/^I use getElementSize\(\) on the element "([^"]*)"$/, function(className, next) {
    //     client
    //         .getElementSize(className, function(err, result) {
    //             assert(err === null, 'command getElementSize() returns with an error');
    //             tmpResult = result;
    //             next();
    //         });
    // });

    // this.When(/^I use getTitle\(\) to get the title of this website$/, function(next) {
    //     client
    //         .getTitle(function(err, title) {
    //             assert(err === null, 'command getTitle() returns with an error');
    //             tmpResult = title;
    //             next();
    //         });
    // });

    // this.When(/^I use getElementCssProperty\(\) to get the "([^"]*)" attribute of an element with "([^"]*)" "([^"]*)"$/, function(attribute, findBy, cssSelector, next) {
    //     client
    //         .getElementCssProperty(findBy, cssSelector, attribute, function(err, result) {
    //             assert(err === null, 'command getElementCssProperty() returns with an error');
    //             tmpResult = result;
    //             next();
    //         });
    // });

    // this.Then(/^I should get a width of "([^"]*)" and height of "([^"]*)"$/, function(width, height, next) {
    //     assert(tmpResult.width  == width , 'width of element is ' + tmpResult.width + ' but should be ' + width);
    //     assert(tmpResult.height == height, 'height of element is ' + tmpResult.width + ' but should be ' + height);
    //     next();
    // });

    // this.Then(/^the command should return "([^"]*)"$/, function(result, next) {
    //     assert(tmpResult == result , ' result of command is "'+ tmpResult + '" but should be "'+ result);
    //     next();
    // });
};
