//arrays con los dias de la semana que el usuario digite

alert("Por favor llene las siguientes preguntas")

let diasSemana = [];

diasSemana.push(prompt("Dime el 1er dia de la semana") ); 

diasSemana.push(prompt("Dime el 2do dia de la semana") ); 

diasSemana.push(prompt("Dime el 3er dia de la semana") ); 

diasSemana.push(prompt("Dime el 4to dia de la semana") ); 

diasSemana.push(prompt("Dime el 5to dia de la semana") ); 

diasSemana.push(prompt("Dime el 6to dia de la semana") ); 

diasSemana.push(prompt("Dime el 7mo dia de la semana") ); 


//arrays con tres nombres de la familia que el usuario digite

alert("Por favor llene el siguiente formulario de preguntas personales")

let mienbrosFamilia = [];

mienbrosFamilia.push(prompt("Dime el 1er miembro de tu familia") );

mienbrosFamilia.push(prompt("Dime el 2do miembro de tu familia") );

mienbrosFamilia.push(prompt("Dime el 3er miembro de tu familia") );


//objecto con datos personales del usuario

let datosPersonalesUsuario ={};

datosPersonalesUsuario.nombreCompleto = String(prompt("Diguite su nombre completo") );

datosPersonalesUsuario.fechaNacimiento= String(prompt("Diguite su fecha de nacimiento") );

datosPersonalesUsuario.lugarNacimiento = String(prompt("Diguite su lugar de nacimiento") );

datosPersonalesUsuario.edad = Number(prompt("Diguite su edad") );

//comidas favoritas del usuario

datosPersonalesUsuario.comidasFavoritas = [String(prompt("Diguite su 1ra comida favorita") ),

datosPersonalesUsuario.comidasFavoritas = String(prompt("Diguite su 2da comida favorita") ),

datosPersonalesUsuario.comidasFavoritas = String(prompt("Diguite su 3ra comida favorita") )];

//paises favoritos del usuario

datosPersonalesUsuario.paisesFavorito =[ String(prompt("Diguite su 1er pais favorito") ),

datosPersonalesUsuario.paisesFavorito = String(prompt("Diguite su 2do pais favorito") ),

datosPersonalesUsuario.paisesFavorito = String(prompt("Diguite su 3ro pais favorito") ),

datosPersonalesUsuario.paisesFavorito = String(prompt("Diguite su 4to pais favorito") ),

datosPersonalesUsuario.paisesFavorito = String(prompt("Diguite su 5to pais favorito") )];

// (comfirm) si tiene licencia de conducir

datosPersonalesUsuario.licenciaConducir = Boolean (confirm("Si posee licencia para conducir haga click en (aceptar) y si no posee licencia haga click en (cancelar)") );

// (comfirm) si esta en universidad

datosPersonalesUsuario.universidad = Boolean(confirm("Si estas en la universidad haga click en (aceptar) y si no haga click en (cancelar)") );

//objeto de datos personales del artista favorito del usuario

let artistaFavoritoUsuario = {};

artistaFavoritoUsuario.nombreArtistico = String(prompt("Digita el nombre artistico de tu artista favorito") );

artistaFavoritoUsuario.nombreDePila = String(prompt("Digita el nombre de pila de tu artita favorito"));

artistaFavoritoUsuario.fechaNacimiento = String(prompt("Digita la fecha de nacimiento de tu artista favorito"));

artistaFavoritoUsuario.edad = Number(prompt("Digita la edad de tu artista favorito"));

artistaFavoritoUsuario.cancionesFavoritas = [String(prompt("Digita tus canciones favoritas de tu artista favorito") )];

//imprimir por consola informacion personal del usuario

console.log(`Mi nombre es: ${datosPersonalesUsuario.nombreCompleto}`);

console.log(`Nací el dia: ${datosPersonalesUsuario.fechaNacimiento}`);

console.log(`El pais que me gustaria visitar es: ${datosPersonalesUsuario.paisesFavorito[0]}`);

console.log(`El nombre de mi artista favorito es: ${artistaFavoritoUsuario.nombreArtistico}`);

console.log(`El nombre de pila de mi artista favorito es: ${artistaFavoritoUsuario.nombreDePila}`);

console.log(`La edad de mi artista favorito es: ${artistaFavoritoUsuario.edad}`);

console.log(`Mis canciones favoritas son: ${artistaFavoritoUsuario.cancionesFavoritas}`);