const btn = document.querySelector('#btn-mostra-senha');

btn.addEventListener('click', function () {
    const input = document.querySelector('#password');
    const img = document.querySelector('#img-olho');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        img.src = "../img/olho-aberto.svg";
    } else {
        input.setAttribute('type', 'password');
        img.src = "../img/olho.svg";
    }
});

function validateInput(input, span) {
    inputError(false, input, span);
}

function exitInput(input, span) {
    function validateEmail(email) {
        var patern = /\S+@\S+\.\S+/;
        return patern.test(email);
    }

    function validatePassword(password) {
        if (prePassword == "") {
            var prePassword = password;
        } else {
            return 
        }
    }

    var prePassword = "";

    if (input.type == 'email') {
        if (validateEmail(input.value) === false) {
            inputError(true, input, span);
        } 
    }

    if (input.id == 'password') {
        if (input.value.length < input.minLength) {
            inputError(true, input, span);
        } 
    }
    
    if ((input.id == 'prePassword') && (input.value < minLength)) {
        inputError(true, input, span);
    } else {
        prePassword = input.value;
    }
}

function inputError(erro, input, span) {
    if (erro === true) {
        input.classList.add('error');
        span.classList.add('error');
    } else {
        input.classList.remove('error');
        span.classList.remove('error');
    }
}