"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Resta = void 0;
//importo la clase abstracta
var class_operacion_js_1 = require("./class_operacion.js"); //Operacion = nombre de la clase en class_operacion.js
//Clase Resta
var Resta = /** @class */ (function (_super) {
    __extends(Resta, _super);
    function Resta(num1, num2) {
        return _super.call(this, num1, num2) || this;
    }
    Resta.prototype.resultado = function () {
        return this.num1 - this.num2;
    };
    return Resta;
}(class_operacion_js_1.Operacion));
exports.Resta = Resta;
