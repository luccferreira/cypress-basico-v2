/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() { //definindo suite de testes
    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() { //definindo um caso de teste
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() { //definindo um caso de teste
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Ferreira')
        cy.get('#email').type('elucasferreira@gmail.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })
  })