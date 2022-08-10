/// <reference types="cypress" />

context('Dynamic id', () => {
    beforeEach(() => {
      cy.visit('dynamicid')
    })
    it('Click button with dynamic id', () => {
        cy.get('.container button').click()
    })

})