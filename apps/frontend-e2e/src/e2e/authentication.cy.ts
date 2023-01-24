const validUser = {
  email: 'user@example.com',
  password: 'abcDEF123',
};

describe('Authentication logic', () => {
  beforeEach(() => cy.visit('/'));

  describe('When the user is not logged in', () => {
    beforeEach(() => {
      // Make sure the user is logged out
      localStorage.removeItem('accessInfo');
      localStorage.removeItem('managerInfo');
    });

    it('Should open login page automatically', () => {
      cy.url().should('contain', 'login');
    });

    it('Should not show a navbar, sidebar, and a logout button', () => {
      cy.get('[data-cy=navbar]').should('not.exist');
      cy.get('[data-cy=sidebar]').should('not.exist');
      cy.get('[data-cy=logout-btn]').should('not.exist');
    });

    it('Should show a login form', () => {
      cy.get('[data-cy=login-email-input]').should('exist');
      cy.get('[data-cy=login-password-input]').should('exist');
      cy.get('[data-cy=login-submit-btn]').should('exist');
    });

    it('Should log in the user when the form is filled out with correct information ', () => {
      cy.get('[data-cy=login-email-input]').type(validUser.email);
      cy.get('[data-cy=login-password-input]').type(validUser.password);
      cy.get('[data-cy=login-submit-btn]').click();
      cy.url().should('not.contain', 'login');
      cy.get('[data-cy=logout-btn]').should('exist');
    });

    it('Should not log in the user when the form is filled out with incorrect information ', () => {
      cy.get('[data-cy=login-email-input]').type(validUser.email);
      cy.get('[data-cy=login-password-input]').type(validUser.password + '1234');
      cy.get('[data-cy=login-submit-btn]').click();
      cy.url().should('contain', 'login');
      cy.get('[data-cy=logout-btn]').should('not.exist');
    });
  });

  describe('When the user is logged in', () => {
    before(() => {
      // perform a single call to get the access info
      cy.login();
    });
    beforeEach(() => {
      // Reuse the access info from the login call
      cy.restoreAccessInfoToLocalStorage();
      cy.visit('/');
    });

    it('Should redirect away from the login page', () => {
      cy.url().should('not.contain', 'login');
    });

    it('Should show a navbar, sidebar, and a logout button', () => {
      cy.get('[data-cy=navbar]').should('exist');
      cy.get('[data-cy=sidebar]').should('exist');
      cy.get('[data-cy=logout-btn]').should('exist');
    });

    it('Should show login page again when logout button is pressed', () => {
      // Press the logout button
      cy.get('[data-cy=logout-btn]').click();

      // verify that the user is back on the login page
      cy.url().should('contain', 'login');
      cy.get('[data-cy=navbar]').should('not.exist');
      cy.get('[data-cy=sidebar]').should('not.exist');
      cy.get('[data-cy=logout-btn]').should('not.exist');

      // verify that the user can't navigate back to the authenticated pages
      cy.visit('/dashboard');
      cy.url().should('contain', 'login');
    });

    describe('Should show the access prompt when', () => {
      it('The add document button is pressed', () => {});
      it('The edit document button is pressed', () => {});
    });
  });
});
