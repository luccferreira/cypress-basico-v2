Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Ferreira')
    cy.get('#email').type('elucasferreira@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})
