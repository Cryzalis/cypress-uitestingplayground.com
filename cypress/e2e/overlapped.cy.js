/// <reference types="cypress" />

context('Overlapped Element', () => {
    beforeEach(() => {
      cy.visit('overlapped')
    }) 
    it('type to overlapped input', () => {
      cy.get('#id').type('123')
      cy.get('#name').type('Some name')
      cy.get('#subject').type('Some subject',{force: true})
      cy.get('#subject').should('have.value','Some subject')
    })
})