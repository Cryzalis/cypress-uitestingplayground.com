/// <reference types="cypress" />

context('Non-Breaking Space', () => {
    beforeEach(() => {
      cy.visit('nbsp')
    }) 
    it('find text with nbsp', () => {
      cy.get('.container button').contains('My Button').should('contain','Button').and('contain','My')
     
    })
})