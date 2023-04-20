const buttons = document.querySelectorAll('button');
const screenType = document.querySelector('div.screen.type');
const screenAnswer = document.querySelector('div.screen.answer');

buttons.forEach(btn => btn.addEventListener('click', buttonClick));

function buttonClick() {
    if (this.textContent == 'CLR') {
        screenAnswer.textContent = 0;
        screenType.textContent = 0;
    } else {
        if (screenType.textContent == 0) screenType.textContent = '';
        screenType.textContent += this.textContent;
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a * 100 / b / 100;
}