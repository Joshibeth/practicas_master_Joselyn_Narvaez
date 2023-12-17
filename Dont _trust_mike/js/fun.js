// captura de elementos

const startBtn = document.querySelector('.no-me-fio__start');
const subItems = document.querySelectorAll('.no-me-fio__item');

// 2.generacion de evento sobre la variable capturada
startBtn.addEventListener('click', moveItems);
startBtn.addEventListener('click', changeColor);




// 3.defino que va a pasar cuando haga click en el boton

function moveItems(){

    subItems.forEach(item =>{
        item.classList.toggle('play');
    })
}

function changeColor(){

        subItems.forEach(item =>{
            item.classList.toggle('color');
        })


}

