import "mocha";
import {expect} from "chai"
import {Racionals_get,Complex,Adapter} from  "../src/modificación"


describe('Modificacion practica 7',() =>{
    it('Comprobamos si funciona add',() =>{
        const Racional = new Racionals_get(2,1)
        const Complejo = new Complex(3,2)
        let adaptador = new Adapter(Racional);
        const resultado = new Complex(3,4);
        expect(adaptador.add(Complejo)).to.deep.equal(resultado);
    })
    it('Comprobamos si funciona substract',() =>{
        const Racional = new Racionals_get(2,1)
        const Complejo = new Complex(3,4)
        let adaptador = new Adapter(Racional);
        const resultado = new Complex(3,2);
        expect(adaptador.substract(Complejo)).to.deep.equal(resultado);
    })   
    it('Comprobamos si funciona multiply',() =>{
        const Racional = new Racionals_get(2,1)
        const Complejo = new Complex(3,2)
        let adaptador = new Adapter(Racional);
        const resultado = new Complex(6,4);
        expect(adaptador.multiply(Complejo)).to.deep.equal(resultado);
    })      
    it('Comprobamos  si funciona divide',() =>{
        const Racional = new Racionals_get(2,1)
        const Complejo = new Complex(6,4)
        let adaptador = new Adapter(Racional);
        const resultado = new Complex(3,2);
        expect(adaptador.divide(Complejo)).to.deep.equal(resultado);       
    })
    it('Comprobamos si da undefined a dividir entre 0',() =>{
        const Racional = new Racionals_get(0,1)
        const Complejo = new Complex(6,4)
        let adaptador = new Adapter(Racional);
        expect(adaptador.divide(Complejo)).to.be.undefined;             
    })
})