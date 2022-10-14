let popup = document.querySelector('.popup');
let form = document.querySelector('form');
let inputEmail = document.querySelector('.email');
let currentEmail = document.querySelector('.current__email');
let cancelButton = document.querySelector('.cancel');
let confirmButton = document.querySelector('.confirm');
let formContainer = document.querySelector('.form__container');
let greetings = document.querySelector('.greetings');
let userEmail = document.querySelector('.user__email');

inputEmail.addEventListener('input', function (event) {
    if (inputEmail.validity.typeMismatch) {
        inputEmail.setCustomValidity("I am expecting an e-mail address!");
    } else {
        inputEmail.setCustomValidity("");
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = inputEmail.value;
    currentEmail.innerHTML = email;
    popup.classList.add('open');
})

cancelButton.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.remove('open');
})

confirmButton.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.remove('open');
    formContainer.classList.add('close');
    let email = inputEmail.value;
    userEmail.innerHTML = email;
    greetings.classList.add('greetings__open');
})
