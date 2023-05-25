// Initialize vars for each input field
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const userEmail = document.querySelector('#user-email');
const userPhone = document.querySelector('#user-phone');
const pwd = document.querySelector('#pwd');
const pwdC = document.querySelector('#pwdC');
const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const userEmailError = document.querySelector('#user-email-error');
const userPhoneError = document.querySelector('#user-phone-error');
const pwdError = document.querySelector('#pwd-error');
const pwdCError = document.querySelector('#pwdC-error');

// Event listeners and validation functions

// First Name
firstName.addEventListener('pointerover', (event) => {
    if (firstName.value === '') {
    firstNameError.textContent = 'Please enter your first name';
}})

firstName.addEventListener('focusout', (event) => {
    if (firstName.value === '') {
        firstName.classList.remove('valid');
        firstName.classList.add('invalid');
    } else {
        firstNameError.textContent = '';
        firstName.classList.remove('invalid');
        firstName.classList.add('valid');
}})

// Last Name
lastName.addEventListener('pointerover', (event) => {
    if (lastName.value === '') {
        lastNameError.textContent = 'Please type your last name';
}})

lastName.addEventListener('focusout', (event) => {
    if (lastName.value === '') {
        lastName.classList.remove('valid');
        lastName.classList.add('invalid');
    } else {
        lastName.classList.remove('invalid');
        lastName.classList.add('valid');
        lastNameError.textContent = '';
}})

// Email
userEmail.addEventListener('pointerover', (event) => {
    if (userEmail.value === '') {
        userEmailError.textContent = 'Please enter a valid emial address';
}})

userEmail.addEventListener('keyup', (event) => {
    if (userEmail.value != '' && userEmail.checkValidity()) {
        userEmail.classList.remove('hide-pseudo-invalid');
        userEmail.classList.remove('invalid');
        userEmail.classList.add('hide-pseudo-valid');
        userEmail.classList.add('valid');
        userEmailError.textContent = '';

    } else {
        userEmail.classList.remove('hide-pseudo-valid');
        userEmail.classList.remove('valid');
        userEmail.classList.add('hide-pseudo-invalid');
        userEmail.classList.add('invalid');
        userEmailError.textContent = 'Please enter a valid emial address';
    }
    console.log(userEmail.validity)
    })

// Telephone
userPhone.addEventListener('pointerover', (event) => {
    if (userPhone.value === '') {
        userPhoneError.textContent = 'Please enter a 10-digit phone number';
    }
})

userPhone.addEventListener('keyup', (event) => {
    console.log(userPhone.validity);
    if (userPhone.value != '' && userPhone.checkValidity()) {
        userPhone.classList.remove('hide-pseudo-invalid');
        userPhone.classList.remove('invalid');
        userPhone.classList.add('hide-pseudo-valid');
        userPhone.classList.add('valid');
        userPhoneError.textContent = '';

    } else {
        userPhone.classList.remove('hide-pseudo-valid');
        userPhone.classList.remove('valid');
        userPhone.classList.add('hide-pseudo-invalid');
        userPhone.classList.add('invalid');
        if (userPhone.validity.patternMismatch) {
            userPhoneError.textContent = 'Please enter in the format: 123-456-789';
        }
    }
    })


    