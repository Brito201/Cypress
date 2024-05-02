let username = "pirulito";
let password = 12345;

describe('localizadores', () => {
   beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html") 
   });
   

   it('metodo get', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type(username);
    cy.get('#loginpassword').type(password);
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
   });

   it('metodo filter', () => {
        cy.get('input').filter('[type="text"]').type(username);
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('input').filter('[type="button"]').click();
   });
   
});