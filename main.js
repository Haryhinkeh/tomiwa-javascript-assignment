var operation = prompt("Enter the operation (+, -, *, /):");

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));

var result =
  operation === "+"
    ? num1 + num2
    : operation === "-"
    ? num1 - num2
    : operation === "*"
    ? num1 * num2
    : operation === "/"
    ? num2 !== 0
      ? num1 / num2
      : "Division by zero is not allowed"
    : "Invalid operation";

alert("Result: " + result);
