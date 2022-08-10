/// <reference types="cypress" />

context('AJAX data', () => {
    beforeEach(() => {
      cy.visit('ajax')
    }) 
    it('Click button and wait when data load', () => {
        cy.intercept('GET', 'ajaxdata').as('ajax')
        cy.get('#ajaxButton').click()
        cy.get('#content p').should('be.visible').and('contain','Data loaded with')
    })
})