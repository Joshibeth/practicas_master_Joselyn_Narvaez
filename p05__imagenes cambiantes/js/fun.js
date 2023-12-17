
// 1.   Capturar elementos

const btnFlechas = document.querySelector('.btnFlechas');
const fotoVoldemort = document.querySelector ('#voldemort')

// 2.crear eventos de usuario
btnFlechas.addEventListener ('click', cambiarFoto);

// Crear Función que sucederá al ejecutar el evento

let imageCounter = 1;

function cambiarFoto (){
    
    imageCounter = imageCounter+1;
    if (imageCounter==4) {imageCounter=1}
    fotoVoldemort.src = "img_voldemort/" + imageCounter + ".jpg";
    
}