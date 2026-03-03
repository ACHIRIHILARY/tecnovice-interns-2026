<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPass = document.getElementById('confirm_password').value;

        // Basic validation
        if (password !== confirmPass) {
            alert('Passwords do not match!');
            return;
        }

        // Open a new blank window
        const newWindow = window.open('', '_blank');
        
        // Write the content to the new window
        newWindow.document.write(`
            <html>
            <head>
                <title>User Profile</title>
                <style>
                    body { font-family: sans-serif; padding: 50px; text-align: center; background: black; }
                    .card { background: white; padding: 20px; display: inline-block; border-radius: 10px; shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    h1 { color: green; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h1>Registration Successful!</h1>
                    <p><strong>Welcome,</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Security status:</strong> Password Encrypted</p>
                    <br>
                    <button onclick="window.close()">Close this page</button>
                </div>
            </body>
            </html>
        `);
        newWindow.document.close(); 
    });
=======
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
>>>>>>> 1b243d765ce09f2772a8502b6d5b426b600d6b94
});