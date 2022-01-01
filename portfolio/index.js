// Hambuger
const items = document.querySelector('.items');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', function show() {
    items.style.left = '0%';
});
closeMenu.addEventListener('click', function close() {
    items.style.left = '-100%';
});


// Modal
const modals = document.querySelector('#modal');
const hire = document.querySelector('#hire_me');
const closes = document.querySelector('#close');
const modalClose = document.querySelector('.modalClose');

hire.addEventListener('click', function modal() {
    modals.style.top = '18%';
});

closes.addEventListener('click', function close() {
    modals.style.top = '-86%';
});
modalClose.addEventListener('click', function close() {
    modals.style.top = '-86%';
});


// Form Validation
function validation() {

    const name = document.querySelector('#name').value;

    if (name == "") {
        document.querySelector('#name1').innerHTML = "**Please fill the name field";
        return false;
    }
    if ((name.length <= 2) || (name.length > 25)) {
        document.querySelector('#name1').innerHTML = "**Name length must be between 2 and 25 characters";
        return false;
    }
    if (!isNaN(name)) {
        document.querySelector('#name1').innerHTML = "**Only characters are allowed";
        return false;
    }

    const email = document.querySelector('#email').value;

    if (email == "") {
        document.querySelector('#email1').innerHTML = "**Please fill the email field";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.querySelector('#email1').innerHTML = "**@ Invalid Position";
        return false;
    }

    const subject = document.querySelector('#subject').value;

    if (subject == "") {
        document.querySelector('#subject1').innerHTML = "**Please Enter your subject";
        return false;
    }

    const message = document.querySelector('#message').value;

    if (message == "") {
        document.querySelector('#message1').innerHTML = "**Please Enter your message";
        return false;
    }
    if (message.length <= 20) {
        document.querySelector('#message1').innerHTML = "**Please Enter your message length greater than 20";
        return false;
    }


}


// Hover Effects
const cards = document.querySelector("#card_hover");
cards.addEventListener('mouseover', function hovers() {
    cards.style.backgroundColor = "#2196f3";
});

cards.addEventListener('mouseleave', function hovers() {
    cards.style.backgroundColor = "#222222";
});

