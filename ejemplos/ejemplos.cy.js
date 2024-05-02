




let add = (a, b)=> a+b;
let subtract = (a,b)=> a-b;
let divide = (a, b)=> a/b;
let multiply = (a,b)=> a*b;


describe('Set de pruebas', ()=>{
    context('sub set', ()=>{
        it('suma de 2 numeros',()=>{
            expect(add(1,2)).to.equal(3);
        })
        it('resta de 2 numeros', () => {
            expect(subtract(4,2)).to.equal(2);
        });
        it('division de 2 numeros', () => {
            expect(divide(6,2)).to.equal(3);
        });
        it('multiplicacion de 2 numeros', () => {
            expect(multiply(4,2)).to.equal(8);
        });
        

        
    })
})

describe('numeros decimales', () => {
    it('suma de 2 decimales', () => {
        expect(add(2.2, 2.2)).to.equal(4.4);
    });
    it('resta de e decimales', () => {
        expect(subtract(4.4, 2.2)).to.equal(2.2);
    });
})