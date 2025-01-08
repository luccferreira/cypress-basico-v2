Cypress._.times(3, () => {
    it('verifica o título da aplicação', function() { //definindo um caso de teste
        cy.visit('./src/privacy.html')
        cy.contains('h1', 'CAC TAT - Política de privacidade').should('be.visible')
        cy.contains('p', 'Talking About Testing').should('be.visible')
    })
})