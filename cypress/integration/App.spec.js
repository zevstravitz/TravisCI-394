/* global cy */

describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with Fall CS courses', () => {
    cy.visit ('/');
    cy.get('[data-cy=course]').should('contain', 'Fall CS');
  });
  
  it('shows Winter courses when Winter is selected', () => {
    cy.visit ('/');
    cy.get('[data-cy=Winter]').click();
    cy.get('[data-cy=course]').should('contain' ,'Winter CS');
  });

  it('Winter is not green before being clicked', () => {
    cy.visit ('/');
    cy.get('[data-cy=Winter]').not('have.class', 'is-success');
  })

  it('changes color when clicked', () => {
    cy.visit ('/');
    cy.get('[data-cy=Winter]').click();
    cy.get('[data-cy=Winter]').should('have.class', 'is-success');
  })
});

