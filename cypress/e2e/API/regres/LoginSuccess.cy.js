///<reference types="cypress" />

describe('Regres API testing', () => {
    it('Login - successful', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
             
        })
        .then((response) => {
            expect(response.status).to.eq(200)   
            expect(response.body).to.have.property('token')  
            expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4')  
        })
    })
})
