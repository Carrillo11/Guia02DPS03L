var Calculadora = /** @class */ (function () {
    function Calculadora(n1, n2) {
        this.op = new Calculadora(8, 5);
        this.num1 = n1;
        this.num2 = n2;
    }
    Calculadora.prototype.Opebasicas = function () {
        return this.num1 + this.num2;
        return this.num1 - this.num2;
        return this.num1 * this.num2;
        return this.num1 / this.num2;
    };
    return Calculadora;
}());
