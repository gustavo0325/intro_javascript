//inicio del programa 


//declaro una alerta para indicar que este programa lo hice yo

alert("Este programa fue creado por gustavo cepeda")

//Declaro variables pra que contengan los datos digitados por el usuario
let nombreUsuario = String(prompt("por favor digite su nombre")
);

let edadUsuario = Number(prompt("por favor digite su edad"));

let numero1 = Number(prompt("por favor digite un numero"));

let numero2 = Number(prompt("por favor digite otro numero"));

//aqui declaro este array para guardar losoperadores matematicos para luego llamarlos

let operadoresMatematicos = ["null", "suma", "resta", "multiplicacion", "divicion"]

let operacionMatematica = prompt("por favor escoja un numero del 1 al 4 que tipo de operacion decea hacer con sus dos numeros: si escoje el numero 1.suma, 2.multiplica, 3.divide, 4.resta ")


//declaro este bucle para ejecutar una sentencia especifica de las operaciones matematicas

while (operacionMatematica < 1 || operacionMatematica >= 5) {

     //este alert es para cuando el usuario digite un numero mayor que lo acordado en el bucle

     alert("Error, tienes que insertar un numero del 1 al 4");

     operacionMatematica = prompt("por favor escoja un numero del 1 al 4 que tipo de operacion decea hacer con sus dos numeros: si escoje el numero 1.suma, 2.multiplica, 3.divide, 4.resta ");


};

//este if lo utilice para especificar un bloque de codigo que se ejecutara, cuando una condicion sea correcta


if (operacionMatematica == 1) {

     resultado = numero1 + numero2

     alert(`La suma de ${numero1} y ${numero2} es igual a ${resultado}`)


};
if (operacionMatematica == 2) {

     resultado = numero1 * numero2

     alert(`La multiplicacion de ${numero1} y ${numero2} es igual a ${resultado}`);


};
if (operacionMatematica == 3) {


     //declaro este bucle para validar que no se puede dividir con cero

     while (numero2 == 0 || operacionMatematica == 2) {

          alert(" Este tipo de división se considera una «indefinición» la cual puede originar paradojas matemáticas que se conocen como diferentes infinitos.Por lo tanto no se puede dividir por cero")

          numero2 = Number(prompt("por favor digite otro numero"));

     };

     resultado = numero1 / numero2

     alert(`La divicion de ${numero1} y ${numero2} es igual a ${resultado}`);


};


if (operacionMatematica == 4) {

     resultado = numero1 - numero2

     alert(`La resta de ${numero1} y ${numero2} es igual a ${resultado}`)

};



//este bucle valida que el usuario no puede parar de una cierta edad
while (edadUsuario < 1 || edadUsuario >= 121) {

     alert("Error su edad tiene que ser de 1 a 120 años");

     edadUsuario = prompt("por favor digite su edad");

};

//esta variable contiene un confirm para que el usuario diga si quiere generar la tabla de multiplicar de su edad

let tablaEdadUsuario = confirm("Deceas mostrar la tabla de multiplicar de tu edad.")

//este if else lo uso para especificar que la condicion que el usuario elija sea correcta o falsa

if (tablaEdadUsuario || tablaEdadUsuario == true) {


     let n = 0;

     for (n = 1; n <= 10; n++) {

          document.write(edadUsuario + "x" + n + "=" + edadUsuario * n + "<br>")
     };

     //este alert es para cuando el usuario elija la respuesta falsa

} else {
     alert("gracias por tu atencion bay")


};

// aqui termina el porgrama