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
const userPhoneError = document.querySelector('#user-pheone-error');
const pwdError = document.querySelector('#pwd-error');
const pwdCError = document.querySelector('#pwdC-error');

// Event listeners and validation functions

// First Name
firstName.addEventListener('pointerover', (event) => {
    if (firstName.value === '') {
    firstNameError.textContent = 'Please type your first name';
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
