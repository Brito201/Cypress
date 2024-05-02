describe('La retry ability', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8888/#/')

        cy.get('.new-todo')
        .type('todo-a{enter}')
        .type('todo-b {enter}')
    });
    
    it('Debe crear 2 items', () => {
        cy.get('.todo-list li')
        .should('have.length', 2)
    });
});