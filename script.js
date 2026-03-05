<<<<<<< HEAD
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
});
>>>>>>> 351c5903e33f1c63416ed137ab2276924c89a701
