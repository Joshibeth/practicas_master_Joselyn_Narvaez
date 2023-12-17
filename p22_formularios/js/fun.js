
const passwordInput = document.getElementById('pwdInput');
const passwordToggle = document.querySelector('.password-toggle');


passwordToggle.addEventListener('click', function() {


    //si el input esta oculto, muestralo y si es otra cosa, oscultalo.

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';

    } else {
        passwordInput.type = 'password';
    }
    
});