export interface Arithmeticable<T>{
    add(n:T):T | undefined;
    substract(n:T):T | undefined;
    multiply(n:T):T | undefined;
    divide(n:T):T | undefined;
}

export function simplificarFraccion(numerador:number, denominador:number):{numerador:number, denominador:number} {
    function mcd(a:number, b:number):number {
        if (b === 0) {
            return a;
        }
        return mcd(b, a % b);
    }
    const divisorComun = mcd(numerador, denominador);

    const numeradorSimplificado = numerador / divisorComun;
    const denominadorSimplificado = denominador / divisorComun;
    return {
        numerador: numeradorSimplificado,
        denominador: denominadorSimplificado,
    }; 
}



export class Racionals implements Arithmeticable<Racionals>{
   
    constructor(private numerador:number,private denominador:number){

    }

    abs(): Racionals | undefined {
    if(this.denominador === 0) {
        return undefined;
    }
    return new Racionals (Math.abs(this.numerador), Math.abs(this.denominador));
    }

    inv(): Racionals| undefined {
    if(this.denominador === 0) {
        return undefined;
    }
    if(this.numerador === 0) {
        return undefined;
    }
    return new Racionals (this.denominador, this.numerador);
}

    add(n:Racionals): Racionals |undefined {
    if(this.denominador === 0 || this.denominador === 0) {
        return undefined;
    }
    let denominador = this.denominador * n.denominador;
    let numerador = this.denominador * n.numerador+ this.numerador * this.denominador;
    let numeradorSimplificado = simplificarFraccion(numerador, denominador).numerador;
    let denominadorSimplificado = simplificarFraccion(numerador, denominador).denominador;
    return new Racionals(numeradorSimplificado, denominadorSimplificado);
}

  
    substract(n:Racionals): Racionals|undefined {
    if(this.denominador === 0 || n.denominador === 0) {
        return undefined;
    }
    let denominador = this.denominador * n.denominador;
    let numerador = this.numerador * n.denominador - n.numerador * this.denominador;
    let numeradorSimplificado = simplificarFraccion(numerador, denominador).numerador;
    let denominadorSimplificado = simplificarFraccion(numerador, denominador).denominador;
    return new Racionals(numeradorSimplificado, denominadorSimplificado);
}

    multiply(n:Racionals): Racionals |undefined {
    if(this.denominador === 0 || n.denominador === 0) {
        return undefined;
    }
    let numerador = this.numerador * n.numerador;
    let denominador = this.denominador * n.denominador;
    let numeradorSimplificado = simplificarFraccion(numerador, denominador).numerador;
    let denominadorSimplificado = simplificarFraccion(numerador, denominador).denominador;
    return new Racionals(numeradorSimplificado, denominadorSimplificado);
}

    divide(n:Racionals): Racionals |undefined {
    if(this.denominador === 0 || n.denominador === 0) {
        return undefined;
    }
    let numerador = this.numerador * n.denominador;
    let denominador = this.denominador * n.numerador;
    let numeradorSimplificado = simplificarFraccion(numerador, denominador).numerador;
    let denominadorSimplificado = simplificarFraccion(numerador, denominador).denominador;
    return new Racionals(numeradorSimplificado, denominadorSimplificado);
}    
}

export class Racionals_get extends Racionals
{
    constructor(private numerador_:number,private denominador_:number){
        super(numerador_,denominador_)
    }
    get_numerador():number
    {
        return this.numerador_;
    }
    get_denominador():number
    {
        return this.denominador_;
    }
}




export class Complex implements Arithmeticable<Complex>
{
   constructor(private i:number,private r:number){
   }
   add(n:Complex):Complex| undefined
   {
      let i:number= this.i+n.i;
      let r:number= this.r+n.r;
      return new Complex(i,r);
   }
   substract(n:Complex): Complex | undefined {
    let i:number= this.i-n.i;
    let r:number= this.r-n.r;
    return new Complex(i,r);      
   }
   multiply(n:Complex): Complex| undefined {
    let i:number= this.i*n.i;
    let r:number= this.r*n.r;
    return new Complex(i,r);
   }
   divide(n:Complex): Complex| undefined {
      let i:number= this.i/n.i;
      let r:number= this.r/n.r;
      return new Complex(i,r);   
   }
}


/**@class Adaptador de racional complejo*/
export class Adapter extends Complex{
    /**@constructor cosntruye un racional */
     constructor(private racional:Racionals_get){
         super(0,0)
     }
     /**@public */
     public add(Complejo:Complex):Complex |undefined
     {
        let r = new Complex(0,this.racional.get_numerador()/this.racional.get_denominador())
        return Complejo.add(r);
     }
     /**@public */
     public substract(Complejo:Complex):Complex |undefined
     {
        let r = new Complex(0,this.racional.get_numerador()/this.racional.get_denominador())
        return Complejo.substract(r);
     }
     /**@public */
     public multiply(Complejo:Complex):Complex |undefined
     {
        let r = new Complex(0,this.racional.get_numerador()/this.racional.get_denominador())
        return Complejo.multiply(r);
     }     
     /**@public */
     public divide(Complejo:Complex):Complex |undefined
     {
        let r = new Complex(0,this.racional.get_numerador()/this.racional.get_denominador())
        return Complejo.divide(r);
     } 

}