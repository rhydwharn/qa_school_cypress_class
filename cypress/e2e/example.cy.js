import pageElements from '../fixtures/pageElements.json'

describe('ATM Simulator', () => {

  beforeEach(() => {
    cy.visit('/arena/simulator/atm')
  })

  it('Login Successfully', () => {

    cy.atmLogin()

    cy.contains('Select Transaction')
  })

  it('Check Balance', () => {

    cy.atmLogin()

    cy.getElementByCy(pageElements.atm.menu.balance)
      .click()

    cy.getElementByCy(pageElements.atm.balance.amount)
      .should('contain', '$')
  })

  it('Deposit Cash', () => {

    cy.atmLogin()

    cy.getElementByCy(pageElements.atm.menu.deposit)
      .click()

    cy.getElementByCy(pageElements.atm.deposit.amount)
      .type('500')

    cy.getElementByCy(pageElements.atm.deposit.submit)
      .click()

    cy.contains('Transaction Successful')
  })

  it('Withdraw Cash', () => {

    cy.atmLogin()

    cy.getElementByCy(pageElements.atm.menu.withdraw)
      .click()

    cy.getElementByCy(pageElements.atm.withdrawal.amount)
      .type('50')

    cy.getElementByCy(pageElements.atm.withdrawal.submit)
      .click()

    cy.contains('Transaction Successful')
  })

  it('Mini Statement', () => {

    cy.atmLogin()

    cy.getElementByCy(pageElements.atm.menu.statement)
      .click()

    cy.getElementByCy(pageElements.atm.statement.list)
      .should('exist')
  })

  it('Change PIN', () => {

    cy.atmLogin()

    cy.getElementByCy(pageElements.atm.menu.changePin)
      .click()

    cy.getElementByCy(pageElements.atm.changePin.newPin)
      .type('4321')

    cy.getElementByCy(pageElements.atm.changePin.confirmPin)
      .type('4321')

    cy.getElementByCy(pageElements.atm.changePin.submit)
      .click()

    
  })

  it('Logout', () => {

    cy.atmLogin()

    cy.getElementByCy(pageElements.atm.menu.logout)
      .click()

    cy.contains('Welcome to SecureBank')
  })

})