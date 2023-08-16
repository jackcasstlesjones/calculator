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

const operationBtns = document.querySelectorAll(".operation-button");
const numberBtns = document.querySelectorAll(".number-button");

let displayContent = document.querySelector(".screen-content");
let resultsArray = [];

// Return the value of the pressed Operation Buttons
const getOperation = function () {
  for (let i = 0; i < operationBtns.length; i++) {
    if (operationBtns[i].id == "+") {
      console.log("add");
    } else if (operationBtns[i].id == "-") {
      return "subtract";
    } else if (operationBtns[i].id == "*") {
      return "multiply";
    } else if (operationBtns[i].id == "/") {
      return "divide";
    }
  }
};
for (let i = 0; i < operationBtns.length; i++) {
  operationBtns[i].addEventListener("click", getOperation);
}

// Return the value of the pressed Number Buttons
const getNumber = function () {
  for (let i = 0; i < numberBtns.length; i++) {
    if (numberBtns[i].id == "1") {
      console.log("one");
      return;
    } else if (numberBtns[i].id == "2") {
      console.log("two");
    } else if (numberBtns[i].id == "3") {
      console.log("three");
    } else if (numberBtns[i].id == "4") {
      console.log("four");
    } else if (numberBtns[i].id == "5") {
      console.log("five");
    } else if (numberBtns[i].id == "6") {
      console.log("six");
    } else if (numberBtns[i].id == "7") {
      console.log("seven");
    } else if (numberBtns[i].id == "8") {
      console.log("eight");
    } else if (numberBtns[i].id == "9") {
      console.log("nine");
    }
  }
};
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", getNumber);
}

// Display content in screen div
const displayContentFunc = function (key) {
  displayContent.textContent = key;
};

// On all buttons, adds the value to an array on click
// const buttons = document.querySelectorAll(".calculator-button");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     resultsArray.push(buttons[i].textContent);
//     let newArr = resultsArray.join("");
//     displayContentFunc(newArr);
//   });
// }

// Two number variables and an operator variable
const firstNum = 5;
const secondNum = 100;
let operator = "add";

// Operator function that takes an operator and two numbers
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

// Basic calculator functions
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
