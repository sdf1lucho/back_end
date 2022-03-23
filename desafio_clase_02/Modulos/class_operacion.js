"use strict";
//Clase abstracta (no tiene instancias). La uso en todas las operaciones.
//Todas las operaciones tienen que tener un metodo llamado "resultado" que realice la operacion pedida
// Uso Export para poder utilizar la clase
exports.__esModule = true;
exports.Operacion = void 0;
var Operacion = /** @class */ (function () {
    function Operacion(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    return Operacion;
}());
exports.Operacion = Operacion;
