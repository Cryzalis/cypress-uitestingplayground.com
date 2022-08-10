/// <reference types="cypress" />

context('visibility', () => {
    beforeEach(() => {
      cy.visit('visibility')
    }) 
    it('click button and check visibility other button', () => {
      cy.get('#hideButton').click()
      cy.get('#removedButton').should('not.exist')
      cy.get('#zeroWidthButton').should('not.be.visible')
      cy.get('#transparentButton').should('not.be.visible')
      cy.get('#invisibleButton').should('be.hidden')
      cy.get('#notdisplayedButton').should('not.be.visible')
      cy.get('#overlappedButton').should('be.hidden')
    })
})