/// <reference types="Cypress"/>

// describe("Mobile phone replenishment", () => {
//     context("Replenishment less than the allowed amount", () => {
//         it("Show error: Minimum amount of the replenishment 1 UAH", () => {});
//     });
// });

// it('By id', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('#email')
// })

// it('By Class', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get')
//     cy.get('.DocSearch.DocSearch-Button')
// })

// it('By Tag', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get')
//     cy.get('nav')
// })

// it('By Tag Value', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('[name="pass"]')
// })

// it('By Different Tags Value', () => {
//     cy.visit('https://facebook.com/')
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// })

// it('By Different Types', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get')
//     cy.get('button[aria-label="Search"]')
// })

// it('By Different Types', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get')
//     cy.get('*[class^="DocSearch"]')
// })

it.only('Using get with find and eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/get')
    cy.get('ul.scrollactive-nav').find('li').eq(0).find('a')
})