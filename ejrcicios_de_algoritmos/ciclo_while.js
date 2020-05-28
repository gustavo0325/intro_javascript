// primer ejercicio del ciclo while 

//este programa muestra un mensaje cuando el usuario inserte la palabra "msj"

//este alerta es para indicarle al usuario lo que tiene que hacer

alert("Este programa mostrara un mensaje cunado usted escriba (msj)");

//declaro variable y le pido al usuario que inserte la palabra "msj"

let mensaje = prompt("Escriba la palabra (msj) por favor para poder ver el mensaje oculto")
 

//declaro el bucle para que cuando el usuario digite la palabra clave se muestre el mensaje

while(mensaje != "msj" || mensaje == false){

 alert("Error, tienes que escribir la palabra (msj) para poder ver el mensaje")

 mensaje = prompt("Escriba la palabra (msj) por favor para poder ver el mensaje oculto")

};
//este alert es el mensaje que sale cuando el usuario digita msj

alert("tu mensaje es:    Jesus te Ama")


//segundo ejercicio de ciclo while

//este programa solo va a calcular los numeros positivos

//este alert es para informarle al usuario lo que tiene que hacer

alert("Este programa solo puedes digitar dos numeros positivos y si son negativos dara un error ")

//declaro varibles que van a contener los valores positivos
let numero1 = Number(prompt("Digite un numero positivo por favor"));

let numero2 = Number(prompt("Digite un numero positivo por favor"));

//declaro el bucle que tiene las condiciones necesarias para saber si las respuestas ingresadas son correctas o incorrectas

while(numero1 >0 == false || numero2 >0 == false ){


alert("Error, Su numero tienen que ser positivo")


 numero1 = Number(prompt("Digite un numero positivo por favor"));

 numero2 = Number(prompt("Digite un numero positivo por favor"));


};

alert(`los numeros positivos digitados son ${numero1} y ${numero2}`)