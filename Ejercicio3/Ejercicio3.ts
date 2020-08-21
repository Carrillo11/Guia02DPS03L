class Empleado{
    nombre:string;
    salario: number;
    
    constructor(nom:string, sal:number){
    this.nombre=nom;
    this.salario=sal;
    }

    emp1=new Empleado("Juan",1000);

    Deduccion():number{
      return this.salario-(this.salario*0.03+this.salario*0.072+this.salario*0.06);
   };

 }