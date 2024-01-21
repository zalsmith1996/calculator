let display = document.querySelector('.display');
let nodeList = document.querySelectorAll('button');
const buttons = [...nodeList];

let firstNum = '';
let secondNum = '';
let operator = '';
display.value = '0';

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {
            case ('number'):
                display.value = e.target.value;
                if (firstNum === '' && secondNum !== '') {
                    firstNum = Number(e.target.value);
                } else {
                    secondNum = Number(e.target.value);
                }
            break;
            case ('clear'):
                firstNum = '';
                secondNum = '';
                operator = '';
                display.value = '0';
            break;
            case ('equal'):
                if (firstNum !== '' && secondNum !== '' && operator !== '') {
                    if (operator === '+') {
                        display.value = add(firstNum, secondNum);
                        firstNum = Number(display.value);
                    } else if (operator === '-') {
                        display.value = subtract(firstNum, secondNum);
                        firstNum = Number(display.value);
                    } else if (operator === '*') {
                        display.value = multiply(firstNum, secondNum);
                        firstNum = Number(display.value);
                    } else if (operator === '/') {
                        display.value = divide(firstNum, secondNum);
                        firstNum = Number(display.value);
                    } else {
                        display.value = 'ERROR';
                    }
                }
            break;
            case ('operator'):
                operator = e.target.value;
            break;
            default:
                console.log('Something unexpected has occurred.');
            break;
        }
    });
});
