# Python Notes

## Learning Resources:

- [100 Days of Code: The Complete Python Pro Bootcamp](https://www.udemy.com/course/100-days-of-code/?couponCode=ST2MT43024) - Udemy Course
- [Python Full Course for free 🐍](https://www.youtube.com/watch?v=XKHEtdqhLK8&t=997s) - Youtube Video ⏯️ by Bro Code
- [LearnPython.org](https://www.learnpython.org/) - Official free interactive Python tutorial

## Table of Contents

- [Comments](#comments)
- [Print in Terminal](#print-in-terminal)
- [Indentation](#indentation)
- [Arithmetic Operations](#arithmetic-operations)
- [Variable](#variables)
  - [Check Variable's Data Type](#check-variables-data-type)
  - [Data Types](#data-types-for-variables)
  - [Assign Multiple Variables](#assing-multiple-variables)

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

  ### Check Variable's Data Type

  To check the data type of a variable we can use the `type` function

  ```python
  name = "Carlos"
  print(type(name))
  # output: <class 'str'>
  ```

  ### Data Types for Variables

  A variable can have `string`, `number`, `float` or `boolean`

  - A `string` is text and uses `"quotation"`

    ```python
    last_name = "Bracho"
    ```

  - A `number` is just a value like `1, 2, 3.....n`. It is also known as integer

    ```python
    Age = 25
    ```

  - A `float` is a floating point number (a decimal number)

    ```python
    My_gpa = 3.94
    ```

  - A `boolean` value is `true` or `false`

    ```python
    name_Manuel = false
    ```

  ### Assing multiple variables:

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
