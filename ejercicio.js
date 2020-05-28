
//asignando una cost a mi primer boton
const btn1 = document.getElementById ("btn1");

//asignando una cost a mi segundo boton
const btn2 = document.getElementById ("btn2");

//asignando una cost a mi tercer  boton
const btn3 = document.getElementById ("btn3");

//asignando una cost a mi cuarto boton
const btn4 = document.getElementById ("btn4");

//seleccionando el parrafo para cambiarlo de color 
parrafoBlue = document.getElementById("parrafo_color")


//asignando una funcion al primer boton que mostrara una alerta

btn1.addEventListener("click",function(){

alert("hola gracias por precionar el boton.");

});


//asignando una funcion a el segundo boton que mostrara un confirm

btn2.addEventListener("dblclick",function(){

confirm("precionaste el boton (aceptar) si lo hiciste  de lo contrario presiona (cancelar)")

});


//asignando una funcion a el tercer boton que cambiara el color del parrafo 

btn3.addEventListener("mouseover",function(){

    parrafoBlue.style.color = "blue";
    
    });


// asignando una funcion a el cuarto boton que mostrara una alerta permanente

btn4.addEventListener("focus",function(){

    alert("alerta diste click al boton");
   
    
    });