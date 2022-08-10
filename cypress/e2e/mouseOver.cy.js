/// <reference types="cypress" />

context('Mouse Over', () => {
    beforeEach(() => {
      cy.visit('mouseover')
    }) 
    it('mouse over and click', () => {
      cy.get('a').contains('Click me').trigger('mousemove').trigger('mousedown').trigger('mouseup')
    })
})