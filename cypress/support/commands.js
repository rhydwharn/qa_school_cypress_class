  
// ***********************************************
// Visit https://on.cypress.io/custom-commands to
// learn more about custom commands.
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('atmLogin', () => {
    cy.getElementByCy('atm-pin-input').type('1234')
    cy.getElementByCy('atm-pin-submit').click()
})

Cypress.Commands.add('getElementByCy', (selector) => {
    return cy.get(`[data-cy="${selector}"]`);
})

Cypress.Commands.add('getElements', (selector) => {
    return cy.get(`${selector}`);
})

Cypress.Commands.add('clickElement', (selector) => {
    return cy.get(`${selector}`).click();
})