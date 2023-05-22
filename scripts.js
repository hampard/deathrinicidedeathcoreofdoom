document.addEventListener('DOMContentLoaded', function() {
    var correctPassword = 'monstpampers';
    var passwordModal = document.getElementById('passwordModal');
    var passwordInput = document.getElementById('passwordInput');
    var submitButton = document.getElementById('submitButton');
    var errorMessage = document.getElementById('errorMessage');

    function checkPassword() {
        if (passwordInput.value === correctPassword) {
            localStorage.setItem('password', correctPassword);
            passwordModal.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Incorrect password. Please try again.';
        }
    }

    var storedPassword = localStorage.getItem('password');
    if (storedPassword === correctPassword) {
        passwordModal.style.display = 'none';
    } else {
        submitButton.addEventListener('click', checkPassword);
        passwordInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

