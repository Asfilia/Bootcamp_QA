///<reference types="cypress" />

describe('Regres API testing', () => {
    it('List User', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=1')
        .then((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        })
    })
})