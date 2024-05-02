//const { before } = require("cypress/types/lodash");
//const { beforeEach } = require("mocha");

describe('Probando hooks', () => {

    before(function(){
        cy.log('before')
    })

    beforeEach(function(){
        cy.log('beforeeach')
    })
    it('test #1', () => {
        console.log('este es test #1')
    });

    it('test #2', () => {
        console.log('este es test #2')
    });

    it('test #3', () => {
        console.log('este es test #3')
    });

    afterEach(() => {
        cy.log('aftereach')
    });

    after(() => {
        cy.log('after')
    });
});