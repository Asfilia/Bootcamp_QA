///<reference types="cypress" />

describe('Regres API testing', () => {
    it('Delete', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
        })
        .then((response) => {
            expect(response.status).to.eq(204)   // Verifikasi status code 204
            expect(response.body).to.not.be.null  // Verifikasi bahwa body adalah object tidak kosong
        })
    })
})
