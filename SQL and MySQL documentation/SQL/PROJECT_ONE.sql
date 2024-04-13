CREATE DATABASE QuantigrationUpdates;

CREATE TABLE Customers (
    CustomerID INT NOT NULL,
    FirstName VARCHAR(25),
    LastName  VARCHAR(25),
    Street VARCHAR(50),
    City VARCHAR(50),
    State VARCHAR(25),
    ZipCode VARCHAR(10),
    Telephone VARCHAR(15),
    PRIMARY KEY (CustomerID)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY NOT NULL,
    CustomerID INT NOT NULL,
    SKU VARCHAR(20),
    Description VARCHAR(50),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE RMA (
    RMAID INT PRIMARY KEY,
    OrderID INT,
    Step VARCHAR(50),
    Status VARCHAR(15),
    Reason VARCHAR(15),
    FOREIGN KEY  (OrderID) REFERENCES Orders(OrderID)
);

LOAD DATA INFILE '/home/codio/workspace/customers.csv'
INTO TABLE Customers
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n';

LOAD DATA  INFILE '/home/codio/workspace/orders.csv'
INTO TABLE Orders
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n';

LOAD DATA INFILE '/home/codio/workspace/rma.csv'
INTO TABLE RMA
FIELDS TERMINATED  BY ','
LINES TERMINATED BY  '\r\n';

SELECT COUNT(*)
FROM Customers INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Customers.City = 'Framingham' AND Customers.State = 'Massachusetts';

SELECT COUNT(*)
FROM Customers INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
WHERE Customers.State = 'Massachusetts';

INSERT INTO Customers VALUES 
(100004, 'Luke', 'Skywalker', '15 Maiden Lane', 'New York', 'New York', '10222', '212-555-1234'),
(100005, 'Winston', 'Smith','123 Sycamore Street', 'Greensboro', 'North Carolina', '27401', '919-555-6623'),
(100006, 'MaryAnne', 'Jenkins', '1 Coconut Way', 'Jupiter', 'Florida', '33458', '321-555-8907'),
(100007, 'Janet',	'Williams',	'55 Redondo Beach Blvd', 'Torrence', 'California', '90501', '310-555-5678');

ALTER TABLE Orders MODIFY Description VARCHAR(70);

INSERT INTO Orders VALUES
(1204305, 100004, 'ADV-24-10C', 'Advanced Switch 10GigE Copper 24 port'),
(1204306, 100005, 'ADV-48-10F', 'Advanced Switch 10 GigE Copper/Fiber 44 port copper 4 port fiber'),
(1204307, 100006, 'ENT-24-10F', 'Enterprise Switch 10GigE SFP+ 24 Port'),
(1204308, 100007, 'ENT-48-10F', 'Enterprise Switch 10GigE SFP+ 48 port');

SELECT COUNT(*) FROM Customers
WHERE State = 'Rhode Island' AND City = 'Woonsocket';

SELECT OrderID, Status, Step FROM RMA
WHERE OrderID = 5175;

UPDATE RMA
SET Status = 'Complete', Step = 'Credit Customer Account'
WHERE OrderID = 5175;

DELETE FROM RMA
WHERE Reason = 'Rejected';

CREATE VIEW Collaborator AS
SELECT CustomerID AS CollaboratorID, FirstName, LastName, Street, City, State, ZipCode, Telephone
FROM Customers;

SELECT * FROM Orders
INTO OUTFILE '/home/codio/workspace/OrdersList.csv'
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n';