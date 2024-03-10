# SQL:

This is information I've learned in school courses and online learning resources I have found.

## MySQL Syntax:

[MySQL syntax website](https://www.mysqltutorial.org/mysql-basics/)

## SNHU Notes:

Table of content:

- [Create a New Database](#create-a-new-database)
- [Create a Table](#create-a-table)
- [Alter a Table](#alter-a-table)

### Create a new database:

- `CREATE DATABASE last_name_here;` Is used to create a database.

  ![CREATE DATABASE Example](/SQL%20and%20MySQL%20documentation/assets/CREATE%20DATABASE.png)

- `SHOW DATABASES;` Is used to show available databases.

  ![SHOW DATABASES EXAMPLE](/SQL%20and%20MySQL%20documentation/assets/SHOW%20DATABASES.png)

- `USE;` tells MySQL to use the named database as the default (current) database for subsequent statements.

  ![USE EXAMPLE](/SQL%20and%20MySQL%20documentation/assets/USE.png)

### Create a table:

- `CREATE TABLE;` Creates a table within the database.

  ![CREATE TABLE EXAMPLE](/SQL%20and%20MySQL%20documentation/assets/CREATE%20TABLE.png)

- `SHOW TABLES;` Show the available tables in the database.

  ![SHOW TABLES EXAMPLE](/SQL%20and%20MySQL%20documentation/assets/SHOW%20TABLES.png)

- `DESCRIBE` retrieve information about a table's structure, including column names, data types, and constraints.

  ![DESCRIBE EXAMPLE](/SQL%20and%20MySQL%20documentation/assets/DESCRIBE.png)

### Alter a table:

- `ALTER TABLE` is used to `ADD`, `DELETE`, or `MODIFY` columns in an existing table.

  ![ALTER TABLE EXAMPLE](/SQL%20and%20MySQL%20documentation/assets/ALTER%20TABLE.png)

  If we `DESCRIBE` the table this is how it will look:

  ![ALTER TABLE DESCRIBED](/SQL%20and%20MySQL%20documentation/assets/ALTER%20TABLE%20DESCRIBE%20EXAMPLE.png)
