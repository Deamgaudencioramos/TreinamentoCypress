/// <reference types="cypress" />
import {criarUsuario,listarUsuarios,excluirUsuario} from './utils_formulario'
beforeEach(() => {
    cy.visit('/');

});

it('Deve criar um usuario', () => {
    cy.visit('/');
});
