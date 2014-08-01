var Browser = require("zombie");
var assert = require("assert");
// var expect = require("expect.js");

// Load the page from localhost
browser = new Browser()

browser.on("error", function(error) {
  console.error(error);
});

browser.visit("http://zombie.labnotes.org/").
  then(function() {
    console.log(browser.query("#content > h1"))
    //expect(browser.query("#content").html()).to.contain("Insanely fast, headless full-stack testing using Node.js");
  });
