<<<<<<< HEAD
<<<<<<< HEAD
=======
/* script.js */
let currentInput = "0";

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    const lastChar = currentInput.slice(-1);
    // Algorithm: Check if the last character is already an operator
    if (["+", "-", "*", "/"].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + op;
    } else {
        currentInput += op;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
    updateDisplay();
}

function calculate() {
    try {
        // Using Function constructor as a safer alternative to eval()
        currentInput = new Function('return ' + currentInput)().toString();
    } catch (e) {
        currentInput = "Error";
        setTimeout(clearDisplay, 1500);
    }
    updateDisplay();
}
=======
>>>>>>> b7ab4717ff09bb37cd073bdcb7eaa0aca43dab70
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.dataset.number;
        const action = button.dataset.action;

        if(number !== undefined) {
            // Append number or dot
            if(number === '.' && currentInput.includes('.')) return;
            currentInput += number;
        } else if(action !== undefined) {
            if(action === 'clear') {
                currentInput = '';
            } else if(action === 'delete') {
                currentInput = currentInput.slice(0, -1);
            } else if(action === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = 'Error';
                }
            } else {
                // Operators
                if(currentInput === '') return;
                const lastChar = currentInput[currentInput.length - 1];
                if(['+', '-', '*', '/'].includes(lastChar)) return;
                currentInput += action;
            }
        }
        display.textContent = currentInput || '0';
    });
<<<<<<< HEAD
=======
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
>>>>>>> 7b85e653f368f9fe63145ed7f65741dba7ea0137
});
=======
});
>>>>>>> 351c5903e33f1c63416ed137ab2276924c89a701
>>>>>>> b7ab4717ff09bb37cd073bdcb7eaa0aca43dab70
