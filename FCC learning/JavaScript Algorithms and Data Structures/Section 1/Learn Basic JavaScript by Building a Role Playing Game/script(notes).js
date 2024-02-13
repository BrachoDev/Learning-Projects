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
  (In this case we want the player to start with a stick. That's why stick is by itself)*/
let inventory = ["stick"];
/*(19) JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML.
  We can access the HTML using the document object, which represents our entire HTML document.
  The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector.
  (21) if we are not going to assigna new value to a variable, it is best practice to use the "const" keyword to declare it.
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
const weapons = [
  {
    name: "stick",
    power: 5,
  },
  {
    name: "dagger",
    power: 30,
  },
  {
    name: "claw hammer",
    power: 50,
  },
  {
    name: "sword",
    power: 100,
  },
];
const monsters = [
  { name: "Slime", level: 2, health: 15 },
  { name: "fanged beast", level: 8, health: 60 },
  { name: "dragon", level: 20, health: 300 },
];
/*(52)Arrays  can store any data type. Here, our array stores objects.
  Objects are similar to arrays, but with a few differences.
  One difference is that objects use properties, or keys, to access and modify data.
  Objects are indicated by {}*/
const locations = [
  {
    /*(53)Object properties are written as "key: value" pairs, where "key" is the name of the property (or the key),
     and "value" is the value that property holds.*/
    name: "town square",
    //(54) Objects are separated by commas.
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    //(56) in this case we did not put quotes beacuse these are variables.
    "button functions": [goStore, goCave, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters.",
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster.",
  },
  {
    name: "kill monster",
    "button text": [
      "Go to town square",
      "Go to town square",
      "Go to town square",
    ],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;",
  },
];

//initialize buttons
/*(40)Buttons have a special property called "onclick",
  which can be used to determine what happens whn someone clicks on that button.
  In this case, when the button is clicked, the function goStore will be called.*/
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

/*(50) Since we have repetition in the goTown and goStore functions, we need to add another function.
   Functions can take parameters, which are values that are given to the function each time it is run.
   in this case the parameter is called "locations"*/
/*(59) this function will help us consolidate code so we don't repeat code in goTown and goStore*/
function update(location) {
  monsterStats.style.display = "none";
  /*(42) The innerText property controls the text that appears in an HTML element.
  in this case, when the player clicks button1 the text will change.*/
  /*(63) we can get the information from the const location using the bracket notation*/
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  /*(67) we can use dot notation to assign location too*/
  text.innerText = location.text;
}
function goTown() {
  /*(60)Instead of assigning the innerText and onclick properties to specific strings and functions,
   the update function will use data from the location that is passed into it.
   First, that data needs to be passed (see below)*/
  /*(62) the locations array contains two locations "town square" and "store".
    to pass the first element we need to add [0], which is called a bracket notation*/
  update(locations[0]);
}
/*(34)Functions are special tools that allow us to run sections of code at specific times.
  We can declare functions using the "function" keyword.*/
function goStore() {
  update(locations[1]);
}
function goCave() {
  update(locations[2]);
}
function buyHealth() {
  /*(76) What if the player doesn't have enough money?
    We fix that by adding an if statement*/
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  }
  //(77) Use else  to tell the program what do if the condition "if" is false
  else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}
function buyWeapon() {
  /*(95) Arrays have a length property that returns the number of items in the array.
    (96) The currentWeapon variable is the index of the weapons array, but array indexing starts at zero.
    The index of the last element in an array is one less than the length of the array.*/
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      //(84) Increasing a value by 1  is the same as saying value++.
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      /*(89) We can variables to string with concatenation operator + */
      text.innerText = "You now have a " + newWeapon + ".";
      /*(90) Back at the beginning of this project, you created the inventory array.
      Add the newWeapon to the end of the inventory array using the push() method.*/
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    /*(103) The shift() method on an array removes the first element in the array and returns it*/
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}
function fightSlime() {
  fighting = 0;
  goFight();
}
function fightBeast() {
  fighting = 1;
  goFight();
}
function fightDragon() {
  fighting = 2;
  goFight();
}
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  /*(115) This is how we change CSS styles sheet in JavaScript.
    We first declare the element then add style and the property we want to change.*/
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText =
    "You attack it with your " + weapons[currentWeapon].name + ". ";
  health -= monsters[fighting].level;
  /*(121)The Math object in JavaScript contains static properties and methods for mathematical constants and functions.
    One of those is Math.random(), which generates a random number from 0 (inclusive) to 1 (exclusive).
    Another is Math.floor(), which rounds a given number down to the nearest integer.
    Using these, you can generate a random number within a range.
    For example, this generates a random number between 1 and 5: Math.floor(Math.random() * 5) + 1;.*/
  monsterHealth -=
    weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    function lose() {}
  } /*(124) You can make an else statement conditional by using else if.*/ else if (
    monsterHealth <= 0
  ) {
    defeatMonster();
  }
}
function dodge() {
  text.innerText =
    "You dodge the attack from the " + monsters[fighting].name + ".";
}
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}
function lose() {
  update(locations[5]);
}
function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}
