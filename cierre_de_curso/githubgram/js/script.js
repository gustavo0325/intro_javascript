//selecionar los elementos

const imgPerfil = document.querySelector("img.usuario");

const nombreDelUsuario = document.querySelector("h3.nombre");

const nombreDeUsuario = document.querySelector("p.nombre_usuario");

const boton_Buscar =document.querySelector("#btn_buscar");

const biografia_usuario = document.querySelector("p.bio");

const seguidores = document.querySelector("span.seguidores");

const siguiendo = document.querySelector("span.siguiendo");

const repositorios = document.querySelector("span.repositorios");

const location_usuario = document.querySelector("span.ubicacion");

const barraDeBusqueda = document.querySelector("input#barradebusqueda")


//creando funcion asincrona


boton_Buscar.addEventListener("click", function(){

obtenerDatosGitHub();
 
});


async function obtenerDatosGitHub(){

//ejecutndo peticion y esperando la respuesta 

//concatenar la bariable barra de busqueda con la url

 let respuesta = await fetch(`https://api.github.com/users/${barraDeBusqueda.value}`


 );

 //variable para la barra de busqueda

 let valorDeBusqueda = barraDeBusqueda.value

//verifico si la respuesta esta bien

 if (respuesta.ok){


//convertir la respuesta y procesarla

let datosUsuarios = await respuesta.json();

//actualizar informacion en la pagina 

//actualizar la ruta de la imagen

imgPerfil.src = datosUsuarios.avatar_url;

//actualizar nombre del usuario
nombreDelUsuario.textContent = datosUsuarios.name

//actualizar el nombre de usuario

nombreDeUsuario.textContent = datosUsuarios.login

//actualizar la biografia del usuario

biografia_usuario.textContent = datosUsuarios.bio

//actualizar seguidores del usuario

seguidores.textContent = datosUsuarios.followers

//actualizar los siguiendo del usuario

siguiendo.textContent = datosUsuarios.following

//actualizaar los repositorios del usuario

repositorios.textContent = datosUsuarios.public_repos

//actualizar location u ubicacion del usuario

location_usuario.textContent = datosUsuarios.location


 }

};


