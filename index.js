/* create variables */

/**
* #1
* Variables with a String as their value
*
* Declare variables named `firstName`, `lastName`, and `birthPlace`.
* Fill out the values for these with your own data or make it up.
*
* It should be a String.
**/

var firstName = "Naoto";
var lastName = "Yamaguchi";
var birthPlace = "Hawaii";
console.log(firstName);
console.log(lastName);
console.log(birthPlace);

/**
* #2
* Variables with a Number as their value
*
* Declare variables named `favoriteNumber`, `currentYear`,
* and `thatOnePrinceSong`.
*
* Their values should be a Number
**/

var favoriteNumber = 51;
var currentYear = 2016;
var thatOnePrinceSong = 1999;
console.log(favoriteNumber)
console.log(currentYear)
console.log(thatOnePrinceSong)

/**
* #3
* Variables with Boolean values
*
* Declare variables named `isDaytime`, `isLeftHanded`, `inHawaii`,
* and `isHappyCoding`
*
* Their values should be a Boolean
**/

var isDayTime = true;
var isLeftHanded = false;
var inHawaii = true;
var isHappyCoding = true;
console.log(isDayTime);
console.log(isLeftHanded);
console.log(inHawaii);
console.log(isHappyCoding);

/**
* #4
* Variables with null
*
* Declare variables named `enrolledAtDevLeague` and `completedFridayPrep`
*
* Their values should be a Null value
**/

var enrolledAtDevLeague = null;
var completedFridayPrep = null;
console.log(enrolledAtDevLeague);
console.log(completedFridayPrep);

/**
* #5a
* Variables with an Array for it's value. This Array will contain:
*
* Declare a variable named `westCoast` which is an Array.
* This Array contains the names of all the states
* which can be found along the west coast of The United States.
**/

var westCoast = ["California", "Oregon", "Washington"];
console.log(westCoast);

/**
* #5b
* Variables with an Array for it's value. This Array will contain:
*
* Declare a variable named `evenNumbers` which is an Array.
* This Array contains numbers that are considered 'even values'.
* Have at least ten even values in this array.
**/

var evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(evenNumbers);


/**
* #6a Arithmetic
* Variables with the outcome of an arithmetic operation:
*
* Declare a variable named `sumOfNumbers` which is a Number. This Number
* contains the result of performing an arithmetic operation on two numbers.
* Have this variable store the result of adding 3 numbers of your choosing.
*
* Extend this behavior to include subtraction, multiplication and division.
*/

var sumOfNumbers = 10 + 5 + 4;
var productOfNumbers = 10 * 4 * 5;
var quotientOfNumbers = 10 / 4 / 5;
console.log(sumOfNumbers);
console.log(productOfNumbers);
console.log(quotientOfNumbers);

/**
* #6b Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isEqual` which is a Boolean. This Boolean
* contains the result of performing a comparison to test if two strings
* are equal. We want to compare the two strings "Tacocat" and "tacocat" and
* `console.log()` the result.
*
* NOTE:
*   There is no test which tests your console.log()'s output'.
*   Also, there are zero tests for the BONUS below.
*
* BONUS:
*   See if you can come up with a few examples of double comparison
*   operator(==) vs triple comparison operator(===).
*/

var isEqual = "Tacocat" === "tacocat";
console.log(isEqual);
console.log(0 == false);
console.log(0 === false);
console.log("0" == 0);
console.log("0" === 0);
console.log(null == undefined);
console.log(null === undefined);

/**
* #6c Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `generalContainer`. This variable will be used to store multiple types of
* values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.
*
* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value.
*
* NOTE:
*   The tests for this section cannot test your variable as it changes,
*   it can only test that you declared the variable by giving it the right name.
*/

var generalContainer = "The general container";
console.log(generalContainer);
var generalContainer = 2;
console.log(generalContainer);
var generalContainer = false;
console.log(generalContainer);
var generalContainer = null;
console.log(generalContainer);
var generalContainer = 10+12;
console.log(generalContainer);

/**
* #7a
* Declare Functions
*
* Declare a Function named `jump` which takes a single argument, `height`
*
* This function should return a String, "You jumped 9 feet high!"
* if invoked in this way -> jump(9);
*
* Store the return value to a variable named `jumpResult` and use console.log to inspect the value which was returned by your function
**/

function jump(height){
  return console.log("I jumped " +height+ " feet high!")
}

jump(9);

/**
* #7b
* Declare Functions
*
* Declare a Function named `cook` which a takes three arguments/parameters, `ingredient1`, `ingredient2`, `recipeName`
*
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/

function cook(ingredient1, ingredient2, recipeName){
  return console.log(ingredient1 + " and " + ingredient2 + " make a " + recipeName + "!")
}

cook("Tomatoes", "Cheese", "Pizza");