/// <reference types="cypress" />

describe('My First Test', () => {
    it('Netflix - Gets, types and asserts', () => {
      cy.visit('https://www.netflix.com/pk/')
      
      cy.contains('Sign In').click() 
      // Should be on a new URL which includes '/login'
      cy.url().should('include', '/login')
  
      cy.get('.nfEmailPhoneControls .input_id').click()
      
      // Get an input, type into it and verify that the value has been updated
      
      cy.get('#id_userLoginId').scrollIntoView()
      .should('be.visible')
      .click()
      .type('Hassaan')
      .should('have.value', 'Hassaan')

    })
  })