//importo la clase abstracta
import {Operacion} from "./class_operacion.js"; //Operacion = nombre de la clase en class_operacion.js

//Clase Resta
export class Resta extends Operacion{ //pongo export para poder usarla de operacion.ts

    constructor(num1:number, num2:number){
        super(num1, num2); // super pq viene de Operacion
     }
    
     public resultado() : number {
         return this.num1-this.num2;
     }
}

