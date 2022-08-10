/// <reference types="cypress" />

context('Dynamic Table', () => {
    beforeEach(() => {
      cy.visit('dynamictable')
    }) 
    it('find element', () => {
      let text1
      cy.get('.bg-warning').invoke('text').then((text)=>{
        text1 = text.slice(12)
      })
      cy.get('div[role=row]').contains('Chrome').parent().contains('%').invoke('text').then((text)=>{
        expect(text1).equal(text) 
      })
     
    })
})