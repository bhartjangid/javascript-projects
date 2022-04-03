class Calculator {
    constructor(preButton,curButton){
        this.preButton = preButton;
        this.curButton = curButton;
        this.clear()
    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }
    delete() {

    }
    appendNumber(number){
this.currentOperand = number
    }
    chooseOperation(operation){

    }
    comput(){

    }
    updatedisplay() {
 this.curButton.innerText = this.currentOperand;
    }
}

const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const preButton = document.querySelectorAll('[data-previous]');
const curButton = document.querySelectorAll('[data-current]');

const calculator = new Calculator(preButton,curButton);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updatedisplay();
    })
})