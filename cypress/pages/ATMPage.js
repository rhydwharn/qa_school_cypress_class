 class ATMPage {

  login(pin) {

    cy.get('[data-cy="atm-pin-input"]').type(pin)

    cy.get('[data-cy="atm-pin-submit"]').click()

  }

  clickBalanceMenu() {

    cy.contains('Check Balance').click()

  }

  verifyBalancePage() {

    cy.contains('Account Balance')

    cy.contains('$5000.00')

  }

  clickWithdrawMenu() {

    cy.contains('Withdraw Cash').click()

  }

  enterWithdrawAmount(amount) {

    cy.get('input').type(amount)

  }

  submitWithdrawal() {

    cy.contains('Withdraw').click()

  }

  clickDepositMenu() {

    cy.contains('Deposit Cash').click()

  }

  enterDepositAmount(amount) {

    cy.get('input').type(amount)

  }

  submitDeposit() {

    cy.contains('Deposit').click()

  }

  clickMiniStatementMenu() {

    cy.contains('Mini Statement').click()

  }

  verifyMiniStatement() {

    cy.contains('Mini Statement')

  }

  clickChangePinMenu() {

    cy.contains('Change PIN').click()

  }

  changePin(newPin) {

    cy.get('input').eq(0).type(newPin)

    cy.get('input').eq(1).type(newPin)

    cy.contains('Change PIN').click()

  }  
 clickExitMenu() {

  cy.contains('Exit').click()

 }

 verifyLogout() {

  cy.contains('SecureBank ATM')
                                        
}
}

export default new ATMPage()                                                                     