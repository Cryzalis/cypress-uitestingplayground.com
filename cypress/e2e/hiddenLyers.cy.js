/// <reference types="cypress" />

context('Hidden Layers', () => {
    beforeEach(() => {
      cy.visit('hiddenlayers')
    }) 
    it('Click button and check is blue button is visible', () => {
        cy.get('#greenButton').click()
        cy.get('#blueButton').should('be.visible')
    })

})