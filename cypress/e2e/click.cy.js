/// <reference types="cypress" />

context('Button ignore DOM click event', () => {
    beforeEach(() => {
      cy.visit('click')
    }) 
    it('Click button ', () => {
        cy.get('#badButton').click().should('have.class','btn-success')
    })
})