/// <reference types="cypress" />

context('Scroll', () => {
    beforeEach(() => {
      cy.visit('scrollbars')
    }) 
    it('Scroll to element', () => {
      cy.get('#hidingButton').should('not.be.visible')
      cy.get('#hidingButton').scrollIntoView().should('be.visible')
      
    })
})