/// <reference types="Cypress"/>

beforeEach('setup success response with stub', () => {
    cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?',
    {fixture: 'confirmResponse/success.json'})
})

// a, b, e

it.skip('check success state of payment in the archive | public session', () =>{
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive',
    {fixture: 'archiveResponse/success.json'})

    cy.visit('https://next.privat24.ua?lang=en')
        .get('[data-qa-node="menu"]')
        .eq(2)
        .click()
})

it('check error state of payment in the archive | public session', () =>{
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive',
    {fixture: 'archiveResponse/error.json'})

    cy.visit('https://next.privat24.ua?lang=en')
        .get('[data-qa-node="menu"]')
        .eq(2)
        .click()
})

it.skip('Replenishment of Ukrainian mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type('686979712')
        .get('[data-qa-node="amount"]')
        .type('1')
        .get('[data-qa-node="numberdebitSource"]')
        .type('4552331448138217')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0524')
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')
        .wait(5000)
        .get('data-qa-node="firstNamedebitSource"')
        .type('Test')
        .get('data-qa-node="lastNamedebitSource"')
        .type('Test')
        .wait(5000)
        .get('[data-qa-node="submit"]')
        .click()
        .get('button')
        .contains('Pay')
        .click()
})
