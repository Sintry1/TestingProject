describe('Authentication logic', () => {
  beforeEach(() => cy.visit('/'));

  describe('When the user is not logged in', () => {
    it('Should open login page automatically', () => {
      cy.url().should('contain', 'login');
    });
    it('Should not show a navbar, sidebar, and a logout button', () => {
      cy.get('[data-cy=navbar]').should('not.exist');
      cy.get('[data-cy=sidebar]').should('not.exist');
      cy.get('[data-cy=logout-btn]').should('not.exist');
    });
    it('Should show a login form', () => {});
    it('Should log in the user when the form is filled out with correct information ', () => {});
    it('Should not log in the user when the form is filled out with incorrect information ', () => {});
  });

  describe('When the user is logged in', () => {
    it('Should redirect away from the login page', () => {});
    it('Should show a navbar, sidebar, and a logout button', () => {});
    it('Should show login page again when logout button is pressed', () => {});
    describe('Should show the access prompt when', () => {
      it('The add document button is pressed', () => {});
      it('The edit document button is pressed', () => {});
    });
  });
});
