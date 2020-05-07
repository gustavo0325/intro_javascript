//aqui declaro la const del h1 y lo selecciono para asignarle una funcion

const parrafoHolaMundo = document.querySelector("#parrafo");

// aqui declaro la const del boton y lo selecciono asignarle una funcion

const btnClick = document.querySelector("#btnclick");

//aqui declaro la const del div y lo selecciono asignarle una funcion

const divParrafoLoren = document.querySelector(".lorem");

//aqui les asigno las funciones a los const y les doy stilos

btnClick.addEventListener("dblclick",function(){

    divParrafoLoren.style.display = ("none");

    parrafoHolaMundo.innerHTML = "Has hecho doble click";

    parrafoHolaMundo.style.color = "red";

    parrafoHolaMundo.style.fontStyle ="italic";


});