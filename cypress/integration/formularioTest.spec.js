/// <reference types="cypress" />
import {criarUsuario,listarUsuarios,excluirUsuario} from './utils_formulario'
beforeEach(() => {
    cy.visit('/');

});

it.only('Deve criar um usuario', () => {
    criarUsuario();
});

it('Deve listar os usuarios',()=>{
    listarUsuarios();
})

it('Deve excluir um usuario da lista',()=>{
    excluirUsuario();
})
