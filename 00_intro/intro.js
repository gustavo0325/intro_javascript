const inputcolor = document.querySelector('#color');
const btncambiarcolor = document.querySelector('#cambiar_color');

btncambiarcolor.addEventListener('click', () => {
 let color = inputcolor.value;

 if (color === ''){
     alert("debes escribir un valor el color");
 } else{
     cambiarcolorfondo(color);
 }
 
});

function cambiarcolorfondo(color) {
    document.body.style.backgroundColor = color;
}

