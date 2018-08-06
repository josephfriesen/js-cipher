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
var userBMIString = userBMI.toString();

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

/* PROJECT CIPHER: CAPITALIZE FIRST AND LAST LETTER OF A INPUTTED SENTENCE */

/* Given a string, returns that string with the first and last letters capitalized. Must include punctuation at the end of the sentence. Ex: given string "hello world.", returns string "Hello WorlD." */
function capitalizeFirstAndLast(string) {
  var len = string.length;
  var firstLetter = string.charAt(0).toUpperCase();
  var lastLetter = string.charAt(len-2).toUpperCase();
  string = firstLetter + string.slice(1, len);
  string = string.slice(0, len-2) + lastLetter + ".";
  return string;
}

/* Given a string, return a two character string consisting of the capitalized first and last letters. Must include punctuation. Ex: given string "hello world.", return string "HD". */
function getAndCapFirstAndLast(string) {
  var len = string.length;
  var firstLetter = string.charAt(0).toUpperCase();
  var lastLetter = string.charAt(len-2).toUpperCase();
  string = firstLetter + lastLetter;
  return string;
}

/* Given a string, return a string with the first and last letters in reversed positions. Must include punctuation. Ex: given string "hello world.", return string "dello worlh." */
function swapFirstAndLast(string) {
  var len = string.length;
  var firstLetter = string.charAt(0);
  var lastLetter = string.charAt(len-2);
  string = string.slice(1,len-2);
  string = lastLetter + string + firstLetter + ".";
  return string;
}

/* Composition of two previous functions: given a string, return that string with the first and last letters swapped and capitalized concatenated at the end. Must include puncuation. Ex: given string "hello world.", return string "hello worldDH" */
function swapCapAndAppend(string) {
  var len = string.length;
  var swap = swapFirstAndLast(string);
  var twolet = getAndCapFirstAndLast(swap);
  return string.slice(0,len-1) + twolet + "."
}

var userSentence = prompt("Hello there, please finish the following sentence: Jonny went to market and ");

userSentence = swapCapAndAppend(userSentence);

console.log(userSentence);
