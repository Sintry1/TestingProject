describe('Long term page', () => {
  beforeEach(() => {
    cy.login();
    cy.restoreAccessInfoToLocalStorage();
    cy.visit('/long-term');
  });

  it('should contain data', () => {
    cy.get('[data-cy=long-term-list-entry]').should('have.length.above', 0);
  });

  it('should open create long term dialog', () => {
    cy.get('[data-cy=long-term-create-dialog]').should('not.exist');
    cy.get('[data-cy=long-term-create-dialog-button]').should('exist');
    cy.get('[data-cy=long-term-create-dialog-button]').click();
    cy.get('[data-cy=long-term-create-dialog]').should('exist');
  });

  it('should open an update dialog when clicking a row', () => {
    cy.get('[data-cy=long-term-update-dialog]').should('not.exist');
    cy.get('[data-cy=long-term-list-entry]').first().click();
    cy.get('[data-cy=long-term-update-dialog]').should('exist');
  });

  describe('Update dialog', () => {
    beforeEach(() => {
      cy.get('[data-cy=long-term-list-entry]').first().click();
    });

    it('should exist', () => {
      cy.get('[data-cy=long-term-update-dialog]').should('exist');
    });

    it('should close update dialog when clicking cancel', () => {
      cy.get('[data-cy=long-term-update-dialog]').should('exist');
      cy.get('[data-cy=update-dialog-cancel-button]').click({ force: true });
      cy.get('[data-cy=long-term-update-dialog]').should('not.exist');
    });

    it('should be able to change data', () => {
      cy.get('[data-cy=long-term-update-dialog]').should('exist');

      cy.get('[data-cy=input-field-room]').clear();
      cy.get('[data-cy=input-field-room]').should('have.value', '');

      cy.get('[data-cy=input-field-room]').type('101').type('{enter}');
    });
  });
});
