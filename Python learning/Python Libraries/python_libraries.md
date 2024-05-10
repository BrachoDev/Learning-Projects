# Python libraries

Python libraries are collections of pre-written code and functions that extend the capabilities of the Python programming language.

## Learnind Resources

- [Pandas Tutorial by W3Schools](https://www.w3schools.com/python/pandas/default.asp)
- [Matplotlib Tutorial by W3Schools](https://www.w3schools.com/python/matplotlib_pyplot.asp)

## Table of Contents

1. [Pandas Library (for dara analysis)](#pandas-library-for-data-analysis)

   - [Installation of Pandas](#installation-of-pandas)
   - [Importing pandas](#importing-pandas)
   - [Descriptive Statistics](#descriptive-statistics)

2. [Matplotlib (for data visualization)](#matplotlib-for-data-visualization)
   - [Installation of Matplotlib](#installation-of-matplotlib)
   - [Importing Matplotlib](#importing-matplotlib)
   - [Create line plot chart](#create-line-chart)

## Pandas Library (for data analysis):

Pandas is a Python library used to analyze data.

### Installation of Pandas:

To install Pandas, we just need to write this in the command prompt:

```
C:\Users\Your Name>pip install pandas
```

### Importing pandas:

To import data we use `import pandas`. We can us `as` to give it a different name other than `pandas`, usually `pd`.

example:

```python
import pandas as pd

temperatures = [90, 89, 88, 89, 91, 92, 93, 89, 87, 88, 91, 92, 90, 89]

temperatures_df = pd.DataFrame(temperatures, columns=['temperature'])

print(temperatures_df)
#Output:
#     temperature
# 0            90
# 1            89
# 2            88
# 3            89
# 4            91
# 5            92
# 6            93
# 7            89
# 8            87
# 9            88
# 10           91
# 11           92
# 12           90
# 13           89
```

### Descriptive Statistics:

Descriptive statistics are tools to summarize and understand a collection of data. In pandas, we can calculate the `mean`, `median`, `variance`, `deviation` or simply describe data.

- `mean`: This is the average or the center.

  ```python
  mean = temperatures_df['temperature'].mean()
  print("Mean=", round(mean,2))
  # Output: Mean= 89.86
  ```

- `median`: is the number in the middle in the data.

  ```python
  median = temperatures_df['temperature'].median()
  print("Median=", round(median,2))
  #Ouput: Median= 89.5
  ```

- `Variance` is a statistical measure that tells you how spread out your data is from the average (mean).

  ```python
  variance = temperatures_df['temperature'].var()
  print("Variance=", round(variance,2))
  #Output: Variance= 3.05
  ```

- `Standard deviation` is like variance, but it is easier to interpret because it is expressed in the same units as the original data.

  ```python
  stdeviation = temperatures_df['temperature'].std()
  print("Standard Deviation=", round(stdeviation,2))
  #Output: Standard Deviation= 1.75
  ```

Instead of calculating each value one by one, we can also use `.describe()`

```python
statistics = temperatures_df['temperature'].describe()
print("")
print ("Describe method")
print (statistics)
# Output:
# Describe method
# count    14.000000
# mean     89.857143
# std       1.747840
# min      87.000000
# 25%      89.000000
# 50%      89.500000
# 75%      91.000000
# max      93.000000
# Name: temperature, dtype: float64
```

## Matplotlib (for data visualization)

Matplotlib is a low level graph plotting library in python that serves as a visualization utility.

### Installation of Matplotlib

To install it we use the following prompt on the command prompt

```
C:\Users\Your Name>pip install matplotlib
```

### Importing Matplotlib

To import this inot our Python file we use `import matplotlib.pyplot as plt`

### Create line Chart

To create a line chart we use the following code:

```python
# line chart
plt.plot(temperatures_df['temperature']) # This creates the plot

# setting a title for the plot, x-axis and y-axis
plt.title('Line plot of temperature data', fontsize=20)
plt.xlabel('day')
plt.ylabel('temperature')

# show the plot
plt.show()
```

This code will return a tables similar to this:

![Line plot chart example](libraries_assets/line_chart.png)
