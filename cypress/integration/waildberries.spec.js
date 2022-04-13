/// <reference types="Cypress"/>

it('Test basket data', () => {
    cy.intercept('https://www.wildberries.ru/lk/basket/data?', 
    {fixture: 'waildberries/basketData.json'})

    cy.visit('https://www.wildberries.ru/lk/basket')
        .contains('Смартфон iPhone 11 128GB (новая комплектация)')
        .should('be.visible')
})