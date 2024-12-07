const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');

function showSignUp() {
    loginContainer.classList.add('hidden');
    signupContainer.classList.remove('hidden');
}

function showLogin() {
    signupContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
}