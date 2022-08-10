/// <reference types="cypress" />

context('Class attribute', () => {
    beforeEach(() => {
      cy.visit('classattr')
    }) 
    it('Click button with dynamic id', () => {
        cy.get('.btn-primary ').click()
    })

})