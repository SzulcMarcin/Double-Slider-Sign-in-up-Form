const signUpButton = document.querySelector('.btn-text-signUp');
const signInButton = document.querySelector('.btn-text-signIn');
const mobileBtn = document.querySelector('.mobile-btn');
const mobileBtn2 = document.querySelector('.mobile-btn2');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('active');
    console.log('dziala');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('active');
});

mobileBtn.addEventListener('click', () => {
    container.classList.remove('active');
    container.classList.remove('active-mobile-signUp');
    container.classList.add('active-mobile-signIn');
});

mobileBtn2.addEventListener('click', () => {
    container.classList.add('active-mobile-signUp');
    container.classList.remove('active-mobile-signIn');
    container.classList.remove('active');
    
});