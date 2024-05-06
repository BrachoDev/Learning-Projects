# Python Notes

## Learning Resources:

- [100 Days of Code: The Complete Python Pro Bootcamp](https://www.udemy.com/course/100-days-of-code/?couponCode=ST2MT43024) - Udemy Course
- [Python Full Course for free 🐍](https://www.youtube.com/watch?v=XKHEtdqhLK8&t=997s) - Youtube Video ⏯️ by Bro Code
- [LearnPython.org](https://www.learnpython.org/) - Official free interactive Python tutorial

## Table of Contents

- [Comments](#comments)
- [Print in Terminal](#print-in-terminal)
  - [F-Strings](#f-strings)
- [Input Function](#input-function)
  - [Calculate number of letter in a String](#calculate-number-of-letter-in-a-string)
- [Indentation](#indentation)
- [Arithmetic Operations](#arithmetic-operations)
- [Variable](#variables)
  - [Naming Variables](#naming-variables)
  - [Check Variable's Data Type](#check-variables-data-type)
  - [Assign Multiple Variables](#assing-multiple-variables)
- [Data Types](#data-types)
  1. [String](#string)
  2. [Integer](#integer)
  3. [Float](#float)
  4. [Boolean](#boolean)
  - [Data Type Conversion](#data-type-conversion)
- [Data Structures](#data-structures)
- [Control flow and logical operators](#control-flow-and-logical-operators)
  - [Comparison Operators](#comparison-operators)
  - [if / else](#if--else)
  - [Nested if and else Statements](#nested-if-and-else-statements)
  - [Multiple If Statements in Succession](#multiple-if-statements-in-succession)
  - [Logical Operators](#logical-operators)

## Comments

Comments are written using `#` in Python.

```Python
# This is a comment.
```

## Print in Terminal

- Use the `print()` function to display text in the terminal.

  Input:

  ```python
  print("Hellow world!")
  ```

  Output:

  ```
  Hello World!
  ```

  Notice we use `strings` to print words.

- There are print modifiers that can allow us to put `"quotation marks"` to our print message.

  1. We can use `''` or `""`

     ```python
     print('She said, "Hello, Carlos!"')
     ```

  2. We can use `\\`

     ```python
     print("She said, \"Hello, Carlos!\"")
     ```

- If we want to `print()` a `string` with another data type, we need to use `str()`

  Example:

  ```python
  name = False
  if name == False:
      name = True

  print('name is ' +str(name))
  #output: name is True
  ```

- We can separate lines by adding `\n` to the string

  ```python
  print("hola!\nComo estas?")
  #output
  #Hola!
  #Como estas?
  ```

### F-Strings

In order to avoid using variable converters to print different variable types in one print, we can use an f-string like so:

```python
score = 0
height = 1.75
is_winning = True
print(f"Your score is {score} and your height is {height}. Are you winning ? {is_winning}")
#output: Your score is 0 and your height is 1.75. Are you winning ? True
```

## Input function

This is a function similar to `print()`. However, it allows an user to input data.

```python
name = input("what is your name?")
print("Nice to meet you " +name)
# this will show a message asking for name. then, it will show a message with the input assigned
```

### Calculate number of letter in a String

To calculate the number of letter in a string we can use the `len()` function.

```python
print(len("brachodev"))
#output: 9
```

## Indentation

Python uses indentation to define blocks of code instead of using curly braces or keywords like other languages do.

Example:

```python
x = 1
if x == 1
    #indentation to four spaces
    print("x is 1")
```

## Arithmetic Operations

- `+` for addition

  - We can use `+=` to sum a number to a variable

    ```python
    score = 0
    # User scores a point
    score += 1
    #output: score is now 1
    ```

- `-` for substraction

  - We can use `-=` to substract a number to a variable

    ```python
    score = 1
    # User loses a point
    score -= 1
    #output: score is now 0
    ```

- `*` for multiplication

  - We can also use `*=` to multiply a variable by a number

    ```python
    number = 2 + 2
    number *= 2
    #output: number = 8
    ```

- `/` for division

  - we can also use `/=` to divide a variable by an specific number

    ```python
    result = 4/2
    result /= 2
    #output is 1
    ```

- `%` for modulus (returns the remainder)
- `**` for exponentiation

## Variables

- A variable is a container for a value that behaves as the value that it contains.

  For Example:

  ```python
  name = "Carlos"
  print("Hello " +name)
  # output: Hello Carlos
  ```

### Naming Variables

- When naming variables we can add multiple word by separating them with `_` Example: `This_Example`

- We can also put number; however, we can only put them at the end of the name, not the beginning.

```python
variable1 = 1
```

- We cannot have spaces in between word to name variable like `bad example`. This will create a syntax error.

### Check Variable's Data Type

To check the data type of a variable we can use the `type` function

```python
name = "Carlos"
print(type(name))
# output: <class 'str'>
```

### Assing multiple variables

We can assign multiple variables in one line of code this way:

```python
name, age, attractive = "Carlos", 25, True
print(name)
print(age)
print(attractive)

# Output:
# Carlos
# 25
# True
```

## Data Types

A variable can have `string`, `integer`, `float` or `boolean`

### String

- A `string` is text and uses `"quotation"`

  ```python
  last_name = "Bracho"
  ```

- We can select a specific letter from the string by performing a `substric` by using `[]`

  ```python
  print("Hello"[0])
  #output: H
  ```

  Note: the first position is always `[0]`.

- We can count the number of time a value appears in a string by using `count()`

example:

```python
name = "carlos bracho"
count = name.count("r")
#output: 2
```

- to change letter to lower case we can use `lower()`

Example:

```python
name = "CARLOS BrachO"
lower_case = name.lower()
#output: carlos bracho
```

### Integer

- A `integer` is just a value like `1, 2, 3.....n`.

  ```python
  Age = 25
  ```

- We can also visualize large number better if we put `_` in between number

  ```python
  number = 123456789
  number1 = 123_456_789
  # number = number1 (both variables have the same number)
  ```

### Float

- A `float` is a floating point number (a decimal number)

  ```python
  pi = 3.14159
  ```

- If we want to round up our `float` numbers, we can use the `round()` function.

  ```python
  round(8/3)
  #output: 3 instead of 2.6666666666666665
  ```

- We can also specify the number of decimals we want in our result when rounding numbers by adding a `,n`.

  ```python
  round(8/3,2)
  #output: 2.67 only using two decimals
  ```

- If we only want the number before the decimals, we can use `//` instead. This also transform the `float` number into an `integer`

  ```python
  8 // 3
  #output: 2 eliminating decimal spaces
  ```

### Boolean

- A `boolean` value is `True` or `False`

  ```python
  name_manuel = False
  ```

### Data Type Conversion:

We can modify the type of data for each variable using different functions for each data type.

- To change a variable's data type to a `string`, we use `str(insert_variable)`
- To change a variable's data type to an `int`, we use `int(variable)`
- To change a variable's data type to a `float`, we use `float()`

## Data Structures:

There are 4 basic python data structures:

- `set` An unordered collection of items.

  ```python
  {1, 2, 3}, { 'First name', 'Last name' }
  ```

- `list` An ordered collection of changeable items. Two-dimensional arrays can be formed from lists of lists.

  ```python
  [1, 2, 3], ['Height', 6.1], [ [1, 2], [3, 4] ]
  ```

- `tuple` An ordered collection of unchangeable items.

  ```python
  (1, 2, 3), ('Hello', 'World')
  ```

- `dictionary` or `dict` A collection of mappings between keys and values.

  ```python
  {'Home': '310-555-5555', 'Office': '951-555-5555'}, {'C': 'do', 'D': 're', 'E': 'mi', 'F': 'fa', 'G': 'sol'}
  ```

## Control flow and logical Operators

### Comparison Operators:

This is a list of all the available operators used in logical operators:

- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than ot equal to
- `==` Equal to
- `!=` Not equal to

### if / else

To create conditions that tells what to do when certain situations are present, we use `if` and `else`

Example:

```python
print("Welcome to the rollercoaster!")
height = int(input("What is your height in cm? "))

if height >= 120:
  print("You can ride the rollercoaster!")
else:
  print("Sorry, you have to grow taller before you can ride.")
```

- NOTE: it is important to put the indentation after each condition. This is similar to adding `{}` ot `[]` in Javascript's conditions.

### Nested if and else statements:

If we want to check for multiple conditions, we can nest `if / else` statements inside another one to add that extra condition.

Example:

```python
print("Welcome to the rollercoaster!")
height = int(input("What is your height in cm? "))

if height >= 120:
  print("You can ride the rollercoaster!")
  age = int(input("What is your age? "))
  if age <= 18:
    print("Please pay $7.")
  else:
    print("Please pay $12.")
else:
  print("Sorry, you have to grow taller before you can ride.")
```

- In addition, we can use `if/elif/else` to add multiple conditions:

Example:

```python
print("Welcome to the rollercoaster!")
height = int(input("What is your height in cm? "))

if height >= 120:
  print("You can ride the rollercoaster!")
  age = int(input("What is your age? "))
  if age <12:
    print("Please pay $5.")
  elif age <= 18:
    print("Please pay $7.")
  else:
    print("Please pay $12.")
else:
  print("Sorry, you have to grow taller before you can ride.")
```

### Multiple If Statements in Succession:

We can use multiple `if`, `else`, `elif` and variables inside `if` statements to add other conditions within our programs.

Example:

```python
print("Welcome to the rollercoaster!")
height = int(input("What is your height in cm? "))
bill = 0

if height >= 120:
  print("You can ride the rollercoaster!")
  age = int(input("What is your age? "))
  if age < 12:
    bill = 5
    print("Child tickets are $5.")
  elif age <= 18:
    bill = 7
    print("Youth tickets are $7.")
  else:
    bill = 12
    print("Adult tickets are $12.")

  wants_photo = input("Do you want a photo taken? Y or N. ")
  if wants_photo == "Y":
    bill += 3

  print(f"Your final bill is ${bill}")

else:
  print("Sorry, you have to grow taller before you can ride.")
```

### Logical Operators

Instead of using multiple `if` statements, we can use logical operators to check for multiple conditions in one line of code.

- List of logical operators:

  - A and B: Both conditions must be true to pass
  - C or D: One of the conditions must be true to pass
  - not E: It reverses the condition. If it is true, it changes it to false and viceversa.

  Example;

  ```python
  print("Welcome to the rollercoaster!")
  height = int(input("What is your height in cm? "))
  bill = 0

  if height >= 120:
    print("You can ride the rollercoaster!")
    age = int(input("What is your age? "))
    if age < 12:
      bill = 5
      print("Child tickets are $5.")
    elif age <= 18:
      bill = 7
      print("Youth tickets are $7.")
    elif age >= 45 and age <= 55: #logical operator `and`
      print("Everything is going to be ok. Have a free ride on us!")
    else:
      bill = 12
      print("Adult tickets are $12.")

    wants_photo = input("Do you want a photo taken? Y or N. ")
    if wants_photo == "Y":
      bill += 3

    print(f"Your final bill is ${bill}")

  else:
    print("Sorry, you have to grow taller before you can ride.")
  ```
