Cypress.Commands.add('login', () => {
    cy.get('.login-form > .wrap-input:nth-child(2) > .input').type('email@test.com');
    cy.get('.login-form > .wrap-input:nth-child(3) > .input').click();
    cy.get('.login-form > .wrap-input:nth-child(3) > .input').type('test123');
    cy.get('.login-form > .container-login-form-btn > .login-form-btn').click();
  })