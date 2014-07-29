Feature: Example feature
  As a user of cucumber.js
  I want to search ThoughtWorks in google
  So that I can get more details about this company.

  Scenario: Search ThoughtWorks in Web
    Given I open the browser of Chrome & navigate to google
    When I search key word with "ThoughtWorks"
    Then I should see "ThoughtWorks" at the top of search detail
