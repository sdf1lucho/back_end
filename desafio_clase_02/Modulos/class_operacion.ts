//Clase abstracta (no tiene instancias). La uso en todas las operaciones.
//Todas las operaciones tienen que tener un metodo llamado "resultado" que realice la operacion pedida
// Uso Export para poder utilizar la clase

export abstract class Operacion {

    protected num1:number;
    protected num2:number;

    protected constructor(num1:number,num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }

    abstract resultado(num1:number,num2:number):number;
}


