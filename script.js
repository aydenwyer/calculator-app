const output = document.getElementById('output');

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
    var firstOperand = display.substr(0, display.indexOf('+', '-', '*', "/"));
    var secondOperand = display.substr(display.indexOf('+', '-', '*', "/")+1);
    var operatorPosition = display.indexOf('+', '-', '*', "/");
    var operator = display.charAt(operatorPosition);
    
    // console.log(firstOperand);
    // console.log(secondOperand);
    // console.log(operator);

    switch (operator) {
        case "+":
            result = Number(firstOperand) + Number(secondOperand);
            console.log(result);
            break;
        case "-":
            result = Number(firstOperand) - Number(secondOperand);
            console.log(result);
            break;
        case "*":
            result = Number(firstOperand) * Number(secondOperand);
            console.log(result);
            break;
        case "/":
            result = Number(firstOperand) / Number(secondOperand);
            console.log(result);
            break;
    };
};