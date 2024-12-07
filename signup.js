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
document.querySelector('.form').addEventListener('submit', function (event) {
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault(); // Ndalon dorëzimin e formës
        alert('Passwords do not match. Please try again.');
    }
});


