const btns = document.getElementsByClassName('btns');
const screen = document.getElementById('screen-text');

let operator = '+';

let firstNumber = 0;

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', function() {
        let attributeArray = btn.classList;
        operator = attributeArray[1];
        if(screen.textContent == '0' && !isNaN(parseInt(operator))) {
            screen.textContent = '';
        }
        if (!isNaN(parseInt(operator))) {
            addNumberToScreen(parseInt(operator));
        }
        if (operator == 'clear') {
            screen.textContent = '0';
            firstNumber = 0;
        }
        if (operator != 'clear' && operator != '=' && isNaN(parseInt(operator))) {
            assignOperator(operator);
            firstNumber = parseInt(screen.textContent);
            screen.textContent = '0'
        }
        if (operator == '=') {
            calculate()
        }
    })
})

function addNumberToScreen(Number) {
    if (screen.textContent.length <= 7) {
        screen.textContent = screen.textContent + Number;
    } 
    
}

let currentOperator = '+';

function assignOperator(operator) {
    switch(operator) {
        case '+':
            currentOperator = '+';
          break;
        case '-':
            currentOperator = '-';
          break;
        case '*':
            currentOperator = '*';
            break;
        case '/':
            currentOperator = '/';
            break;
      }
}

function calculate() {
    switch(currentOperator) {
        case '+':
            screen.textContent = firstNumber + parseInt(screen.textContent);
          break;
        case '-':
            screen.textContent = firstNumber - parseInt(screen.textContent);
          break;
        case '*':
            screen.textContent = firstNumber * parseInt(screen.textContent);
            break;
        case '/':
            screen.textContent = Math.round(firstNumber / parseInt(screen.textContent));
            break;
    }
}



    