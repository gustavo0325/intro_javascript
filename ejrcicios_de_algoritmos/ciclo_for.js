//primer ejercicio del ciclo for

//generar los numeros del 1 al 10.

document.write("<p> genero los numeros del 1 al 10 </p>")


alert("Este programa va a generar los numeros del 1 al 10 utilizando el ciclo for");

//declaro variable 

let numeros = 0;

for(numeros = 1 ; numeros < 11 ; numeros ++){

    document.write(numeros + "<br>" )


};

document.write("<hr>")

document.write("<p> Se genera el  numero que el usuario digite de forma ascendente </p>")
//segundo ejercicio del ciclo for

//Este programa le va a pediral usuario un digito y se van a generar los numeros de acuerdo al numero que digite

alert("Este programa va a generar el numero que usted digite de forma ascendente");

let numeroAscendente = Number(prompt("Por favor introdusca un numero para generarlo de forma Ascendente"));
 
let inicio = 0; 

for(inicio = 1 ; inicio <= numeroAscendente; inicio++){

    document.write(inicio + "<br>");

};


document.write("<p> Se genera el principio y el final de los numeros digitados </p>")
//tercer ejercicio del ciclo for

//Este programa le va a pedir al usuario el principio y el final de un rango y mostrar los numeros de ese rango.

alert("Este programa le va a mostrar el principio y el final de dos rango que usted elija");

let principioDelRango = Number(prompt("Digite el principio del rango"));

let finalDelRango = Number(prompt("Digite el final del rango"));

for(principioDelRango ; principioDelRango <= finalDelRango; principioDelRango++){

    document.write(principioDelRango +"<br>" )


};

document.write("<hr>")

document.write("<p> Se genera la tabla de multiplicar del tres </p>")

//cuarto ejercicio

//Este programa genera la tabla de multiplicar del tres 

//declaro este alert para advertirle al usuario lo que va hacer el programa
alert("Este programa genera la tabla de multiplicar del tres")

//declaro variables 

let Tabla = 3;
let cantidad = 10;

//declaro for para generar los numeros del 1 al 10

for( i = 1; i<=cantidad; i++){

    //concateno las variables para formar la tabla y multiplico para el resultado
    document.write(Tabla+"x"+i+"="+Tabla*i+"<br>");

};

document.write("<hr>")

document.write("<p> Se genera la tabla de multiplicar del numero que digite </p>")



//Quinto ejercicio

//este programa va a generar la tabla del numero que el usuario digite

alert("Este programa va a generar la tabla del numero que usted introdusca")


let numeroUsuario = Number(prompt("digite el numero para generar su tabla"))
let n = 0;

for(n = 1; n <= 10; n++){

document.write(numeroUsuario +"x" +n +"="+numeroUsuario*n +"<br>" )


}

