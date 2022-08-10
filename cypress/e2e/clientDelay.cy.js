/// <reference types="cypress" />

context('Client delay', () => {
    beforeEach(() => {
      cy.visit('clientdelay')
    }) 
    it('Click button and wait when data calculated', () => {
        cy.get('#ajaxButton').click()
        cy.get('#content p', { timeout: 16000 }).should('be.visible').and('contain','Data calculated on')
    })
})