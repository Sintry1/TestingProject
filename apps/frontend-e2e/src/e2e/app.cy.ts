describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should open the website', () => {
    cy.title().should('equal', 'Omnihost Systems');
  });
});
