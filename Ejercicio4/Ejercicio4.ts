class Calculadora {

    num1:number;
    num2:number;

constructor(n1:number, n2:number){
this.num1=n1;
this.num2=n2;
}

op=new Calculadora(8,5);

Opebasicas():number{
return this.num1+this.num2;
return this.num1-this.num2;
return this.num1*this.num2;
return this.num1/this.num2;



}
}
