///<reference types="cypress" />

describe('Regres API testing', () => {
    it('Login - Unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                "email": "peter@klaven"
            },
            failOnStatusCode: false 
        })
        .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error')
            expect(response.body.error).to.eq('Missing password')
        })
    })
})
