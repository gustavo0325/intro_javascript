let nombre = prompt("Digita tunombre");
let edad = prompt("Dime tu edad");
let estadoCivil =prompt("Dime tub estado civil");

//estudiante
let estudiante ={

    nombre: prompt("Como te llamas"),
    edad: prompt("Que edad tienes"),
    curso: prompt("Cual es tu curso"),
};


let estudiante = {};

estudiante.nombre = prompt("dime tu nombre"); 
estudiante.edad = prompt("dime tu edad");
estudiante.curso = prompt("dime tu curso");

console.log(estudiante.edad);

estudiante.edad = Number.parseInt(estudiante.edad);

console.log(estudiante.edad);

let nombre = prompt("Como te llamas");
let edad = prompt("Que edad tienes")
let monto = Number.parseInt( prompt("Que cantidad tienes en pesos") );

console.log(monto);
//monto = Number.perseInt(monto);
//convertir la edad en numero
edad = Number.parseInt(edad);

let tasaDelDollar = 54.3;
let conversionEnDollar = monto / tasaDelDollar;

console.log(`La conversion es: ${ conversionEnDollar}`
);
