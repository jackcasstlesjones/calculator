// const oneBtn = document.getElementById("1");
// const twoBtn = document.getElementById("2");
// const threeBtn = document.getElementById("3");
// const fourBtn = document.getElementById("4");
// const fiveBtn = document.getElementById("5");
// const sixBtn = document.getElementById("6");
// const sevenBtn = document.getElementById("7");
// const eightBtn = document.getElementById("8");
// const nineBtn = document.getElementById("9");
// const zeroBtn = document.getElementById("0");
// const multiplyBtn = document.getElementById("*");
// const divideBtn = document.getElementById("/");
// const addBtn = document.getElementById("+");
// const equalsBtn = document.getElementById("=");
// const cancelBtn = document.getElementById("C");

// const operationBtns = document.querySelectorAll(".operation-button");
// const numberBtns = document.querySelectorAll(".number-button");

// let displayContent = document.querySelector(".screen-content");
// let resultsArray = [];

// // Two number variables and an operator variable
// const firstNum = [];
// const secondNum = 100;
// let operator = "add";

// // Return the value of the pressed Operation Buttons
// const getOperation = function () {
//   for (let i = 0; i < operationBtns.length; i++) {
//     console.log(operationBtns[i].id);
//     return;
//   }
// };
// for (let i = 0; i < operationBtns.length; i++) {
//   operationBtns[i].addEventListener("click", getOperation);
// }

// // Return the value of the pressed Number Buttons
// const getNumber = function () {
//   for (let i = 0; i < numberBtns.length; i++) {
//     if (numberBtns[i].id == "1") {
//       return "one";
//     } else if (numberBtns[i].id == "2") {
//       return "two";
//     } else if (numberBtns[i].id == "3") {
//       return "three";
//     } else if (numberBtns[i].id == "4") {
//       return "four";
//     } else if (numberBtns[i].id == "5") {
//       return "five";
//     } else if (numberBtns[i].id == "6") {
//       return "six";
//     } else if (numberBtns[i].id == "7") {
//       return "seven";
//     } else if (numberBtns[i].id == "8") {
//       return "eight";
//     } else if (numberBtns[i].id == "9") {
//       return "nine";
//     }
//   }
// };
// for (let i = 0; i < numberBtns.length; i++) {
//   numberBtns[i].addEventListener("click", function () {
//     firstNum.push(getNumber());
//     console.log(firstNum);
//   });
// }

// // Push to firstNum

// // Display content in screen div
// const displayContentFunc = function (key) {
//   displayContent.textContent = key;
// };

// // On all buttons, adds the value to an array on click
// // const buttons = document.querySelectorAll(".calculator-button");
// // for (let i = 0; i < buttons.length; i++) {
// //   buttons[i].addEventListener("click", function () {
// //     resultsArray.push(buttons[i].textContent);
// //     let newArr = resultsArray.join("");
// //     displayContentFunc(newArr);
// //   });
// // }

// // Operator function that takes an operator and two numbers
// const operate = function (op, num1, num2) {
//   if (op === "add") {
//     return add(num1, num2);
//   } else if (op === "subtract") {
//     return subtract(num1, num2);
//   } else if (op === "multiply") {
//     return multiply(num1, num2);
//   } else if (op === "divide") {
//     return divide(num1, num2);
//   }
// };

// // Basic calculator functions
// const add = function (a, b) {
//   console.log(a + b);
//   return a + b;
// };
// const subtract = function (a, b) {
//   console.log(a - b);
//   return a - b;
// };
// const multiply = function (a, b) {
//   console.log(a * b);
//   return a * b;
// };
// const divide = function (a, b) {
//   console.log(a / b);
//   return a / b;
// };
