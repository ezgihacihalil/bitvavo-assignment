// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('test_name', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000/')
  });

  it("should redirect to login page when there is no login account", function () {
    cy.url().should('include', '/login')
  });

  it("should show error messages with empty fields", function () {
    cy.get('.login-form .login-form-btn').click();

    cy.get('.alert-validate').eq(0).should("have.text", "Username is required");
    cy.get('.alert-validate').eq(1).should("have.text", "Password is required");

    cy.get('.login-form > .wrap-input:nth-child(2) > .input').type('ezgi.hacihalil@gmail.com');
    cy.get('.alert-validate').should("have.length", "1");
  });

  it("should show error message when email and password is wrong", function () {
    cy.get('.login-form > .wrap-input:nth-child(2) > .input').click();
    cy.get('.login-form > .wrap-input:nth-child(2) > .input').type('ezgi.hacihalil@gmail.com');
    cy.get('.login-form > .wrap-input:nth-child(3) > .input').click();
    cy.get('.login-form > .wrap-input:nth-child(3) > .input').type('password');

    cy.get('.login-form .login-form-btn').click();

    cy.get('.login-form > .alert-validate').should("have.text", "Your credentials are wrong!");;
  });

  it("should login with correct credentials", function () {
    cy.login();

    cy.url().should('include', '/')

    cy.get('.ag-center-cols-container > .ag-row-even:nth-child(1)', { timeout: 10000 }).should('be.visible');

    // there is an issue about rendering the cellRenderer values, I couldn't make it click to the View button so I couldn't do ShipDetail tests.

    // cy.get('.ag-row-level-0 .ag-row-first > .ag-cell > div > button').click();

    // cy.get('div.ship').should('have.length', 1);
  });

  it('should logout correctly', function () {
    cy.login();

    cy.get('.ships-page > .header > button').click();

    cy.url().should('eq', 'http://localhost:3000/login');
  })

})
