function handleLogin(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('loggedInUser', username);

        window.location.href = 'home.html';
    } else {
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.textContent = 'Please enter both username and password.';
        } else {
            const newErrorMessage = document.createElement('p');
            newErrorMessage.id = 'error-message';
            newErrorMessage.textContent = 'Please enter both username and password.';
            newErrorMessage.style.color = 'red';
            document.querySelector('form').appendChild(newErrorMessage);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});