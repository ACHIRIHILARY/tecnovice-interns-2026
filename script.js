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