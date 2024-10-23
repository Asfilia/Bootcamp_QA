///<reference types="cypress" />

describe('Regres API testing', () => {
    it('Create', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
        })
        .then((response) => {
            expect(response.status).to.eq(201)   // Verifikasi status code 201
            expect(response.body).to.not.be.null  // Verifikasi bahwa body adalah object tidak kosong
        })
    })
})
