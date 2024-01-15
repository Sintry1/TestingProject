describe('Check in Page', () => {
  beforeEach(() => {
    cy.login();
    cy.restoreAccessInfoToLocalStorage();
    cy.visit('/checkin');
  });

  it('should contain data', () => {
    cy.get('[data-cy=checkin-list-entry]').should('have.length.above', 0);
  });

  it('should open create checkin dialog', () => {
    cy.get('[data-cy=create-checkin-dialog]').should('not.exist');
    cy.get('[data-cy=create-checkin-dialog-button]').should('exist');
    cy.get('[data-cy=create-checkin-dialog-button]').click();
    cy.get('[data-cy=create-checkin-dialog]').should('exist');
  });

  it('should open an update dialog when clicking a row', () => {
    cy.get('[data-cy=update-checkin-dialog]').should('not.exist');
    cy.get('[data-cy=checkin-list-entry]').first().click();
    cy.get('[data-cy=update-checkin-dialog]').should('exist');
  });

  it('should open the manager access dialog when clicking the csv export button', () => {
    cy.get('[data-cy=manager-access-dialog]').should('not.exist');
    cy.get('[data-cy=export-csv-button]').click();
    cy.get('[data-cy=manager-access-dialog]').should('exist');
  });

  describe('Update dialog', () => {
    beforeEach(() => {
      cy.get('[data-cy=checkin-list-entry]').first().click();
    });

    it('should exist', () => {
      cy.get('[data-cy=update-checkin-dialog]').should('exist');
    });

    it('should close update dialog when clicking cancel', () => {
      cy.get('[data-cy=update-checkin-dialog]').should('exist');
      cy.get('[data-cy=update-dialog-cancel-button]').click({ force: true });
      cy.get('[data-cy=update-checkin-dialog]').should('not.exist');
    });

    it('should be able to change data', () => {
      cy.get('[data-cy=update-checkin-dialog]').should('exist');

      cy.get('[data-cy=input-comments-field]').clear();
      cy.get('[data-cy=input-comments-field]').should('have.value', '');

      cy.get('[data-cy=input-comments-field]').type('Testing in Cypress').type('{enter}');
      cy.get('[data-cy=update-checkin-dialog]').should('not.exist');
      cy.get('[data-cy=checkin-list-entry]').first().click();
      cy.get('[data-cy=update-checkin-dialog]').should('exist');
      cy.get('[data-cy=input-comments-field]').should('have.value', 'Testing in Cypress');
    });

    it('should clear the changes after making them', () => {
      cy.get('[data-cy=update-checkin-dialog]').should('exist');
      cy.get('[data-cy=input-comments-field]').clear();
      cy.get('[data-cy=input-comments-field]').should('have.value', '');
      cy.get('[data-cy=update-dialog-confirm-button]').click({force: true});
      cy.get('[data-cy=update-checkin-dialog]').should('not.exist');
    })
  });

  describe('Create dialog', () => {
    beforeEach(() => {
      cy.get('[data-cy=create-checkin-dialog-button]').click();
    });

    it('should exist', () => {
      cy.get('[data-cy=create-checkin-dialog]').should('exist');
    });

    it('should close create dialog when clicking cancel', () => {
      cy.get('[data-cy=create-checkin-dialog]').should('exist');
      cy.get('[data-cy=create-dialog-cancel-button]').click({ force: true });
      cy.get('[data-cy=create-checkin-dialog]').should('not.exist');
    });

    it('should create a checkin entry', () => {
      cy.get('[data-cy=create-checkin-dialog]').should('exist');
      
    });

  });

});
