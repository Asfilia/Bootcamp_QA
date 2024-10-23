///<reference types="cypress" />

describe('Regres API testing', () => {
    it('Register - successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                email: "eve.holt@reqres.in",  
                password: "pistol"            
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('token')
        })
    })
})
