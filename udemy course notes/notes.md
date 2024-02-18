# Notes From Dr. Angela Yu's Course (The Complete 2024 Web Development Bootcamp)

## Section 14 | Introduction to Javascript ES6

### Difference between interpreter and Compiler [video](https://www.youtube.com/watch?v=_C5AHaS1mOA)

- JavaScript is an interpreter

- This is how JS code look like:![alt text](image.png)

## Data Types:

1. Strings: It contains text.

```javascript
alert("hello"); // "hello" is the string data.
```

2. Numbers: It represents numerical values.

```javascript
1,2,3... // These are numbers data.
```

3. Boolean: Data type that describe data to be either `True` or `False`

## Variables:

![alt text](image-2.png)

Example of variable:

```javascript
var myName = "Carlos";
var yourName = prompt("What is your name?");
alert(
  "My name is " +
    myName +
    ", welcome to this learning project " +
    yourName +
    " !"
); //This code creates a message  box with a personalized greeting. Which shows how  we can use variables in alerts.
```

### Javascript Variables Exercise:

Change the variables so a = "8" and b = "3".

Do NOT change any of the existing code.

You are NOT allowed to type any numbers.

You should NOT redeclare the variables a and b.
```javascript
var a = "3";
var b = "8";

/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
var c = a;
a = b;
b = c;
/***********Do not change the code below 👇*******/

console.log("a is " + a);
console.log("b is " + b);
//this changes the values so a = "8" and b = "3"
```
