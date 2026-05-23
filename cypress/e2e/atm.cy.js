 import ATMPage from '../pages/ATMPage'

let atmData

describe('ATM Simulator Tests', () => {

  beforeEach(() => {

    cy.fixture('atmData').then((data) => {
      atmData = data
    })

    cy.visit('/arena/simulator/atm')
  })

  it('should login successfully', () => {

    ATMPage.login(atmData.validPin)

    cy.contains('Select Transaction')

  })

  it('should check account balance', () => {

    ATMPage.login(atmData.validPin)

    ATMPage.clickBalanceMenu()

    ATMPage.verifyBalancePage()

  })

  it('should withdraw $500 successfully', () => {

    ATMPage.login(atmData.validPin)

    ATMPage.clickWithdrawMenu()

    ATMPage.enterWithdrawAmount(atmData.withdrawAmount)

    ATMPage.submitWithdrawal()

  })

  it('should deposit money successfully', () => {

    ATMPage.login(atmData.validPin)

    ATMPage.clickDepositMenu()

    ATMPage.enterDepositAmount(atmData.depositAmount)

    ATMPage.submitDeposit()

  })

  it('should view mini statement successfully', () => {

    ATMPage.login(atmData.validPin)

    ATMPage.clickMiniStatementMenu()

    ATMPage.verifyMiniStatement()

  })

  it('should change pin successfully', () => {

    ATMPage.login(atmData.validPin)

    ATMPage.clickChangePinMenu()

    ATMPage.changePin(atmData.newPin)

  })    
   it('should exit successfully', () => {

    ATMPage.login(atmData.validPin)

    ATMPage.clickExitMenu()

    ATMPage.verifyLogout()                 

  })
})                                                                                                                                                                                                                                   