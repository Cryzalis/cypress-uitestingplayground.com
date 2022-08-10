/// <reference types="cypress" />

context('Input ignore DOM event', () => {
    beforeEach(() => {
      cy.visit('textinput')
    }) 
    it('type and check', () => {
        cy.get('#newButtonName').type('Set new name').should('have.value','Set new name')
        cy.get('#updatingButton').click().should('contain', 'Set new name')
    })
})