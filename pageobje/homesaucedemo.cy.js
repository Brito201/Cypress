
import { should } from 'chai';
import homesaucepage from '../../../pages/saucedemo/homesaucepage';
import homeSaucePage from '../../../pages/saucedemo/homesaucepage'
import inventorypage from '../../../pages/saucedemo/inventorypage';



describe('implementacion', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    });
    
    it('inventory page', () => {
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();

        inventorypage.elements.titleSpan().should('have.text', 'Products');
    });
    

    it('inventory locked', () => {
        homeSaucePage.typeUsername('locked_out_user')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();

        homesaucepage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.' );
    });

    it('inventory locked', () => {
        homeSaucePage.typeUsername('sasauser')
        homeSaucePage.typePassword('secret_sauce')
        homeSaucePage.clickLogin();

        homesaucepage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service' );
    });

    it('inventory locked', () => {
        homeSaucePage.typeUsername('standard_user')
        homeSaucePage.typePassword('saspass')
        homeSaucePage.clickLogin();

        homesaucepage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service' );
    });

    
})
