
Feature: ATM Simulator Tests

Background: Reusable Steps
    Given I am on the home page
    Then I login to the application

    Scenario: Check account balance
        When I click on balance button
        Then I should see account balance

    Scenario: Deposit cash
        When I click on deposit button
        Then I should input deposit amount
        Then I should click submit button
        Then I should see transaction successful
    
