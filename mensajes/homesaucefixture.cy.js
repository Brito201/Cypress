import homeSaucePage from "../../../../pages/saucedemo/homesaucepage";
import inventoryPage from "../../../../pages/saucedemo/inventorypage";

const tests = require('../../../../fixtures/array/sauceUser')

describe('sauce array', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    });

    tests.forEach(test  => {
        it(test.name , () => {
            homeSaucePage.typeUsername(test.username)
            homeSaucePage.typePassword(test.password)
            homeSaucePage.clickLogin();

            if (test.name === 'should login to inventory page') {
                inventoryPage.elements.titleSpan().should('have.text', test.expected)
            } else {
                homeSaucePage.elements.errorMessage().should('have.text', test.expected)
            }
        });
    });
});
