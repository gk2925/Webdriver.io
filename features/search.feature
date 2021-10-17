Feature: feature1

Scenario: To identify the popper text
  Given User is at the home page of application
  When User clicks on Letsgo Button without entering search text
  Then  popper message is being displayed

Scenario: Serach based on current location
  Given User is at the home page of application
  Then  User enters city as current location and click on Lets go button
  Then Appropriate search results are displayed




