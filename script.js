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
});