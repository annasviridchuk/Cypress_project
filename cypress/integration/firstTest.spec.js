/// <reference types="Cypress"/>

it('Example sending GET request', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            var i;
            for (i = 0; i < response.body.length; i++) {
                expect(response.body[i]).to.have.property('userId')
            }
            console.log(response);
        })
})

it('Example sending POST request', () => {

    const requestBody = {
        "title": "foo",
        "body": "bar",
        "userId": 1
}

    const headersData = {
        'Content-type': 'application/json; charset=UTF-8'
    }

    cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: requestBody,
        headers: headersData
    })
        .then((response) => {
            expect(response).to.have.property('status').to.equal(201)
            expect(response.body).to.have.property('body').to.equal('bar')
            console.log(response.body);
        })
})

it.only('Example sending GET request with should', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
        .its('body').should('contain', {
            id: 1
        })
})