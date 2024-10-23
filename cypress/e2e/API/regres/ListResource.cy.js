///<reference types="cypress" />

describe('Regres API testing', () => {
    it('List <resource>', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown',
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})
