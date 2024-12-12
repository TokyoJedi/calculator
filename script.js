/**
 *  Base JavaScript for Calculator
 * 
 * 
 */

let num1 = null;
let operator = null;
const operators = ["+", "-", "*", "/"];
let num2 = null;
let isFirstDigit = true;
let eval = false;
let currentDisplayedValue = null;
const resultElement = document.querySelector('#results');

document.addEventListener("DOMContentLoaded", () => {
    const allButtons = document.getElementsByClassName('buttons');

    Array.from(allButtons).forEach((btn) => {
        btn.addEventListener("mousedown", (e) => {
            currentElementValue = e.target.getAttribute('value');

            if (currentElementValue == "clear") return clearDisplay()

            if (currentElementValue) {
                if (num1 === null) {
                    num1 = currentElementValue;
                    return updateDisplay(num1);
                }

                if (num1 !== null && operator === null) {
                    if (operators.includes(currentElementValue)) {
                        operator = currentElementValue;
                        return updateDisplay(operator)
                    }
                    num1 += currentElementValue;
                    return updateDisplay(num1) // add addtl digits
                }

                if (num1 && operator) {
                    if (isFirstDigit) {
                        num2 = currentElementValue;
                        isFirstDigit = !isFirstDigit;
                        return updateDisplay(num2)
                    }
                    if (currentElementValue !== "equals") {
                        num2 += currentElementValue; // add addtl digits
                        return updateDisplay(num2)
                    }

                    return operate()
                }
            }
        })
    })
})

const updateDisplay = (value = 0, eval = false) => {

    if (eval) return resultElement.textContent = value

    if (value === 0) return resultElement.textContent = 0

    if (num1 && operator === null && isFirstDigit) {
        isFirstDigit = !isFirstDigit;
        return resultElement.textContent = num1
    }

    if (num1 && operator === null && !isFirstDigit)
        return resultElement.textContent = num1

    if (!num2) {
        isFirstDigit = !isFirstDigit;
        return resultElement.textContent = num1 + ' ' + operator
    }

    return resultElement.textContent = num1 + ' ' + operator + ' ' + num2
}

const resetVars = () => {
    num1 = null;
    num2 = null;
    operator = null;
    isFirstDigit = false;
}

const clearDisplay = () => {
    resetVars();
    return updateDisplay()
}

const backspaceOnce = () => {
}

const operate = () => {
    let final = null;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch (operator) {
        case "+":
            final = add(num1, num2);
            break;
        case "-":
            final = subtract(num1, num2);
            break;
        case "*":
            final = multiply(num1, num2);
            break;
        case "/":
            final = divide(num1, num2);
            break;
        default:
            console.log('default case');
    }
    return updateDisplay(final, true)
}

const add = (...args) => {
    return args.reduce((previous, current) => {
        return previous + current
    })
}
// console.log(add(10, 15));

const subtract = (...args) => {
    return args.reduce((previous, current) => {
        return previous - current
    })
}
// console.log(subtract(10, 15));

const multiply = (...args) => {
    return args.reduce((previous, current) => {
        return previous * current
    })
}
// console.log(multiply(10, 15));

const divide = (...args) => {
    if (args.indexOf(0) == -1) {
        return args.reduce((previous, current) => {
            return previous / current
        });
    }
    return console.log("Please enter a valid number");
}
// console.log(divide(10, 10));