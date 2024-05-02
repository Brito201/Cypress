describe('location', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com')
    });
    

    it('titulo', () => {
        cy.title().should('eq', 'STORE')
    });


    it('url https://www.demoblaze.com', () => {
        cy.url().should('eq', 'https://www.demoblaze.com/')
    });



    it('protocolo https', () => {
        cy.location('protocol').should('contains', 'https')
    });

    it('hostname  www.saucedemo.com', () => {
        cy.location('hostname').should('eq', 'www.demoblaze.com')
    });

    it('login', () => {
        cy.get('[id="login2"]').click();
        cy.get('#loginusername').type('pirulito');
        cy.get('[id="loginpassword"]').type('12345');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();      
    });

    
});