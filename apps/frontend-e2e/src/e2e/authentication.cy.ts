const validUser = {
  email: 'user@example.com',
  password: 'abcDEF123',
  managerPassword: 'abcDEF123',
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
    // Perform a single call to get the access info
    before(() => cy.login());
    // Reuse the access info from the login call
    beforeEach(() => {
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

    describe('Should show the manager access prompt when', () => {
      it('The add document button is pressed', () => {
        cy.visit('/documents');
        cy.get('[data-cy=documents-add-btn]').click();
        cy.get('[data-cy=manager-access-dialog]').should('exist');
      });

      it('The edit document button is pressed', () => {
        cy.visit('/documents');
        cy.get('[data-cy=document-edit-btn]').first().click();
        cy.get('[data-cy=manager-access-dialog]').should('exist');
      });
    });

    describe('When the manager access prompt is filled out', () => {
      it('Should show the target dialog when the credentials are valid', () => {
        cy.visit('/documents');
        cy.get('[data-cy=documents-add-btn]').click();
        cy.get('[data-cy=manager-access-dialog]').should('exist');
        cy.get('[data-cy=manager-access-password-input]').type(validUser.managerPassword);
        cy.get('[data-cy=manager-access-continue-btn]').click();
        cy.get('[data-cy=manager-access-dialog]').should('not.exist');
        cy.get('[data-cy=create-document-dialog]').should('exist');
      });

      it('Should not show the target dialog when the credentials are invalid and keep the prompt open', () => {
        cy.visit('/documents');
        cy.get('[data-cy=documents-add-btn]').click();
        cy.get('[data-cy=manager-access-dialog]').should('exist');
        cy.get('[data-cy=manager-access-password-input]').type(validUser.managerPassword + 1234);
        cy.get('[data-cy=manager-access-continue-btn]').click();
        cy.get('[data-cy=manager-access-dialog]').should('exist');
        cy.get('[data-cy=create-document-dialog]').should('not.exist');
      });
    });
  });
});
