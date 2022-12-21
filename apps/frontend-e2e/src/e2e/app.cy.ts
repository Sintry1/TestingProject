import { getGreeting } from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    //getGreeting().contains('Welcome frontend');
  });
});

describe('Long term page', () => {
  beforeEach(() => cy.visit('/long-term'));

  it('Does not contain data', () => {
    cy.get('[data-cy=long-term-list-entry]').should('exist')
  })

  it('should open create long term dialog', () => {
    cy.get('[data-cy=long-term-create-dialog]').should('not.exist');
    cy.get('[data-cy=long-term-create-dialog-button]').should('exist');
    cy.get('[data-cy=long-term-create-dialog-button]').click()
    cy.get('[data-cy=long-term-create-dialog]').should('exist');
  })

  it('should open an update dialog when clicking a row', () => {
    cy.get('[data-cy=long-term-update-dialog]').should('not.exist');
    cy.get('[data-cy=long-term-list-entry]').first().click();
    cy.get('[data-cy=long-term-update-dialog]').should('exist');
  })

  describe('Update dialog', () => {
    beforeEach(() => {
      cy.get('[data-cy=long-term-list-entry]').first().click({force:true});
    })

    it('should contain the data', () => {
      cy.get('[data-cy=long-term-update-dialog]').should('exist');
      cy.get('[data-cy=input-field-room]').should('have.value', '925');
    })

    it('should close update dialog when clicking cancel', () => {
      cy.get('[data-cy=long-term-update-dialog]').should('exist');
      cy.get('[data-cy=update-dialog-cancel-button]').click({force:true})
      cy.get('[data-cy=long-term-update-dialog]').should('not.exist');
    })

    it('should be able to change data', () => {
      cy.get('[data-cy=long-term-update-dialog]').should('exist');
      cy.get('[data-cy=input-field-room]').should('have.value', '925');

      cy.get('[data-cy=input-field-room]').clear();
      cy.get('[data-cy=input-field-room]').should('have.value', '');

      cy.get('[data-cy=input-field-room]').type('123');
      cy.get('[data-cy=input-field-room]').should('have.value', '123');
    })
  })
})
