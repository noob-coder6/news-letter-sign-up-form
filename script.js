document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('email-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    
    const main = document.querySelector('main');
    const signUpCard = document.getElementById('sign-up-card');
    const successCard = document.getElementById('success-card');
    const submittedEmailSpan = document.getElementById('submitted-email');
    const dismissButton = document.getElementById('dismiss-button');

    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            // On success
            signUpCard.classList.add('hidden');
            successCard.classList.remove('hidden');
            main.classList.add('success-state');
            submittedEmailSpan.textContent = email;
            emailInput.classList.remove('error');
            emailError.style.display = 'none';
        } else {
            // On error
            emailInput.classList.add('error');
            emailError.style.display = 'flex';
            emailError.textContent = 'Valid email required';
        }
    });

    dismissButton.addEventListener('click', () => {
        successCard.classList.add('hidden');
        signUpCard.classList.remove('hidden');
        main.classList.remove('success-state');
        emailInput.value = ''; // Clear the input for the next use
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});