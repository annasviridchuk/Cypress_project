/// <reference types="Cypress"/>

it('type', () => {
    cy.visit('http://www.facebook.com/')
        .get('#email')
        .type('anna')
})

it('focus', () => {
    cy.visit('http://www.facebook.com/')
        .get('#pass')
        .focus()
})

it('blur', () => {
    cy.visit('http://www.facebook.com/')
        .get('#pass')
        .focus()
        .blur()
})

it('clear', () => {
    cy.visit('http://www.facebook.com/')
        .get('#pass')
        .type('123')
        .wait(2000)
        .clear()
})

it('submit', () => {
    cy.visit('http://www.facebook.com/')
        .get('form[method="post"]')
        .submit()
})

it('click', () => {
    cy.visit('http://www.facebook.com/')
        .get('a[data-testid="open-registration-form-button"]')
        .click()
})

it('right click', () => {
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .rightclick()
})

it('double click', () => {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
        .contains('My Card')
        .dblclick()
})

it('check', () => {
    cy.visit('http://www.facebook.com/')
        .get('a[data-testid="open-registration-form-button"]')
        .click()
        .get('input[value="2"]')
        .check()
})

it('uncheck', () => {
    cy.visit('https://belarusbank.by/ru/fizicheskim_licam/33359/36142')
        .get('span.btn.btn--light.switch__btn')
        .find('span')
        .contains('Запись на обслуживание')
        .click()
        .get('#confirm')
        .check({force: true})
        .uncheck({force: true})
})

it('select', () => {
    cy.visit('http://www.facebook.com/')
        .get('a[data-testid="open-registration-form-button"]')
        .click()
        .get('#day')
        .select('8')
        .get('#month')
        .select('июн')
        .get('#year')
        .select('1995')
})

it('scroll into view', () => {
    cy.visit('https://docs.cypress.io/api/commands/and')
        .get('h2#See-also')
        .scrollIntoView()
})

it('scroll to', () => {
    cy.visit('https://docs.cypress.io/api/commands/and')
        .scrollTo(0, 500)
})

it.only('trigger', () => {
    cy.visit('https://www.belinvestbank.by/individual')
        .get('a#tab-1')
        .trigger('mouseover')
})