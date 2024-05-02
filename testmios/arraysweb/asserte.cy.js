const { should, expect } = require("chai");

describe('Assertions', () => {
    beforeEach(() => {
        // Desactivar la detección de errores de origen cruzado en Cypress
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        
        cy.visit('https://demoqa.com/radio-button');
    });

    it('TODAS LAS ASSERT', () => {
        cy.log('VERIFICACIÓN DE LONGITUD');
        cy.get('input[type="radio"]').should('have.length', 3);

        cy.log('class check');
        cy.get('input[type="radio"]').eq(2).should('have.class', 'disabled');

        cy.log('check exist');
        cy.get('.mt-3').should('not.exist');

        cy.log('text exist');
        cy.get('input[type="radio"]').eq(0).click({force:true});
        cy.get('.mt-3').should('have.text', 'You have selected Yes')
        .and('include.text', 'Yes')
        .and('not.contain', 'NO');

        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)');




    });

    it('BDD', () => {
        cy.log('text exist');
        cy.get('input[type="radio"]').eq(1).click({force:true});

        cy.get('.mt-3').should($blood =>{
            expect($blood).to.have.text('You have selected Impressive')
        });
    });
});


