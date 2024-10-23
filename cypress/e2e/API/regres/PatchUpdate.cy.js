///<reference types="cypress" />

describe('Regres API testing', () => {
    it('PATCH Update', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})
