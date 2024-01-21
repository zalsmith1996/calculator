// Elements 
let display = document.querySelector('.display');
let nodeList = document.querySelectorAll('button');
const buttons = [...nodeList];

// If classlist includes 'operator' => operator

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
                console.log('Number clicked.');
            break;
            case ('clear'):
                console.log('Clear clicked.');
            break;
            case ('equal'):
                console.log('Equal clicked.');
            break;
            case ('operator'):
                console.log('Operator clicked.');
            break;
            default:
                console.log('something');
            break;
        }
    });
});

function storeNumbers(number) {
    if (firstNum === '' || secondNum !== '') {
        firstNum = number;
        return firstNum;
    } else {
        secondNum = number;
    }
    return secondNum;
}