# Python Notes

## Learning Resources:

- [100 Days of Code: The Complete Python Pro Bootcamp](https://www.udemy.com/course/100-days-of-code/?couponCode=ST2MT43024) - Udemy Course
- [Python Full Course for free 🐍](https://www.youtube.com/watch?v=XKHEtdqhLK8&t=997s) - Youtube Video ⏯️ by Bro Code
- [LearnPython.org](https://www.learnpython.org/) - Official free interactive Python tutorial

## Table of Contents

- [Comments](#comments)
- [Print in Terminal](#print-in-terminal)
- [Input Function](#input-function)
  - [Calculate number of letter in a String](#calculate-number-of-letter-in-a-string)
- [Indentation](#indentation)
- [Arithmetic Operations](#arithmetic-operations)
- [Variable](#variables)
  - [Naming Variables](#naming-variables)
  - [Check Variable's Data Type](#check-variables-data-type)
  - [Assign Multiple Variables](#assing-multiple-variables)
- [Data Types](#data-types)
  - [String](#string)
  - [Integer](#integer)
  - [Float](#float)
  - [Boolean](#boolean)

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
- `-` for substraction
- `*` for multiplication
- `/` for division
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

### Boolean

- A `boolean` value is `True` or `False`

  ```python
  name_manuel = False
  ```
