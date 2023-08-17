const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");
const zeroBtn = document.getElementById("0");
const multiplyBtn = document.getElementById("*");
const divideBtn = document.getElementById("/");
const addBtn = document.getElementById("+");
const equalsBtn = document.getElementById("=");
const cancelBtn = document.getElementById("C");

const buttons = document.querySelectorAll(".calculator-button");
const operationBtns = document.querySelectorAll(".operation-button");
console.log(operationBtns);
const numberBtns = document.querySelectorAll(".number-button");

// Two number variables and an operator variable
let firstNum = [];
let secondNum = [];
let operator = [];

let displayContent = document.querySelector(".screen-content");
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Display content in screen div
const displayContentFunc = function (key) {
  displayContent.textContent = key;
};
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// First array storer eventListener
let resultsArrayOne = [];
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", function () {
    if (operator.length == 1) {
      return;
    }
    resultsArrayOne.push(numberBtns[i].id);
    firstNum = resultsArrayOne.join("");

    console.log(firstNum);
  });
}

// Stores operator buttons in operator array
for (let i = 0; i < operationBtns.length; i++) {
  operationBtns[i].addEventListener("click", function () {
    if (operator <= 1) {
      operator.push(operationBtns[i].id);
      jointOperator = operator.join("");
      console.log(jointOperator);
      return jointOperator;
    }
  });
}

// Push to second array if operator is in its own array
let resultsArrayTwo = [];
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", function () {
    if (operator.length == 1) {
      resultsArrayTwo.push(numberBtns[i].id);
      secondNum = resultsArrayTwo.join("");

      console.log(secondNum);
    }
  });
}

equalsBtn.addEventListener("click", function () {
  // console.log(jointOperator, firstNum, secondNum);
  return console.log(operate(jointOperator, firstNum, secondNum));
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
  Number(num2);
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
  return a + b;
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
