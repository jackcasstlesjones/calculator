const equalsBtn = document.getElementById("=");
const cancelBtn = document.getElementById("C");
const screenContainer = document.querySelector(".screen");
const firstNumPlaceholder = document.querySelector(".first-num-placeholder");

const buttons = document.querySelectorAll(".calculator-button");
const operationBtns = document.querySelectorAll(".operation-button");
console.log(operationBtns);
const numberBtns = document.querySelectorAll(".number-button");
let displayContent = document.querySelector(".screen-content");

// Two number variables and an operator variable
let firstNum = "";
let secondNum = "";
let operator = "";

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Display content in screen div
const displayContentFunc = function (number) {
  displayContent.textContent = number;
};

// Create placeholder element for first number
const createPlaceHolder = function () {
  const placeholder = document.createElement("div");
  screenContainer.appendChild.placeholder;
};

createPlaceHolder();
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// Push number buttons value ID to firstNum or secondNum variables depending on .length of operator variable
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", function () {
    if (operator.length < 1) {
      firstNum = firstNum.concat(numberBtns[i].id);
      displayContentFunc(firstNum);
      console.log(firstNum);
    } else if (operator.length == 1) {
      secondNum = secondNum.concat(numberBtns[i].id);
      displayContentFunc(secondNum);
      console.log(secondNum);
    }
  });
}

// Stores operator buttons in operator array
for (let i = 0; i < operationBtns.length; i++) {
  operationBtns[i].addEventListener("click", function () {
    if (operator.length < 1) {
      operator = operator.concat(operationBtns[i].id);
      firstNumPlaceholder.textContent = firstNum + " " + operator;
      console.log(operator);
    }
  });
}

equalsBtn.addEventListener("click", function () {
  firstNumPlaceholder.textContent = "";
  displayContentFunc(operate(operator, firstNum, secondNum));
  firstNum = "";
  secondNum = "";
  operator = "";
});

cancelBtn.addEventListener("click", function () {
  firstNumPlaceholder.textContent = "";
  firstNum = "";
  secondNum = "";
  operator = "";
  displayContentFunc(firstNum);
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
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
