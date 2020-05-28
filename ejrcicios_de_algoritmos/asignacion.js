//este programa va a calcular la suma de dos numeros

alert("Este programa va a calcular la suma de dos numeros");

//declaro las variables que van a contener los digitos insertados por el usuario y el resultado

let numero1 = Number(prompt("Digite el primer numero"));

let numero2 = Number(prompt("Digite el segundo numero "));

let resultado = Number(numero1 + numero2);

//aqui pongo la condicion necesaria para que se cumpla loque elusuario quiere

if(numero1 + numero2){

alert(`La suma de ${numero1} y ${numero2} es ${resultado}`);

};

//segundo ejercicio 
//creando programa que calcula la resta de dos numeros entero

alert("Este programa va a calcular la resta de dos numeros");

let primerNumero = Number(prompt("Digite el primer numero"));

let segundoNumero = Number(prompt("Digite el segundo numero "));

let producto = Number(primerNumero - segundoNumero);

//aqui pongo la condicion necesaria para que se cumpla loque elusuario quiere

if(primerNumero <=0 && segundoNumero <=0 ){

primerNumero-segundoNumero

alert(` La resta de ${primerNumero} y ${segundoNumero} es ${producto} por que el cero es neutro`)


}else{

alert(`La resta de ${primerNumero} y ${segundoNumero} es ${producto}`)
};


//tercer ejercicio

//Creando programa que calcule la multiplicacion de dos numeros

alert("Este programa va a calcular la multiplicacion de dos numeros")

//creando variable que contengan los numeros

let number1 =  Number(prompt("Por favor digite el primer numero"));
let number2 =  Number(prompt("Por favor digite el segundo numero"));

let EsIgual = Number(number1 * number2);

if(number1<=0 && number2 >=0){
    
    number1 * number2


alert(`La multiplicacion de ${number1} y ${number2} es igual a ${EsIgual}`);

}else{
alert(`La multiplicacion de ${number1} y ${number2} es igual a ${EsIgual}`);
};

//cuarto ejercicio

//ceando programa que calcula el area de un rectangulo

alert("Este programa va a calcular el area de un rectangulo");

//declaro variables para almacenar los valores
let baseDelRectangulo = Number(prompt("Digite la base de su rectangulo"));

let alturaDelRectangulo =Number(prompt("Digite la altura de su rectangulo"));

let resultadoRectangulo = Number(baseDelRectangulo * alturaDelRectangulo);


//creo la condicion para multiplicar los valores que digite el usuario
if(baseDelRectangulo * alturaDelRectangulo){

alert(`El area de su rectangulo es ${resultadoRectangulo}`)

};

//quinto ejercicio
//creando programa que calcule el ITBIS de una compra de 2500 pesos.

alert("Este programa va a calcular el ITBIS de su compra cuando pase de 2,500 pesos.")


let compra = Number(prompt("Ingrese el valor de su compra"));

let Itbis = 0.18 


if(compra >= 2500){

 let totalItbis = compra * Itbis

alert(`el ITBIS de su compra es ${totalItbis} `)


}else{

alert("Su compra no califico para agregarle el ITBIS")

}