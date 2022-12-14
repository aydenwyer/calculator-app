const output = document.getElementById('output');
const operators = document.querySelectorAll('.operator');
// const addition = document.querySelector('.add');
// const division = document.querySelector('.divide');
// const subtraction = document.querySelector('.subtract');
// const multiplication = document.querySelector('.multipy');

operators.forEach(operator => {
    operator.addEventListener('click', findOperator => {
        if (operator.classList.contains('add')) {
            globalThis.sign = '+';
        }
        else if (operator.classList.contains('subtract')) {
            globalThis.sign = '-';
        }
        else if (operator.classList.contains('multiply')) {
            globalThis.sign = '*';
        }
        else if (operator.classList.contains('divide')) {
            globalThis.sign = '/';
        };
    });
});

function display(number) {
    var display = output.getAttribute('value');
    if (display === "0") {
        output.removeAttribute('value');
        output.setAttribute('value', number);
    }
    else {
        output.setAttribute('value', display + number);
    };
};

function operator(sign) {
    var display = output.getAttribute('value');
    output.setAttribute('value', display + sign);
};

function clearContent() {
    output.removeAttribute('value');
    output.setAttribute('value', 0);
};

function equals() {
    var display = output.getAttribute('value');
    var firstOperand = display.substr(0, display.indexOf(sign));
    var secondOperand = display.substr(display.indexOf(sign)+1);

    switch (sign) {
        case "+":
            result = Number(firstOperand) + Number(secondOperand);
            output.removeAttribute('value');
            output.setAttribute('value', result);
            break;
        case "-":
            result = Number(firstOperand) - Number(secondOperand);
            output.removeAttribute('value');
            output.setAttribute('value', result);
            break;
        case "*":
            result = Number(firstOperand) * Number(secondOperand);
            output.removeAttribute('value');
            output.setAttribute('value', result);
            break;
        case "/":
            result = Number(firstOperand) / Number(secondOperand);
            output.removeAttribute('value');
            output.setAttribute('value', result);
            break;
    };
};