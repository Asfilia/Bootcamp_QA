///<reference types="cypress" />

describe('Regres API testing', () => {
    it('Single user not found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.deep.eq({})
        })
    })
})
