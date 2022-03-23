//importo la clase abstracta
import {Operacion} from "./class_operacion.js"; //Operacion = nombre de la clase en class_operacion.js

//clase de la operacion SUMA
export class Suma extends Operacion{

    constructor(num1:number, num2:number){
       super(num1, num2); // super pq viene de Operacion
    }
    
    resultado() : number {
        return this.num1+this.num2;
    }
}
