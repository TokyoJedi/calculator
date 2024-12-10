/**
 *  Base JavaScript for Calculator
 * 
 * 
 */

let num1 = null;
let operator = null;
let num2 = null;
let displayValue = null;

document.addEventListener("DOMContentLoaded", () => {
    const allButtons = document.getElementsByClassName('buttons');

    Array.from(allButtons).forEach((value, index) => {
        value.addEventListener("mousedown", (e) => {
            // console.log(e.target.textContent);
            displayValue = e.target.textContent;
            updateDisplay(displayValue);
        })
    })
})

const updateDisplay = (value) => {
    const resultElement = document.querySelector('#results');
    resultElement.textContent = value;

}

const operate = (num1, operator, num2) => {
    return operator(num1, num2)
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
    return console.log("Please enter a value number");
}
// console.log(divide(10, 10));