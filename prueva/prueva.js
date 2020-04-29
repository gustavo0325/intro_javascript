//array con los dias de la semana

let DiasDeLaSemana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

//array con los nombres de los miembros de mi familia

let MiembrosFamilia = ['Octavio Cepeda','Carmen Aracena','Wendy Cepeda','Yosmeiry Cepeda','Rosabel Cepeda','Gustavo Cepeda'];

//objeto con los datos personales

const DatosPersonales = {
NombreCompleto: "gustavo de jesus Cepeda",
FechaDeNacimiento: "03/1/1999",
LugarNacimiento: "santiago",
Edad: 21,
ComidasFavoritas: ['arros, habichuela y carne','mangu de platano con queso','locrio de longanisa'],
PaisesVisitar: ["Espana","China","Turquia","Reino unido","Tailandia"],
LicenciaDeCondusir: false,
Universidad: null,
};

/*objecto con datos personales de mi artista favorito e informacion relevante*/

let DatosPersonalesArtistaFavorito ={

NombreCompleto: "Ramon Luis Ayala Rodriguez",
FechaNacimiento: "3 de febrero de 1977",
LugarNacimiento: "Puerto Rico",
Edad: 43,
Apodo: "El Camgri",
GenerosMusicales: "hip hop, poplatino, regueton ",
conyuge: "Mireddys Gonzalez",
Hijos: 3,
};

//imprimiendo informacion personal por consola

console.log(DatosPersonales.NombreCompleto);
console.log(DatosPersonales.FechaDeNacimiento);
console.log(DatosPersonales.PaisesVisitar[0]);

//imprimiendo datos personales de mi artista favorito

console.log(DatosPersonalesArtistaFavorito.NombreCompleto);
console.log(DatosPersonalesArtistaFavorito.Edad);
console.log(DatosPersonalesArtistaFavorito.LugarNacimiento);
console.log(DatosPersonalesArtistaFavorito.GenerosMusicales);

//imprimiendo el dia que naci

console.log(DiasDeLaSemana[3]);