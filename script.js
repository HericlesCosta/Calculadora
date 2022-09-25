const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.display span');
const signs = document.querySelectorAll('.sign');
const equal = document.querySelector('.equal');
const percent = document.querySelector('.percent');
const negative = document.querySelector('.soso');
const clear = document.querySelector('.clear');
const comma = document.querySelector('.comma');

let firstValue = '';
let isFirstValue = false;
let secondValue = '';
let isSecondValue = false;
let sign = '';
let resultValue = 0;
let commaValue = ''

for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstValue === false){
            getFirstValue(atr)
        }
        if (isSecondValue === false){
            getSecondValue(atr)
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = '';
    firstValue += el;
    if (firstValue.length > 8){
        firstValue = 0;
        resultValue = firstValue;
        result.innerHTML = resultValue;
    } else {
        result.innerHTML = firstValue;
        firstValue = +firstValue;
    }
}

function getSecondValue(el) {
    if (firstValue != '' && sign != ''){
        secondValue += el;
        if (secondValue.length > 8){
            secondValue = 0;
            resultValue = secondValue;
            result.innerHTML = resultValue;
        } else {
            result.innerHTML = secondValue;
            secondValue = +secondValue;
        }
    }
}

comma.addEventListener('click', (e) => {
    commaValue = e.target.getAttribute('value');
    if (firstValue != '' && secondValue == ''){
        getCommaValue(commaValue)
    }
    if (secondValue != '' && firstValue != ''){
        getCommaValue(commaValue)
    }
})

function getCommaValue(el) {
    if (firstValue != '' && secondValue == ''){
        firstValue += el;
        result.innerHTML = firstValue;
    }
    if (secondValue != '' && firstValue != ''){
        secondValue += el;
        result.innerHTML = secondValue;
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++){
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign()

equal.addEventListener('click', () => {
    result.innerHTML = '';
    if (sign === '+'){
        resultValue = firstValue + secondValue;
    } else if (sign === '-'){
        resultValue = firstValue - secondValue;
    } else if (sign === 'x'){
        resultValue = firstValue * secondValue;
    } else if (sign === '/'){
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = '';

    checkResultLength();
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);

    if (resultValue.length > 8){
        result.innerHTML = 'Long...'
    } else if (resultValue.length == 8){
        result.innerHTML = resultValue.toFixed(2)
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = '';
    if (firstValue != ''){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != '' && secondValue != '' && sign != ''){
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = '';
    if (firstValue != ''){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != '' && secondValue != '' && sign != ''){
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;
    firstValue = '';
    isFirstValue = false;
    secondValue = '';
    isSecondValue = false;
    sign = '';
    resultValue = 0;
})