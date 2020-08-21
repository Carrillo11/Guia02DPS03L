class Rombo {
  DiagonalVertical:number;
  DigonalHorizontal:number;

  calcularArea():number{
    return this.DiagonalVertical * this.DigonalHorizontal;
  };
  constructor(){
  this.DiagonalVertical = 12;
  this.DigonalHorizontal = 2;
  }

}