
describe('ATM Simulator Tests', () => {

    beforeEach(() => {
        cy.visit('/arena/simulator/atm');
    })
    
    it('login with valid credentials', () => {
        cy.atmLogin('0000000000')
        cy.contains('SecureBank ATM')
    });

    it('check account balance', () => {
        cy.atmLogin('1234')
       cy.get('[data-cy="atm-menu-balance"]').click();
       cy.contains('Available Balance')
    });

    it('withdraw cash', () => {
        cy.atmLogin('1234')
        cy.get('[data-cy="atm-menu-withdrawal"]').click()
        cy.get('[data-cy="atm-quick-amount-500"]').click()
        cy.get('[data-cy="atm-withdrawal-submit"]').click()
        cy.get('[data-cy="atm-success-title"]').should('be.visible').should('contain', 'Transaction Successful!')
    })
});
            