interface Spiderman {
 nombre:string;
 poderes:string[];

 superpoderes(): void;
}

class heroes implements Spiderman {
    nombre = "Peter Parker";
    poderes = ["trepar", "fuerza", "agilidad", "telas de araña"];

    superpoderes() {
        console.log('Los poderes de Spiderman');
    }
}