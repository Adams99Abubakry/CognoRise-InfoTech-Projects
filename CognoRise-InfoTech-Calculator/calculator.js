// Function to append value to the calculator screen
function appendValue(value) {
    const screen = document.getElementById('calculator-screen');
    if (screen.innerHTML === '0' && value !== '.') {
        screen.innerHTML = value;
    } else {
        screen.innerHTML += value;
    }
}

// Function to clear the calculator screen
function clearScreen() {
    document.getElementById('calculator-screen').innerHTML = '0';
}

// Function to delete the last character on the screen
function backspace() {
    const screen = document.getElementById('calculator-screen');
    screen.innerHTML = screen.innerHTML.slice(0, -1) || '0';
}

// Function to calculate the result of the expression
function calculateResult() {
    const screen = document.getElementById('calculator-screen');
    try {
        screen.innerHTML = eval(screen.innerHTML.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch {
        screen.innerHTML = 'Error';
    }
}
