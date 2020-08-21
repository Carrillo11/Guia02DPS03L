var Empleado = /** @class */ (function () {
    function Empleado(nom, sal) {
        this.emp1 = new Empleado("Juan", 1000);
        this.nombre = nom;
        this.salario = sal;
    }
    Empleado.prototype.Deduccion = function () {
        return this.salario - (this.salario * 0.03 + this.salario * 0.072 + this.salario * 0.06);
    };
    ;
    return Empleado;
}()) ;
