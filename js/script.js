/* ADD FUNCTION
var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Let's add two numbers together! Please enter a number:"));
var number2 = parseInt(prompt("Please enter another number:"));

var result = add(number1, number2).toString();
alert("The result is " + result + ".");
*/

/* SUBTRACT FUNCTION
var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Let's subtract two numbers together! Please enter a number:"));
var number2 = parseInt(prompt("Please enter another number:"));

var result = subtract(number1, number2).toString();
alert("The result is " + result + ".");
*/

/* MULTIPLY FUNCTION
var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Now let's multiply two numbers. Please enter a number:"));
var number2 = parseInt(prompt("Now enter a second number:"));

var result = multiply(number1, number2).toString();

alert("The result is " + result + ".");
*/

/* DIVIDE FUNCTION
var divide = function(numerator, denominator) {
  return numerator / denominator;
};

var numerator = parseInt(prompt("Now let's divide two numbers. Please enter a numerator:"));
var denominator = parseInt(prompt("Please enter a denominator:"));

var result = divide(numerator, denominator).toString();

alert("The result is " + result + ".");
*/

/* BODY MASS INDEX FUNCTION (takes U.S. as input)
var calculateBMI = function(heightIN, weightLB) {
	return ((weightLB / (heightIN*heightIN))*703);
}

var userHeight = parseInt(prompt("Let's calculate your Body Mass Index. Please enter your height (in inches)."));
var userWeight = parseInt(prompt("Now, please enter your weight (in pounds)(we'll never tell)."));

var userBMI = calculateBMI(userHeight, userWeight).toFixed(2);
var userBMIString = userBMI.toString;

alert("Your Body Mass Index is " + userBMI + ".");
*/



/* CONVERT FAHRENHEIT TO CELSIUS FUNCTION
var convertFToC = function(fahrenheit) {
	return ((5/9)*(fahrenheit - 32));
}

var fahrenheit = parseInt(prompt("Hello. Let's convert Fahrenheit to Celcius! Please enter the tempurature (in Fahrenheit) that you would like converted into Celcius:"))
var celsiusString = convertFToC(fahrenheit).toString();

alert("Your tempurature in Celcius is " + celsiusString + ".");
*/

/* COVERT CUPS TO MILLILITRES FUNCTION
var cupsToMillilitres = function(cups) {
	return cups * 236.588;
};

var userCups = parseFloat(prompt("Let's convert a quantity of cups to millilitres. What volume of cups do you have that you would like converted to millilitres?"));

var userMillilitres = cupsToMillilitres(userCups).toFixed(2);
var userMillilitresStr = userMillilitres.toString();

alert(userCups.toString() + " cups is equal to " + userMillilitresStr + " millilitres.");
*/
