let currNum = '';
let firstNum = '';
let secondNum = '';
let operand = '';
let answer = '';

const buttons = document.querySelectorAll('button');
const screenType = document.querySelector('div.screen.type');
const screenAnswer = document.querySelector('div.screen.answer');

buttons.forEach(btn => btn.addEventListener('click', buttonClick));

function buttonClick() {
    // if (this.textContent == 'CLR') {
    //     clearScreen();
    // } else if (this.textContent == '<') {
    //     backSpace();
    // } else if (this){
    //     operand();
    // } else{
    //     digit();
    // }

    switch (this.textContent) {
        case 'CLR':
            clearScreen();
            break;
        case '<':
            backSpace();
            break;
        case '+':
        case '-':
        case '/':
        case '*':
            if (operand === '/' || operand === '*') secondNum = 1;

            if (operand === '') operand = this.textContent;
            useOperand();
            operand = this.textContent;
            break;
        case '=':
            
            useOperand();
            break;
        case '.':
            useDecimal();
            break;
        default:
            useDigit(this.textContent);
    }
}

//#region operand Functions

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * 100 * b / 100;
}

function divide(a, b) {
    return a * 100 / b / 100;
}
//#endregion

//#region display functions
function clearScreen() {
    currNum = '';
    firstNum = '';
    secondNum = '';
    operand = '';
    answer = '';

    screenAnswer.textContent = '0';
    screenType.textContent = currNum;

    console.log(`clear - current stored: ${currNum}`);
}

function backSpace() {
    currNum = currNum.slice(0, currNum.length - 1);
    console.log(`backspace - current stored: ${currNum}`);
    screenType.textContent = currNum;
}
//#endregion
function useOperand() {
    if (operand === '*') if (answer === '') answer = 1;
    if (operand === '/') if (answer === '') answer = currNum**2;
    firstNum = answer;
    if (currNum !== '') secondNum = currNum;
    console.log(`arithmetic: ${firstNum} ${operand} ${secondNum}`);
    evaluate();
    currNum = '';
}

function useDigit(digit) {
    currNum += digit;
    console.log(`${digit} added - current stored: ${currNum}`);
    screenType.textContent = currNum;

}

function useDecimal() {
    if (!currNum.includes('.')) currNum += '.';
    console.log(`decimal - current stored: ${currNum}`);
    screenType.textContent = currNum;
}


function evaluate() {
    switch (operand) {
        case '+':
            answer = add(firstNum, secondNum);
            break;
        case '-':
            answer = subtract(firstNum, secondNum);
            break;
        case '*':
            answer = multiply(firstNum, secondNum);
            break;
        case '/':
            answer = divide(firstNum, secondNum);
            break;
        default:
    }

    answer = answer.toString().slice(0, 8);
    updateScreen();
    console.log(`evaluate - answer: ${answer}`);
}

function updateScreen() {
    screenType.textContent = currNum;
    screenAnswer.textContent = answer;
}