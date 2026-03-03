document.addEventListener('DOMContentLoaded', () => {
    // handle registration form submission
    const form = document.getElementById('regform');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                surname: document.getElementById('surname').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                repeatPassword: document.getElementById('repeatPassword').value
            };

            if (formData.password !== formData.repeatPassword) {
                alert('Passwords do not match');
                return;
            }

            localStorage.setItem('registrationData', JSON.stringify(formData));
            window.location.href = 'success.html';
        });
    }

    // populate success page with stored data
    const details = document.getElementById('details');
    if (details) {
        const stored = localStorage.getItem('registrationData');
        if (stored) {
            const data = JSON.parse(stored);
            details.innerHTML = `
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Surname:</strong> ${data.surname}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Password:</strong> ${data.password}</p>
                <p><strong>Repeat Password:</strong> ${data.repeatPassword}</p>
            `;
        } else {
            details.textContent = 'No registration data found.';
        }
    }
});