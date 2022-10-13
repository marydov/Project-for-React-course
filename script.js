let popup = document.querySelector('.popup');
let submit = document.querySelector('.submit');
let inputEmail = document.querySelector('.email');
let currentEmail = document.querySelector('.current__email');
let cancelButton = document.querySelector('.cancel');
let confirmButton = document.querySelector('.confirm');
let formContainer = document.querySelector('.form__container');
let greetings = document.querySelector('.greetings');
let userEmail = document.querySelector('.user__email');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let email = inputEmail.value;
    currentEmail.innerHTML = email;
    console.log(email);
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
    console.log(email, greetings);
    greetings.classList.add('greetings__open');
})
