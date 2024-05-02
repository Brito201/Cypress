describe('Home Page', () => {
    
    beforeEach(() => {
        cy.visit('https://store.sony.com.ar/')
    });

    it('Entrando al Consolas', () => {
        
        cy.url().should('eq', 'https://store.sony.com.ar/');
        cy.get('.vtex-modal-layout-0-x-closeIcon').click()
        cy.get('.sc-iqsfdx').click()
        cy.get('#4').click()
        cy.get('.iznrvo > .sc-fotPbf > :nth-child(1)').click();
        
        cy.url().should('include', '/playstation')
        .and('include', '/consolas')
    });

    it('Buscar Producto', () => {
      cy.get('.vtex-modal-layout-0-x-closeIcon').click()
      cy.get('.sc-furvIG.sc-pVTma.hAKVRR.cGjrSs').click();  
      cy.get('#downshift-1-input').type('ps5 {enter}');
      cy.url().should('eq', 'https://store.sony.com.ar/ps5?_q=ps5&map=ft&order=')
      .and('include', '/ps5');
    });


    it('Agregar producto a carrito', () => {  
      cy.get('.vtex-modal-layout-0-x-closeIcon').click()
      cy.get('.sc-furvIG.sc-pVTma.hAKVRR.cGjrSs').click();  
      cy.get('#downshift-1-input').type('ps5 {enter}');
      cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > :nth-child(7) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .vtex-rich-text-0-x-container').click();
      cy.get('.pr0-ns > .vtex-button > .vtex-button__label').click();
    
      
      


    });


    
    

    









});