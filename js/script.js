/* ADD FUNCTION */
var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Let's add two numbers together! Please enter a number:"));
var number2 = parseInt(prompt("Please enter another number:"));

var result = add(number1, number2).toString();
alert("The result is " + result + ".");

/* SUBTRACT FUNCTION */
var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Let's subtract two numbers together! Please enter a number:"));
var number2 = parseInt(prompt("Please enter another number:"));

var result = subtract(number1, number2).toString();
alert("The result is " + result + ".");

/* MULTIPLY FUNCTION */
var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Now let's multiply two numbers. Please enter a number:"));
var number2 = parseInt(prompt("Now enter a second number:"));

var result = multiply(number1, number2).toString();

alert("The result is " + result + ".");

/* DIVIDE FUNCTION */
var divide = function(numerator, denominator) {
  return numerator / denominator;
};

var numerator = parseInt(prompt("Now let's divide two numbers. Please enter a numerator:"));
var denominator = parseInt(prompt("Please enter a denominator:"));

var result = divide(numerator, denominator).toString();

alert("The result is " + result + ".");
