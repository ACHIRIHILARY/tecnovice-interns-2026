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