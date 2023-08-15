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
let displayContent = document.querySelector(".screen-content");
let resultsArray = [];

const displayContentFunc = function (key) {
  displayContent.textContent = key;
};

const buttons = document.querySelectorAll(".calculator-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    resultsArray.push(buttons[i].textContent);
    let newArr = resultsArray.join("");
    displayContentFunc(newArr);
  });
}

const firstNum = 5;
const secondNum = 100;
let operator = "add";

const operate = function (op, num1, num2) {
  if (op === "add") {
    return add(num1, num2);
  } else if (op === "subtract") {
    return subtract(num1, num2);
  } else if (op === "multiply") {
    return multiply(num1, num2);
  } else if (op === "divide") {
    return divide(num1, num2);
  }
};

const add = function (a, b) {
  console.log(a + b);
  return a + b;
};
const subtract = function (a, b) {
  console.log(a - b);
  return a - b;
};
const multiply = function (a, b) {
  console.log(a * b);
  return a * b;
};
const divide = function (a, b) {
  console.log(a / b);
  return a / b;
};
