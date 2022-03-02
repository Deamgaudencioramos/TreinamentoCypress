const SELETECTOR = require('./elements').Elements
export function criarUsuario(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get(SELETECTOR.btn_novoUsuario).click();
    cy.get('#user_name').type('Deam')
    cy.get('#user_lastname').type('Gaudencio')
    cy.get('#user_email').type('teste@teste.com.br')
    cy.get('#user_address').type('teste,123')
    cy.get('#user_university').type('Unipe')
    cy.get('#user_profile').type('analista de test')
    cy.get('#user_gender').type('Masculino')
    cy.get('#user_age').type('20')
    cy.get('input[value="Criar"]').click()
    cy.get('p[id="notice"]').contains('Usuário Criado com sucesso')
}

export function listarUsuarios(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get('a[href="/users"]').click()
    cy.get('h5[class="center"]:Contains("Lista de Usuários")').should('be.visible')
}

export function excluirUsuario(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get('a[href="/users"]').click()
    cy.get('td a[data-confirm="Vocee está certo disso?"]').eq(0).click()
    cy.get('p[id="notice"]:Contains("Seu Usuário foi removido com sucesso!")').should('be.visible')
}