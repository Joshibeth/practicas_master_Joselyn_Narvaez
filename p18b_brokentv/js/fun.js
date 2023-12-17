// ALGORITMO: Hacer que cuando el boton 1 sea pulsado cambie la foto

// 1.Capturar todos los elementos que van a participar en mi proyecto

//capturo imagenes
const images = [
"img/amelie.webp",
"img/belle.webp",
"img/dispatch.webp",
"img/eduardo.webp",
"img/enemy.webp",
"img/lalaland.webp",
"img/Midsommar.webp",
"img/mrnobody.webp",
]


//capturo boton apagar
const btn0n0ff = document.querySelector('.tv__btn-on');





// capturo foto
const tvImg = document.querySelector('#tvImg');

//capturo pantalla
const tvScreen = document.querySelector('.tv__screen');

//capturo boton sint
const tvBtnSint = document.querySelector('.tv__btn-sint');





// 2.Aplicar el evento al elemento que yo quiero (o que me diga la tarea)
btn1.addEventListener('click',cambiarCanal);
btn2.addEventListener('click',cambiarCanal);
btn3.addEventListener('click',cambiarCanal);
btn4.addEventListener('click',cambiarCanal);
btn5.addEventListener('click',cambiarCanal);
btn6.addEventListener('click',cambiarCanal);
btn7.addEventListener('click',cambiarCanal);
btn8.addEventListener('click',cambiarCanal);

btn0n0ff.addEventListener('click', apagarTele)


// 3.Definir la funcion que va a ejecutar el evento
function cambiarCanal() {
    tvImg.src = images[this.dataset.number]

}

function apagarTele() {
    tvImg.classList.toggle('turn-off');
}

document.querySelector('.tv__btn-sint').addEventListener('click', function() {
    const tvScreen = document.querySelector('.tv__screen');
    tvScreen.classList.toggle('sin-animacion')
});




