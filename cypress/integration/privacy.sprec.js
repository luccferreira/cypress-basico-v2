describe('Central de Atendimento ao Cliente TAT', function() { //definindo suite de testes
    beforeEach(function() {
        cy.visit('./src/privacy.html')
    })
    it.only('verifica o título da aplicação', function() { //definindo um caso de teste
        cy.contains('Talking About Test').should('be.visible')
    })
})