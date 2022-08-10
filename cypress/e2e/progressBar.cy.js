/// <reference types="cypress" />

context('Progress Bar', () => {
    beforeEach(() => {
      cy.visit('progressbar')
    }) 
    it('Click start and wait when text has 45%', () => {
      cy.get('#startButton').trigger('mousemove').trigger('mousedown').trigger('mouseup')
      cy.get('#progressBar').contains('45', { timeout: 16000 }).then(()=>{
        cy.get('#stopButton').click()
      })
      cy.get('#progressBar').should('have.text','45%')
     
    })
})