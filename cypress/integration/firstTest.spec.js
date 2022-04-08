/// <reference types="Cypress"/>

it('SHOULD', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('input[name="email"]')
        .type('anna.sviridchuk@gmail.com')
        .should('have.value', 'anna.sviridchuk@gmail.com')
        .and('be.visible')
})

it('EXPECT', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('input[name="email"]')
        .type('anna.sviridchuk@gmail.com').then(input => {
            expect(input).to.have.value('anna.sviridchuk@gmail.com')
        })
})

it('SHOULD CHECKED', () => {
    cy.visit('https://belarusbank.by/ru/fizicheskim_licam/valuta/kursy-valyut')
    cy.get('span.circle-w-arrow.group-separator__arrow').click()
    cy.get('input[name="USD"]')
        .should('be.checked')
})

it('SHOULD VISIBLE', () => {
    cy.viewport(1800, 700)
    cy.visit('https://www.vtb.by/')
    cy.get('a:contains("Частным лицам")').eq(3)
        .trigger('mouseover')
        .get('a').contains('Кредиты')
        .should('be.visible')
})

it('check is correct attr in button', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('button').contains('Вход')
        .should('have.attr', 'type').and('match', /submit/)
})

it.only('check is correct url', () => {
    cy.visit('http://www.facebook.com/')
    cy.url().should('eq','https://www.facebook.com/')
})