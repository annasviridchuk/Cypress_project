/// <reference types="Cypress"/>

it('Search by parent button tag', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Arguments')
    cy.contains('Search')
})

it('Search by tag', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Arguments')
    cy.contains('span', 'Search')
})

it('Ignore register', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Arguments')
    cy.contains('SEARCH', {matchCase: false})
})

it.only('Search with get', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('form').contains('Забыли пароль?')
})