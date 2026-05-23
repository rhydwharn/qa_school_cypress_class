
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import pageElements from '../../fixtures/pageElements.json'

// path

Given(/^I am on the home page$/, () => {
    cy.visit('/arena/simulator/atm');
});


Then(/^I login to the application$/, () => {
	cy.atmLogin()
});


When(/^I click on doc link$/, () => {
    return true;
});

Then(/^I should see cypress doc$/, () => {
    return true;
});

When(/^I click on balance button$/, () => {
	 cy.getElementByCy(pageElements.atm.menu.balance)
          .click()
});


Then(/^I should see account balance$/, () => {
	cy.getElementByCy(pageElements.atm.balance.amount)
      .should('contain', '$')
});


When(/^I click on deposit button$/, () => {
    cy.getElementByCy(pageElements.atm.menu.deposit)
      .click()
});

Then(/^I should input deposit amount$/, () => {
    cy.getElementByCy(pageElements.atm.deposit.amount)
      .type('500')
});

Then(/^I should click submit button$/, () => {
    cy.getElementByCy(pageElements.atm.deposit.submit)
      .click()
});

Then(/^I should see transaction successful$/, () => {
    cy.contains('Transaction Successful')
});

