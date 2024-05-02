describe('fixture', () => {
    let credentials;
 
    beforeEach(() => {
       cy.visit('https://www.demoblaze.com');
 
       cy.fixture('sauceCredentials').then((data) => {
          credentials = data;
       });
    });
 
    it('standar username', () => {
       cy.get('#login2').click();
       cy.get('#loginusername').type(credentials.standarUser);
       cy.get('#loginpassword').type(credentials.systemPassword);
       cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    });
 });
 