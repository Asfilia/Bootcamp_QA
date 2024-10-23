///<reference types="cypress" />

describe('Regres API testing', () => {
    it('Single User', () => {
        cy.request('GET', 'https://reqres.in/api/users/2')
        .then((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).to.not.be.null
        })
    })
})