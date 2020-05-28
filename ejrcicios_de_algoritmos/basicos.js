//Primer ejercicio basico

//este algoritmo va a decir si una persona es mayor de edad

//alerta para decirle al usuario que tiene que hacer

alert("Este programa le va a decir si usted es mayor de edad");

// aqui declaro la variable que va a contener la edad que digite el usuario

let edad = prompt("Por favor digite su edad");

// aqui pongo la condicion para que se cumpla la sentencia acordada
if(edad >= 18){
alert("Usted es mayor de edad");

}
else{
alert("Usted es menor de edad");

};

 
//Segundo ejercicio #2 basico

// Este algoritmo va a mostrar un dia de la semana segun digitamos un numero del 1 al 7

//alerta para decirle al usuario que tiene que hacer

alert("Este programa va a mostrar un dia de la semana cuando usted digite un munero del 1 al 7.");

//aqui declaro variable para los dias de la semana y le pido al usuario que digite un nunero del 1 al 7

let diasSemana =["null","Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

let numeroDigitado = parseInt(prompt("digite un munero del 1 al 7"));

//creo un bucle para que se ejecute la centencia especificada

while(numeroDigitado < 1 || numeroDigitado >= 8){

alert("Error,no puedes digitar un numero menor que 1 ni mayor que 7")

numeroDigitado = parseInt(prompt("digite un munero del 1 al 7"));

};

//creo condicion para que si lo que digita el usuario se cumple se ejecute correctamente

if(numeroDigitado == 1){

alert("El dia seleccionado es Domingo")

};
if(numeroDigitado == 2){

alert("El dia seleccionado es Lunes")

};
if(numeroDigitado == 3){

alert("El dia seleccionado es Martes")

};
if(numeroDigitado == 4){

alert("El dia seleccionado es Miercoles")

};
if(numeroDigitado == 5){

alert("El dia seleccionado es Jueves")

};
if(numeroDigitado == 6){

alert("El dia seleccionado es Viernes")

};
if(numeroDigitado == 7 ){

alert("El dia seleccionado es Sabado")

};

//ejercicio #3 basico

// este programa le va a decir elmes del año cuando digitemos un numero del 1 al 12

//alerta para decirle al usuario que tiene que hacer

alert("Este programa va a mostrar un mes del año cuando digitemos un numero del 1 al 12 ");

//declarar variable para los meses del año y le pido al usuario que digite lo que tiene que hacer

let mesesDelAño =["null", "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","septiembre","Octubre","Noviembre","Diciembre"]

let meses = parseInt(prompt("Digite un numero del 1 al 12"));

//Creo un bucle para ejecutar la centencia correcta

while (meses < 1 || meses >=13){

alert("Error,no puedes digitar un numero menor que 1 o mayor que 12")

 meses = parseInt(prompt("Digite un numero del 1 al 12"));

};

//creola condicion para si lo que digita el usuario es cierto lo cumpla

if(meses == 1){
  alert("El mes seleccionado es Enero")
};
if(meses == 2){
  alert("El mes seleccionado es Febrero")
};
if(meses == 3){
  alert("El mes seleccionado es Marzo ")
};
if(meses == 4){
  alert("El mes seleccionado es Abril")
};
if(meses == 5){
  alert("El mes seleccionado es Mayo")
};
if(meses == 6){
  alert("El mes seleccionado es Junio")
};
if(meses == 7){
  alert("El mes seleccionado es Julio")
};
if(meses == 8){
  alert("El mes seleccionado es Agosto")
};
if(meses == 9){
  alert("El mes seleccionado es Septiembre")
};
if(meses == 10){
  alert("El mes seleccionado es Octubre")
};
if(meses == 11){
  alert("El mes seleccionado es Noviembre")
};
if(meses == 12){
  alert("El mes seleccionado es Diciembre")
};

