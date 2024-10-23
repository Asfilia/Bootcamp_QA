/// <reference types = "cypress" />


import loginPage from "../../pom/login/login.cy";

///<reference types="cypress"/>

describe('Testing Login Fitur', () => {
    it('TC_LOG_001 Login dengan username dan password valid', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        loginPage.verifyLoginPage().should('have.text','Login');
  
        //Data test
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
  
        //Validasi button submit
        cy.intercept('GET', '**/action-summary').as('actionSummary');
        loginPage.buttonSubmit().click();
        cy.wait('@actionSummary').then((intercept ) => {
            expect(intercept.response.statusCode).to.equal(200);
        });

  
        //Expected Result
        loginPage.dashboardPage().should('have.text','Dashboard');
  
    });

    it('TC_LOG_002 Login dengan username invalid dan password valid', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        loginPage.verifyLoginPage().should('have.text','Login');
  
        //Data test
        loginPage.inputUsername().type('adm');
        loginPage.inputPassword().type('admin123');
  
        //Validasi button submit
        cy.intercept('GET', '**/messages').as('actionSummary');
        loginPage.buttonSubmit().click();
        cy.wait('@actionSummary').then((intercept ) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
  
        //Expected Result
        loginPage.invalidCredentials().should('have.text','Invalid credentials');
    });

    it('TC_LOG_003 Login dengan username valid dan password invalid', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        loginPage.verifyLoginPage().should('have.text','Login');
  
        //Data test
        loginPage.inputUsername().type('admin');
        loginPage.inputPassword().type('admin');
  
        //Validasi button submit
        cy.intercept('GET', '**/messages').as('actionSummary');
        loginPage.buttonSubmit().click();
        cy.wait('@actionSummary').then((intercept ) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
  
        //Expected Result
        loginPage.invalidCredentials().should('have.text','Invalid credentials');
  
    });

    it('TC_LOG_004 Login dengan username (Lowercase) dan password valid', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        loginPage.verifyLoginPage().should('have.text','Login');
  
        //Data test
        loginPage.inputUsername().type('admin');
        loginPage.inputPassword().type('admin123');
  
        //Validasi button submit
        cy.intercept('GET', '**/messages').as('actionSummary');
        loginPage.buttonSubmit().click();
        cy.wait('@actionSummary').then((intercept ) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
  
        //Expected Result
        loginPage.invalidCredentials().should('have.text','Invalid credentials');
  
    });

    it('TC_LOG_005 Login dengan username dan password (Uppercase)', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        loginPage.verifyLoginPage().should('have.text','Login');
  
        //Data test
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('Admin123');
  
        //Validasi button submit
        cy.intercept('GET', '**/messages').as('actionSummary');
        loginPage.buttonSubmit().click();
        cy.wait('@actionSummary').then((intercept ) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
  
        //Expected Result
        loginPage.invalidCredentials().should('have.text','Invalid credentials');
  
    });

    it('TC_LOG_006 Login dengan data dari copypaste notepad', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        loginPage.verifyLoginPage().should('have.text','Login');
  
        //Data test
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
  
        //Validasi button submit
        cy.intercept('GET', '**/action-summary').as('actionSummary');
        loginPage.buttonSubmit().click();
        cy.wait('@actionSummary').then((intercept ) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
  
        //Expected Result
        loginPage.dashboardPage().should('have.text','Dashboard');
  
    });

    it('TC_LOG_007 Login dengan Empty Username dan Password', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //Test Step
        loginPage.verifyLoginPage().should('have.text','Login');

        //Data Test
        loginPage.inputUsername().should('be.empty');
        loginPage.inputPassword().should('be.empty');

        //Validasi button Submit
        loginPage.buttonSubmit().click();

        //Expected Result
        loginPage.required().should('contain','Required');
    });

})