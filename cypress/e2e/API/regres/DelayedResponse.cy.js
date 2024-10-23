///<reference types="cypress" />

describe('Regres API testing', () => {
    it('Delayed response', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?delay=3',
        })
        .then((response) => {
            expect(response.status).to.eq(200)   // Verifikasi status code 200
            expect(response.body).to.not.be.null  // Verifikasi bahwa body adalah tidak kosong
        })
    })
})
