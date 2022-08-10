/// <reference types="cypress" />

context('Verify Text', () => {
    beforeEach(() => {
      cy.visit('verifytext')
    }) 
    it('find not normalize text', () => {
      cy.xpath("//span[normalize-space(.)='Welcome UserName!']").should('contain', 'UserName')
     
    })
})