//for loading
window.addEventListener('load', ()=>{
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    setTimeout( ()=>{
        preloader.style.display = `none`;
        mainContent.style.display = `flex`;
    }, 3000);
});



const form = document.querySelector('#form');
const formBox = document.querySelector('#form-box');
const emailField = document.querySelector('.email-field');
const emailBox = document.querySelector('#email-box');
const emailError = document.querySelector('.email-error');
const passwordField = document.querySelector('.password-field')
const passwordBox = document.querySelector('#password-box');
const passwordError = document.querySelector('.password-error');
const confirmPasswordField = document.querySelector('.confirm-password-field');
const confirmPasswordBox = document.querySelector('#password-box-1');
const confirmPasswordError = document.querySelector('.confirm-password-error');
const successfulNotification = document.querySelector('.successful-notification');
const invalidNotification = document.querySelector('.invalid-notification');
const successfulButton = document.querySelector('.successful-button');
const invalidButton = document.querySelector('.invalid-button');

// for form validation
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailBox.value.trim();
    const password = passwordBox.value.trim();
    const confirmPassword = confirmPasswordBox.value.trim();

    let isValid = true;

    // for email validation
    if (email === '') {
        emailError.textContent = 'Enter your Email';
        emailField.style.border = `0.1rem solid #ff0000`
        isValid = false;
    } else {
        emailError.textContent = '';
        emailField.style.border = `0.1rem solid #008000`;
    }

    // for password validation
    if (password === '') {
        passwordError.textContent = 'Enter your Password';
        passwordField.style.border = `0.1rem solid #ff0000`
        isValid = false;

    } else {
        passwordError.textContent = '';
        confirmPasswordField.style.border = `0.1rem solid #008000`;
    }

    // for confirm password validation
    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Confirm your Password';
        confirmPasswordField.style.border = `0.1rem solid #ff0000`
        isValid = false;

    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordField.style.border = `0.1rem solid #ff0000`;
        isValid = false;

    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordField.style.border = `0.1rem solid #008000`;
    }

    if (!isValid) {
        return;
    }

    // for checking the credential with local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);

    if (user) {
        if (user.password === password) {
            successfulNotification.style.visibility = `visible`;
            formBox.style.visibility = `hidden`;
            localStorage.setItem('loggedInUser', email);
        } else {
            invalidNotification.style.visibility = `visible`;
            formBox.style.visibility = `hidden`;
        }
    } else {
        invalidNotification.style.visibility = `visible`;
        formBox.style.visibility = `hidden`;
    }

});

// real time email validation
emailBox.addEventListener('input', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const email = emailBox.value.trim();
    const user = users.find(user => user.email === email);

    if (user) {
        emailField.style.border = `0.1rem solid #008000`;
        emailError.textContent = '';
    } else {
        emailField.style.border = `0.1rem solid #ff0000`;
        emailError.textContent = 'Email not found';
    }

});

// real time password validation
passwordBox.addEventListener('input', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const email = emailBox.value.trim();
    const password = passwordBox.value.trim();
    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
        passwordField.style.border = `0.1rem solid #008000`;
        passwordError.textContent = '';
    } else {
        passwordField.style.border = `0.1rem solid #ff0000`;
        passwordError.textContent = 'Incorrect Password';
    }
});

// real time confirm password validation
confirmPasswordBox.addEventListener('input', () => {
    const password = passwordBox.value.trim();
    const confirmPassword = confirmPasswordBox.value.trim();

    if (password === confirmPassword) {
        confirmPasswordField.style.border = `0.1rem solid #008000`;
        confirmPasswordError.textContent = '';

    } else if (confirmPassword !== password) {
        confirmPasswordField.style.border = `0.1rem solid #ff0000`;
        confirmPasswordError.textContent = 'Password do not match';
    } else {
        confirmPasswordField.style.border = `0.1rem solid #ff0000`;
        confirmPasswordError.textContent = 'Enter correct password';
    }
});

// for successful notification button
successfulButton.addEventListener('click', () => {
    successfulNotification.style.visibility = `visible`;
    formBox.style.visibility = `hidden`;
    window.location.href = `index.html`;
});

// for invalid notification button
invalidButton.addEventListener('click', () => {
    invalidNotification.style.visibility = `hidden`;
    formBox.style.visibility = `visible`;
    form.reset();
    emailField.style.border = `0.1rem solid #eaeaea`;
    passwordField.style.border = `0.1rem solid #eaeaea`;
    confirmPasswordField.style.border = `0.1rem solid #eaeaea`;
});


// for clear the border and error text when its empty
const inputs = [emailBox, passwordBox, confirmPasswordBox];

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() === '') {
            input.parentElement.style.border = `0.1rem solid #eaeaea`;
            let errorMessage = input.parentElement.querySelector('p');
            if (errorMessage) {
                errorMessage.textContent = '';
            }
        }
    });
});

// for password show & hide
const icon = document.querySelector('#password-icon-1');

icon.addEventListener('click', () => {

    const password = document.querySelector('#password-box');

    if (password.type === 'password') {
        password.type = `text`;
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        password.type = `password`;
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
});

// for confirm password show & hide
const icon2 = document.querySelector('#password-icon-2');

icon2.addEventListener('click', () => {
    const password = document.querySelector('#password-box-1');

    if (password.type === 'password') {
        password.type = `text`;
        icon2.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        password.type = `password`;
        icon2.classList.replace('fa-eye-slash', 'fa-eye');
    }
});

// for password reset show & hide
const icon3 = document.querySelector('#password-icon-3');

icon3.addEventListener('click', () => {
    const password = document.querySelector('.password-reset');

    if (password.type === 'password') {
        password.type = `text`;
        icon3.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        password.type = `password`;
        icon3.classList.replace('fa-eye-slash', 'fa-eye');
    }
});

// for media query placeholder
window.addEventListener('resize', () => {
    const input = document.getElementById('password-box-1');

    if (window.innerWidth <= 412) {
        input.placeholder = 'Confirm';
    } else {
        input.placeholder = 'Confirm Password';
    }
});
window.dispatchEvent(new Event('resize'));



// for emailjs
(function () {
    emailjs.init("VpL8y7nVnXWeS_Zzw")
})();

// for forgot password & password reset
// for step 1 when clicking on forgot Password
const forgotPassword = document.querySelector('#forgot-password');
const step1 = document.querySelector('.step-1');
forgotPassword.addEventListener('click', () => {
    formBox.style.visibility = `hidden`;
    step1.style.visibility = `visible`;
    console.log(forgotPassword);
});

const otpEmailBox = document.querySelector('#otp-email');
const otpEmailError = document.querySelector('.otp-email-error');
otpEmailBox.addEventListener('input', () => {
    const emailRegex = /^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,3}$/;

    if (otpEmailBox.value.trim() === "") {
        otpEmailError.innerHTML = "";
        otpEmailBox.style.border = `0.1rem solid #777`;
    } else if (emailRegex.test(otpEmailBox.value.trim())) {
        otpEmailError.innerHTML = "";
        otpEmailBox.style.border = `0.1rem solid #008000`;
        nextButton.classList.remove('disable-btn');
    } else {
        otpEmailError.innerHTML = 'Enter a valid email';
        otpEmailBox.style.border = '0.1rem solid #ff0000';
        nextButton.classList.add('disable-btn');
    }
})

// for sending OTP via email.js
const nextButton = document.querySelector('.next-button');
const step2 = document.querySelector('.step-2');
nextButton.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === otpEmailBox.value.trim());

    if (!user) {
        otpEmailError.innerHTML = `Please enter a registered email`;
        otpEmailBox.style.border = '0.1rem solid #ff0000';
        return;
    }

    generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

    emailjs.send("service_hdyawar", "template_nj1yarf", {
        email: otpEmailBox.value.trim(),
        passcode: generatedOtp
    }).then(() => {
        step1.style.visibility = `hidden`;
        step2.style.visibility = `visible`;
    }).catch(error => console.log("Email error: ", error));
});

// for 4 digits input code
const otpInputs = document.querySelectorAll('.group input');
document.addEventListener('DOMContentLoaded', () => {
    otpInputs[0].focus();
    otpInputs.forEach((digit, i) => {
        digit.addEventListener('keydown', (e) => {
            if (e.key >= 0 && e.key <= 9) {
                otpInputs[i].value = '';

                setTimeout(() => {
                    if (i < otpInputs.length - 1) {
                        otpInputs[i + 1].focus();
                    }

                    const allFilled = Array.from(otpInputs).every(input => input.value !== '');
                    if (allFilled) {

                        verifyButton.classList.remove('disable-btn');
                    }
                }, 100);
            } else if (e.key === 'Backspace') {
                setTimeout(() => {
                    if (i > 0) otpInputs[i - 1].focus()
                }, 100);
                verifyButton.classList.add('disable-btn');
            }
        });
    });
});

// for resend otp code on email
const reSendOtp = document.querySelector('#confirm-para');
const resetButton = document.querySelector('.reset-button');
let generatedOtp = "";
resetButton.addEventListener('click', () => {
    generatedOtp = 1000 + Math.floor(Math.random() * 9000).toString();

    emailjs.send("service_hdyawar", "template_nj1yarf", {
        email: otpEmailBox.value.trim(),
        passcode: generatedOtp
    }).then(() => {
        alert('A new OTP Code has been sent to your email check your email');
    }).catch(error => console.log("Email error: ", error));
})

// for verify otp
const verifyButton = document.querySelector('.verify-button');
const step3 = document.querySelector('.step-3');
const step6 = document.querySelector('.step-6');
verifyButton.addEventListener('click', () => {
    let enteredOtp = Array.from(otpInputs).map(input => input.value).join('');
    if (enteredOtp === generatedOtp) {
        step2.style.visibility = `hidden`;
        step3.style.visibility = `visible`;
    } else {
        step2.style.visibility = `hidden`;
        step6.style.visibility = 'visible';
    }

});

// for try again otp verification
const tryAgainButton = document.querySelector('.invalid-otp');
tryAgainButton.addEventListener('click', () => {
    step6.style.visibility = `hidden`;
    step1.style.visibility = `visible`;
    otpEmailBox.value = ``;
    otpEmailBox.style.border = `#777`;
});

// for reset button
const step4 = document.querySelector('.step-4');
resetButton.addEventListener('click', () => {
    step3.style.visibility = `hidden`;
    step4.style.visibility = 'visible';
});


// for password reset 
const passwordResetForm = document.querySelector('#password-reset-form');
const passwordResetError = document.querySelector('#password-reset-error');
const passwordResetBox = document.querySelector('#password-reset');
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d!@#$%&*?]{10,}$/;
const step5 = document.querySelector('.step-5');

passwordResetForm.addEventListener('submit', (e) => {
    const passwordReset = passwordResetBox.value.trim();
    e.preventDefault();

    if (passwordReset === '') {
        passwordResetBox.style.border = `0.1rem solid #ff0000`;
        passwordResetError.textContent = `Enter Your New Password`;
        passwordResetError.style.color = `#ff0000`;
        return;

    } else if (!regexPassword.test(passwordReset)) {
        passwordResetBox.style.border = `0.1rem solid #ff0000`;
        passwordResetError.textContent = `Password is not enough strong`;
        passwordResetError.style.color = `#ff0000`;
        return;
    }
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userIndex = users.findIndex(user => user.email === otpEmailBox.value.trim());
    if (userIndex !== -1) {
        users[userIndex].password = passwordReset;
        localStorage.setItem('users', JSON.stringify(users));
        step4.style.visibility = 'hidden';
        step5.style.visibility = 'visible';
    }
});

passwordResetBox.addEventListener('input', () => {
    const passwordReset = passwordResetBox.value.trim();

    if (passwordReset === '') {
        passwordResetBox.style.border = `0.1rem solid #eaeaea`;
        passwordResetError.textContent = ``;
    } else if (regexPassword.test(passwordReset)) {
        passwordResetBox.style.border = `0.1rem solid #008000`;
        passwordResetError.textContent = `Strong password ✅`;
        passwordResetError.style.color = `#008000`;
    } else {
        passwordResetBox.style.border = `0.1rem solid #ff0000`;
        passwordResetError.textContent = `Weak password ❌`
        passwordResetError.style.color = `#ff0000`;
    }
});


// for redirect to signin page 
const reDirectPage = document.querySelector('#last-para');
reDirectPage.addEventListener('click', () => {
    step5.style.visibility = `hidden`;
    window.location.href = `signin.html`;
});
