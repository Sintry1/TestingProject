describe('Check in Page', () => {
  beforeEach(() => {
    cy.login();
    cy.restoreAccessInfoToLocalStorage();
    cy.visit('/checkin');
    cy.intercept('GET', 'http://localhost:3333/luggages/checkin', { fixture: 'checkin.json' }); // Mock the GET request to /api/checkin
    cy.intercept('POST', 'http://localhost:3333/luggages', (req) => { // Mock the POST request to /api/checkin
      req.reply({
        statusCode: 200,
        body: {
          message: 'Checkin created successfully',
          luggage: {
            luggageType: "checkin",
            room: "101",
            name: "John Doe",
            bags: "2",
            comments: "No special instructions",
            arrivalTime: "2024-10-01T10:00:00Z",
            tagNr: "123456",
            location: "LR",
            bbDown: "AS",
            bbLr: "AS",
            bbOut: null,
            dateNeeded: null,
            completedAt: null
          },
        },
      });
    });
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
    });

  });

  describe('Updated checkin entry', () =>{
    it('should correctly update the entry', () => {
      cy.get('[data-cy=update-checkin-dialog]').should('not.exist');
      cy.get('[data-cy=checkin-list-entry]').first().click();
      cy.get('[data-cy=update-checkin-dialog]').should('exist');
      cy.get('[data-cy=input-comments-field]').should('have.value', 'Testing in Cypress');
      cy.get('[data-cy=update-dialog-cancel-button]').click();
      cy.get('[data-cy=update-checkin-dialog]').should('not.exist');
    });
  })

});
