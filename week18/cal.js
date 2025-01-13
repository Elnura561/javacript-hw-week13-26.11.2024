const nuberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.oper');
const display = document.querySelector('#display');

let currentInput = '';
let previousInput = '';
let operator = "";

nuberButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentInput += btn.textContent;
        display.value = currentInput;
    });
});
    
operatorButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(previousInput && operator){
            operatorFun();
            previousInput = currentInput;
            currentInput='';
        }
        if (operator === '') {
            previousInput = currentInput;
            currentInput = '';
            display.value = previousInput;
        }   else {
            display.value = previousInput;
        }
        if(btn.textContent !== "=") {
        operator = btn.textContent;
        }
        if(operator==="ac"){
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '0';
        }

    });
});
const equal = document.querySelector('.equal');

function operatorFun(){
    let result = currentInput;
    console.log(previousInput, currentInput, operator);
    switch (operator) {
        case '+':
            result = parseInt(currentInput) + parseInt(previousInput);
            break;
        case '-':
            result = parseInt(previousInput) - parseInt(currentInput);
            break;
        case 'x':
            result = parseInt(previousInput) * parseInt(currentInput);
            break;
        case '/':
            result = parseInt(previousInput) / parseInt(currentInput);
            break;
            case "+/-":
                result = parseInt(currentInput) * -1;
                break;
            case "%":
                result = parseInt(currentInput) / 100;
                break;
        default:
            break;
    }
    console.log(result, previousInput, currentInput);
    display.value = result;
    currentInput = result;
    previousInput = '';
}
const switchButton = document.querySelector('.switch');
switchButton.addEventListener('click', () => {
    currentInput *= -1;
    display.value = currentInput;
});
const percentButton = document.querySelector('.percent');
percentButton.addEventListener('click', () => {
    currentInput /= 100;
    display.value = currentInput;
});

const dotButton = document.querySelector('.dot');
dotButton.addEventListener('click', () => {
    if(currentInput.includes(".")){
    currentInput += '.';
    display.value = currentInput;
}
});
