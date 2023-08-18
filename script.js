const equalsBtn = document.getElementById("=");
const cancelBtn = document.getElementById("C");
const screenContainer = document.querySelector(".screen");
const firstNumPlaceholder = document.querySelector(".first-num-placeholder");

const buttons = document.querySelectorAll(".calculator-button");
const operationBtns = document.querySelectorAll(".operation-button");

const numberBtns = document.querySelectorAll(".number-button");
let displayContent = document.querySelector(".screen-content");

// Two number variables and an operator variable
let firstNum = "";
let secondNum = "";
let operator = "";

// Display content in screen div
const updateDisplay = function (number) {
  displayContent.textContent = number;
};

// Push number buttons value ID to firstNum or secondNum variables depending on .length of operator variable
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", function () {
    if (operator.length < 1) {
      firstNum = firstNum.concat(numberBtns[i].id);
      updateDisplay(firstNum);
    } else if (operator.length == 1) {
      secondNum = secondNum.concat(numberBtns[i].id);
      updateDisplay(secondNum);
    }
  });
}

// Stores operator buttons in operator array
for (let i = 0; i < operationBtns.length; i++) {
  operationBtns[i].addEventListener("click", function () {
    if (operator.length === 1) {
      doCalculation();
    }
    operator = operator.concat(operationBtns[i].id);
    firstNumPlaceholder.textContent = firstNum + " " + operator;
  });
}

// Calculator calculation function
const doCalculation = function () {
  firstNumPlaceholder.textContent = "";
  if (operator === "/" && secondNum === "0") {
    doClear();
    return updateDisplay("STOP IT!!!");
  }
  calculatorResult = operate(operator, firstNum, secondNum);
  updateDisplay(Math.round(calculatorResult * 1000) / 1000);
  firstNum = Math.round(calculatorResult * 1000) / 1000;
  secondNum = "";
  operator = "";
};

// Calculator clear function
const doClear = function () {
  firstNum = "";
  secondNum = "";
  operator = "";
  firstNumPlaceholder.textContent = "";
  updateDisplay(firstNum);
};

// Equals button event listener
equalsBtn.addEventListener("click", function () {
  if (operator.length < 1 || secondNum.length < 1) {
    return doClear();
  }
  doCalculation();
  firstNumPlaceholder.textContent = "";
  firstNum = "";
  secondNum = "";
  operator = "";
});

// Cancel button clears everything
cancelBtn.addEventListener("click", function () {
  doClear();
});

//////////////////////////////////////////////////

// Operator function that takes an operator and two numbers
const operate = function (op, num1, num2) {
  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "/") {
    return divide(num1, num2);
  }
};

// Basic calculator functions
const add = function (a, b) {
  return a * 1 + b * 1;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};
