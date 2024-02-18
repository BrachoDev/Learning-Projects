//(14) To access an HTML element with a given id name, you can use the getElementById() method.
const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

/*(17) In programming, it is standard practice to prefix a variable with "is" or "has" to indicate that the variable is a boolean.*/
let isError = false;

/*(18) Even though you set an input element to be a number, JavaScript receives a string value.
    You need to write a function to clean the string value and ensure you have a number.*/
function cleanInputString(str) {
  /*(19) The split() method splits a string into an array of substrings, and returns the new array. 
        You can pass in an optional separator which tells the method where each split should happen. */
  const strArray = str.split("");
  const cleanStrArray = [];

  for (let i = 0; i < strArray.length; i++) {}
}
