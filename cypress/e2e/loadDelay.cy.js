/// <reference types="cypress" />

context('Load delay', () => {
    beforeEach(() => {
      cy.visit('')
    }) 
    it('Click button and check is blue button is visible', () => {
        cy.get('a').contains('Load Delay').click()
        cy.get('.btn-primary').click()
    })
})