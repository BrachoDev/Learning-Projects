# SQL:

This is information I've learned in school courses and online learning resources I have found.

## MySQL resources:

[MySQL syntax website](https://www.mysqltutorial.org/mysql-basics/)

[SQL Basics](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql)

[Connect SQL to VS code Video](https://www.youtube.com/watch?v=wzdCpJY6Y4c&authuser=0)

## SNHU Notes:

Table of content:

- [Create a New Database](#create-a-new-database)
- [Create a Table](#create-a-table)
  - [DATA TYPES](#data-types)
- [Alter a Table](#alter-a-table)
- [Insert Records to Table](#insert-records-to-table)
- [Select Data from Tables](#select-data-from-a-table)
  - [Group by and Order by](#group-by-and-order-by)
  - [Operators](#operators)
  - [Select with Math](#select-with-math)
- [Create a view](#create-a-view)
- [Join Tables](#join-tables)
  - [Inner Join](#inner-join)
- [Creating a CSV File](#creating-a-csv-file)
- [Delete records](#delete-records)
- [Import data from CSV file](#import-data-from-csv-file)

### Create a new database:

- `CREATE DATABASE database_name;` Is used to create a database.

  ![CREATE DATABASE Example](/SQL/assets/CREATE%20DATABASE.png)

- `SHOW DATABASES;` Is used to show available databases.

  ![SHOW DATABASES EXAMPLE](/SQL/assets/SHOW%20DATABASES.png)

- `USE;` tells MySQL to use the named database as the default (current) database for subsequent statements.

  ![USE EXAMPLE](/SQL/assets/USE.png)

### Create a table:

- `CREATE TABLE;` Creates a table within the database.

  ![CREATE TABLE EXAMPLE](/SQL/assets/CREATE%20TABLE.png)

- `SHOW TABLES;` Show the available tables in the database.

  ![SHOW TABLES EXAMPLE](/SQL/assets/SHOW%20TABLES.png)

- `DESCRIBE` retrieve information about a table's structure, including column names, data types, and constraints.

  ![DESCRIBE EXAMPLE](/SQL/assets/DESCRIBE.png)

- `PRIMARY KEY` is used to define a primary key which acts as a unique identifier for each row. An exmaple of this is a Customer ID or Employee ID.

  ![PRIMARY KEY EXAMPLE](/SQL/assets/PRIMARY%20KEY.png)

- `FOREIGN KEY (ColumnName1) REFERENCES TableName(ColumnName2)` creates a `FOREIGN KEY` that establishes a link to another table's columns.

  ![FOREIGN KEY EXAMPLE](/SQL/assets/FOREIGN%20KEY.png)

  #### DATA TYPES:

  - When creating a TABLE we can specify what type of data each column will hold using Data Types. The table below is all the available Data types:

    ![DATA TYPES TABLE](/SQL/assets/DATA%20TYPE%20TABLE.png)

### Alter a table:

- `ALTER TABLE` is used to `ADD`, `DELETE`, or `MODIFY` columns in an existing table.

  ![ALTER TABLE EXAMPLE](/SQL/assets/ALTER%20TABLE.png)

  If we `DESCRIBE` the table this is how it will look:

  ![ALTER TABLE DESCRIBED](/SQL/assets/ALTER%20TABLE%20DESCRIBE%20EXAMPLE.png)

- `ALTER TABLE table_name RENAME` Allows us to modify the name of tables.

  ![ALTER TABLE RENAME](/SQL/assets/ALTER%20TABLE%20RENAME.png)

- To change the values of specific rows, you can use the `UPDATE` statement. We also have to specify the column and row that needs to be updated by using `SET` and `WHERE`

  ![UPDATE SET WHERE EXAMPLE](/SQL/assets/UPDATE%20SET%20WHERE.png)

### Insert records to table:

- `INSERT INTO Table_Name VALUES` Allows us to insert records in a table. Each line going from left to right is a record. Each line going from top to bottom is a column.

  ![INSERT INTO table VALUES exmaple](/SQL/assets/INSERT%20INTO%20table%20VALUES.png)

### Select data from a table:

- `SELECT * FROM Table_Name`in MySQL is used to retrieve all data from the table and shows it.

  ![SELECT FROM table EXAMPLE](/SQL/assets/SELECT%20FROM%20table.png)

  We can also `SELECT` especific columns by especifying them instead of using `*`:

  ![SELECT FROM table EXAMPLE 2](/SQL/assets/SELECT%20FROM%20table%202.png)

- To retrieve record count from a table (number of rows) use `COUNT` function, like so:

#### Group by and Order by:

- The `GROUP BY` clause is used to organize data into groups based on shared values in one or more columns.
- The `ORDER BY` clause is used to sort the results retrieved by a SELECT statement. It arranges the data in a specific order, making it easier to analyze and interpret.

  ![GROUP BY AND ORDER BY EXAMPLE](/SQL/assets/GROUP%20BY%20AND%20ORDER%20BY.png)

#### Operators:

- The `IN` operator is used in a WHERE clause to determine if a value matches one of several values.

  ```mysql
  SELECT * FROM CountryLanguages
  WHERE Language IN ('Spanish', 'French', 'German');
  ```

- The `BETWEEN` operator provides an alternative way to determine if a value is between two other values.

  ```MYSQL
  SELECT Name
  FROM  Employee
  WHERE HireDate BETWEEN '2000-01-01' AND '2000-01-01';
  ```

- • The `LIKE` operator, when used in a `WHERE` clause, matches text against a pattern using the two wildcard characters % and \_.

  1. % matches any number of characters. Ex: LIKE 'L%t' matches "Lt", "Lot", "Lift", and "Lol cat".
  2. \_ matches exactly one character. Ex: LIKE 'L_t' matches "Lot" and "Lit" but not "Lt" and "Loot".

  ```mysql
  SELECT Repair, Reason, COUNT(*)
  FROM PartsMaintenance
  WHERE Reason LIKE '%corrosion%' OR  Reason LIKE '%rust%'
  GROUP BY Reason, Repair
  ORDER BY COUNT(*) DESC;
  ```

#### Select with Math:

- We can use math to make calculations and create view and/or tables with calculated fields.
  - In this example we are getting the percentage that SKU items represent in the database:
    ![SELECT PERCENTAGE EXAMPLE](/SQL/assets/SELECT%20PERCENTAGE.png)

### Create a View:

- A `VIEW` contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database. This helps use pull data from multiple tables and make them easier to read.

  ![CREATE VIEW EXAMPLE](/SQL/assets/CREATE%20VIEW.png)

  NOTE: Notice that `VIEW` essentially creates a new table. In this example it is called Collaborator.

### Join Tables:

#### Inner Join

- This is the most fundamental join type. It returns only rows where there's a match in both tables based on the join condition.

  ![INNER JOIN TABLE EXAMPLE](./assets/INNER%20JOIN%20TABLE.png)

  This is a SELECT Statement that uses `INNER JOIN` to join Department and Employee tables. Also `ON` is the condition `INNER JOIN` follows. In this case, the Department_ID from these two table must be equal.

  NOTES: Notice how we use `WHERE` to especify which department we want; however, we can also use `OR` to add another value.

  ![INNER JOIN EXMAPLE WITH OR](./assets/INNER%20JOIN%20WITH%20OR.png)

- Another way to select specific values is using `IN` in the `WHERE` clause.

  ![INNER JOIN EXAMPLE WITH IN](./assets/INNER%20JOIN%20WITH%20IN.png)

### Creating a CSV File:

- Using the `SELECT INTO OUTFILE`: This SQL statement allows you to retrieve data from a table and write it to a file on the MySQL server. You can specify the file format as CSV in the statement.

  ![SELECT INTO OUTFILE EXAMPLE](./assets/SELECT%20INTO%20OUTFILE.png)

- STEPS to Creating a CSV File:

  1. Exit MySQL using `quit` and press Enter.
  2. Type `pwd` and press Enter.
  3. Type `ls` and press Enter. This will show us a list of files
  4. Type the name of the file we want to print and press Enter.

  ![STEPS FOR PRINTING CSV FILE](./assets/PRINTING%20CSV%20FILE%20STEPS.png)

### Delete Records:

- `DELETE FROM` statement removes rows from a specified table based on some condition(s).

  ![DELETE FROM EXAMPLE](./assets/DELETE%20FROM.png)

### Import Data From CSV file:

- Use `LOAD DATA INFILE` This is the core instruction that tells MySQL you want to load data from a file.
- Then use `INTO TABLE table_name` This tells MySQL where you want to import the data.
- USE `FIELDS TERMINATED BY ','` This specifies what character separates fields within each record, in this case it's a comma.
- `LINES TERMINATED BY '\r\n'` This option defines how different rows are separated in the CSV file.

  ![IMPORT CSV FILES EXAMPLE](./assets/IMPORT%20CSV%20FILE.png)
