// 1.CAPTURO ELEMENTOS//--
const emotionsBtn = document.querySelectorAll('.emotions__item button');
const allMessages = document.querySelectorAll('.emotions__message p');
const randomButton = document.querySelector('.random-button');        


//2.CREO EVENTOS DE USUARIO//---

// Recorro la lista con un bucle y asigno un color automáticamente a un boton
emotionsBtn.forEach((boton,index) =>{
    
    const colorMutation = Math.floor(100 -(index*(280/emotionsBtn.length)));
    const color = "hsl("+colorMutation+",100%, 50%)";
    boton.style.color= color;

});

//al hacer click en cada boton utilizo un mapeo para obtener su id (mensaje) correspondiente y lo muestra
   
emotionsBtn.forEach(function(button) {
    button.addEventListener('click', function() {
        const messageId = buttonMessageMap[button.value];
        showMessage(messageId);
    });

//cuando hago click en el boton random se ejecuta la funcion para mostrar un mensaje aleatorio 

randomButton.addEventListener('click', showRandomMessage);

});


//FUNCIONES AL EJECUTAR EL EVENTO//--


//creo un objeto que asigna cada valor de los botones a un id de mensaje

    const buttonMessageMap = {
        'iluminacion': 'message1',
        'paz': 'message2',
        'alegria': 'message3',
        'amor': 'message4',
        'razonamiento': 'message5',
        'aceptacion': 'message6',
        'voluntad': 'message7',
        'neutralidad': 'message8',
        'coraje': 'message9',
        'orgullo': 'message10',
        'ira': 'message11',
        'deseo': 'message12',
        'miedo': 'message13',
        'tristeza': 'message14',
        'apatia': 'message15',
        'culpa': 'message16',
        'verguenza': 'message17',
    
      };

       // Función para mostrar un mensaje especifico
      function showMessage(messageId) {

        // funcion que oculta los demás msjes para que no se muestren
        allMessages.forEach(function(message) {
            message.style.display = 'none';
        });
    
        // muestro el mensaje específico por su id
        const specificMessage = document.getElementById(messageId);
        if (specificMessage) {
            specificMessage.style.display = 'block';
        }
    }


    // Función para mostrar un mensaje aleatorio
    function showRandomMessage() {

    //obtengo los datos de todos los ids anteriores que usé en el mapeo
    const messageIds = Object.values(buttonMessageMap);

    //genero un índice aleatorio en el rango de longitud de la base de datos de los ids
    const randomIndex = Math.floor(Math.random() * messageIds.length);

    //obtengo un mensaje aleatorio del indice random y muestra el mensaje
    const randomMessageId = messageIds[randomIndex];
    showMessage(randomMessageId);
}

    
    