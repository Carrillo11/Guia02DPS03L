var heroes = /** @class */ (function () {
    function heroes() {
        this.nombre = "Peter Parker";
        this.poderes = ["trepar", "fuerza", "agilidad", "telas de araña"];
    }
    heroes.prototype.superpoderes = function () {
        console.log('Los poderes de Spiderman');
    };
    return heroes;
}());
