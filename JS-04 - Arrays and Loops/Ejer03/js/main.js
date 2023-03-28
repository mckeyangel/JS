console.log("+++++ Imprimir repetidamente decremento xValue en 0.5 +++++");

let xValue = 10;          //Inicio
while (xValue>0) {     //Condición
    console.log(xValue);
    xValue-= .5;          //Decremento
}//Ciclo While de xValue

console.log("++++++ Imprimir números impares entre 1 - 100 ++++++");

let impar = 1;          //Inicio
while (impar<100) {     //Condición
    console.log(impar);
    impar+= 2;          //Incremento
}//Ciclo While de impar

console.log("++++++ Imprimir del 1 al n entre [] ++++++");
let n=6;
let corch= 1;          //Inicio
while (corch<=n) {     //Condición
    console.log("[" + corch + "]");
    corch++;          //Incremento
}//Ciclo While de corch