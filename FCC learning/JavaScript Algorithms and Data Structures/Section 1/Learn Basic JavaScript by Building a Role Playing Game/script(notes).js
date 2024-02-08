/*(3) console.log () is used for debugging  purposes and will print a message to the browser's developer tools console.
  console.log("Hello World");*/
/*(6)In JavaScript, a variable is used to hold a value. To use a variable, you must first declare it.
  The let keyword tells JavaScript you are declaring a variable.
  (7)Variables can be assigned a value. When we do this is called initialization.*/
let xp = 0;
let health = 100;
let gold = 50;
/*(9) When a variable name has multiple words, the convention in JavaScript is to use what's called camelCase.
  The first word is lowercase, and the first letter of every following word is uppercase.*/
let currentWeapon = 0;
let fighting;
let monsterHealth;
/*(12) JavaScript has multiple different data types. This one is "string", which is used to store things like words or text
  (13)Another data type is "array". An array can be used to hold multiple values.
  (In this case, we want the player to start with a stick. That's why the stick is by itself)*/
let inventory = ["stick"];
/*(19) JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML.
  We can access the HTML using the document object, which represents our entire HTML document.
  The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector.
  (21) If we are not going to assign a new value to a variable, it is best practice to use the "const" keyword to declare it.
  JavaScript will throw an error if we accidentally reassign it*/
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
//(34) Since monsterHealth was already declared above, we have to use a different name.
const monsterHealthText = document.querySelector("#monsterHealth");
