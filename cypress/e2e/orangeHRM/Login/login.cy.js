///<reference types="cypress" />

describe('Testing Login Fitur', () => {
    it('TC_LOG_001 Login dengan username dan password valid', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        cy.get('h5').contains('Login').should('have.text','Login');
  
        //Data test
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
  
        //Validasi button submit
        cy.get('[type="submit"]').click();
  
        //Expected Result
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
  
    });

    it('TC_LOG_002 Login dengan username invalid dan password valid', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        cy.get('h5').contains('Login').should('have.text','Login');
  
        //Data test
        cy.get('[name="username"]').type('adm');
        cy.get('[name="password"]').type('admin123');
  
        //Validasi button submit
        cy.get('[type="submit"]').click();
  
        //Expected Result
        cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text','Invalid credentials');
    });

    it('TC_LOG_003 Login dengan username valid dan password invalid', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        cy.get('h5').contains('Login').should('have.text','Login');
  
        //Data test
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin');
  
        //Validasi button submit
        cy.get('[type="submit"]').click();
  
        //Expected Result
        cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text','Invalid credentials');
  
    });

    it('TC_LOG_004 Login dengan username (Lowercase) dan password valid', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        cy.get('h5').contains('Login').should('have.text','Login');
  
        //Data test
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin123');
  
        //Validasi button submit
        cy.get('[type="submit"]').click();
  
        //Expected Result
        cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text','Invalid credentials');
  
    });

    it('TC_LOG_005 Login dengan username dan password (Uppercase)', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        cy.get('h5').contains('Login').should('have.text','Login');
  
        //Data test
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('Admin123');
  
        //Validasi button submit
        cy.get('[type="submit"]').click();
  
        //Expected Result
        cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text','Invalid credentials');
  
    });

    it('TC_LOG_006 Login dengan data dari copypaste notepad', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
        //Test Step
        cy.get('h5').contains('Login').should('have.text','Login');
  
        //Data test
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
  
        //Validasi button submit
        cy.get('[type="submit"]').click();
  
        //Expected Result
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
  
    });

    it('TC_LOG_007 Login dengan Empty Username dan Password', () => {
        //Pre-condition
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //Test Step
        cy.get('h5').contains('Login').should('have.text','Login');

        //Data Test
        cy.get('[name="username"]').should('be.empty');
        cy.get('[name="password"]').should('be.empty');

        //Validasi button Submit
        cy.get('[type="submit"]').click();

        //Expected Result
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('contain','Required');
    });

})