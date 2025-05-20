//for loading
window.addEventListener('load', ()=>{
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    setTimeout( ()=>{
        preloader.style.display = `none`;
        mainContent.style.display = `flex`;
    }, 3000);
});


// for form validation
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    let userName = document.querySelector('#username-box').value.trim();
    let email = document.querySelector('#email-box').value.trim();
    let passwordd = document.querySelector('#password-box').value.trim();


    let isValid = true;

    if (userName === "") {

        userNameError.innerHTML = "Please fill in your username";
        userNameField.style.border = `0.1rem solid #ff0000`
        isValid = false;

    } else {
        userNameError.innerHTML = "";
    }

    if (email === "") {
        emailError.innerHTML = "Please fill in your email";
        emailField.style.border = `0.1rem solid #ff0000`
        isValid = false;

    } else {
        emailError.innerHTML = "";
    }

    if (passwordd === "") {
        passwordError.innerHTML = "Please fill in your password";
        passwordField.style.border = `0.1rem solid #ff0000`
        isValid = false;

    } else {
        passwordError.innerHTML = "";
    }

    if (!isValid) {
        return;
    }

    // for local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let newUser = {
        username: userName,
        email: email,
        password: passwordd
    }

    const isExistingUser = users.some(user => user.email === email);

    const invalidNotification = document.querySelector('.invalid-notification');
    const sucessNotification = document.querySelector('.successful-notification');
    const invalidButton = document.querySelector('.invalid-button');
    const successfulButton = document.querySelector('.successful-button');
    const formBox = document.querySelector('#form-box');

    if (isExistingUser) {
        invalidNotification.style.visibility = `visible`;
        formBox.style.visibility = `hidden`;
    } else {
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        sucessNotification.style.visibility = `visible`;
        formBox.style.visibility = `hidden`;

    }

    invalidButton.addEventListener('click', () => {
        const invalidNotification = document.querySelector('.invalid-notification').style.visibility = `hidden`;
        formBox.style.visibility = `visible`;
        emailBox.value = "";
        emailError.innerHTML = 'Enter new email Address';
        emailField.style.border = `0.1rem solid #ff0000`;
    });

    successfulButton.addEventListener('click', () => {
        window.location.href = 'signin.html';
    })
});


//for username validation
const userNameField = document.querySelector('.name-field');
const userNameBox = document.querySelector('#username-box')
const userNameError = document.querySelector('.name-error');
const userNameRegex = /^[a-z._-]{5,15}$/;

userNameBox.addEventListener('keydown', () => {

    let userName = userNameBox.value.trim();

    if (userName === "") {
        userNameError.innerHTML = "";
        userNameField.style.border = `0.1rem solid #eaeaea`;

    } else if (userNameRegex.test(userName)) {
        userNameError.innerHTML = ``;
        userNameField.style.border = `0.1rem solid #008000`;
    }
    else {
        userNameError.innerHTML = 'Must between 5 - 15 characters';
        userNameField.style.border = `0.1rem solid #ff0000`;
    };
});

//for email validation
const emailField = document.querySelector('.email-field');
const emailBox = document.querySelector('#email-box');
const emailError = document.querySelector('.email-error');

emailBox.addEventListener('keydown', () => {

    if (emailBox.value === '') {
        emailError.innerHTML = '';
        emailField.style.border = '0.1rem solid #eaeaea';
    } else if (!emailBox.value.match(/^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,3}$/)) {
        emailError.innerHTML = 'Please enter a valid email address';
        emailField.style.border = '0.1rem solid #ff0000';
    } else {
        emailError.innerHTML = '';
        emailField.style.border = '0.1rem solid #008000';
    };
});

// for password show and hide
const password = document.querySelector('.password');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        password.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
});


// for random password generator
const passwordField = document.querySelector('.password-field');
const passwordError = document.querySelector('.password-error');
const passwordGenerator = document.querySelector('#password-generator');
const passwordBox = document.querySelector('#password-box');
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialCharacters = "!@#$%&*?";
const charsAll = upperCase + lowerCase + number + specialCharacters;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d!@#$%&*?]{10,}$/;


passwordGenerator.addEventListener('click', () => {

    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    const length = 10;
    while (password.length < length) {
        password += charsAll[Math.floor(Math.random() * charsAll.length)];
    };

    passwordBox.value = password;
    validatePassword();
});

// for password checking

function validatePassword() {
    const password = passwordBox.value.trim();

    if (passwordBox.value === "") {
        passwordError.innerHTML = "";
        passwordField.style.border = `0.1rem solid #eaeaea`;
    } else if (regexPassword.test(password)) {
        passwordError.innerHTML = "Strong password ✅";
        passwordError.style.color = "#008000";
        passwordField.style.border = `0.1rem solid #008000`;
    } else {
        passwordError.innerHTML = "Weak password ❌ (All characters are mandatory)";
        passwordField.style.border = `0.1rem solid #ff0000`;
        passwordError.style.color = "#ff0000";
    }
};
passwordBox.addEventListener('input', validatePassword);



// for change the heading

const changeHeadingFunction = () => {
    const changeHeading = document.querySelector('.heading-1');
    if(window.innerWidth <= 539){
        changeHeading.textContent = `Fruitables`;
        changeHeading.style.fontSize = `2.1rem`;
    }else{
        changeHeading.textContent = `Welcome To Fruitables`;
        changeHeading.style.fontSize = `1.97rem`;
    }
}
window.addEventListener('load', changeHeadingFunction);
window.addEventListener('resize', changeHeadingFunction);