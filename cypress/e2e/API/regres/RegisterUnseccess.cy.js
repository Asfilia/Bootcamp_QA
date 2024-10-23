///<reference types="cypress" />

describe('Regres API testing', () => {
    it('Register - Unsuccessful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                email: "sydney@fife"
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
