/// <reference types="Cypress"/>

it('Test basket data', () => {
    cy.intercept('https://www.wildberries.ru/lk/basket/data?', 
    {fixture: 'wildberries/basketData.json'})

    cy.visit('https://www.wildberries.ru/lk/basket')
        .contains('Смартфон iPhone 11 128GB')
        .should('be.visible')

    cy.wait(2000).get('div.basket-section__basket-list.basket-list').toMatchImageSnapshot()
    
})