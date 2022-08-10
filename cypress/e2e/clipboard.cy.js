/// <reference types="cypress" />

context('Shadow DOM', () => {
    beforeEach(() => {
      cy.visit('shadowdom')
    }) 
    it(' test to compare the value from the clipboard with the value of the input field', () => {
      cy.xpath('//h3').should('contain','Shadow')
      cy.xpath('//h4').first().should('contain','Scenario')
      cy.get('guid-generator').shadow().find('#buttonGenerate').click()
      cy.get('guid-generator').shadow().find('#buttonCopy').click()
      let text
      cy.get('guid-generator').shadow().find('#editField').invoke('val')
      .then(sometext => {
        cy.window().its('navigator.clipboard').invoke('readText').should('equal',sometext)
      });
      

    })
})