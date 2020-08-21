var Rombo = /** @class */ (function () {
    function Rombo() {
        this.DiagonalVertical = 12;
        this.DigonalHorizontal = 2;
    }
    Rombo.prototype.calcularArea = function () {
        var Total = this.DiagonalVertical * this.DigonalHorizontal;
        return Total
    };
    ;
    return Rombo;
}());

console.log(calcularArea)
