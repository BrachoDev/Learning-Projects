SELECT State, COUNT(*) AS Amount
FROM Customers
GROUP BY  State
ORDER BY Amount DESC
LIMIT 10;

SELECT SKU, Description, COUNT(*) AS AmountOrdered
FROM Orders GROUP BY SKU, Description
ORDER  BY AmountOrdered DESC
LIMIT 3;

SELECT SKU, Description, COUNT(*)
FROM Orders INNER JOIN Customers  ON Orders.CustomerID = Customers.CustomerID
WHERE  Customers.State IN ('Virginia', 'North Carolina', 'South Carolina', 'Georgia')
GROUP  BY SKU, Description
ORDER BY COUNT(*) DESC
LIMIT 5;

SELECT SKU, Description, COUNT(*)
FROM Orders INNER JOIN RMA 

SELECT SKU, Description, COUNT(*)
FROM Orders INNER JOIN RMA
ON Orders.OrderID = RMA.OrderID
WHERE RMA.Status = 'Complete'
GROUP BY SKU, Description
ORDER BY  COUNT(*) DESC LIMIT 5;

SELECT SKU, Description, COUNT(*)
FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID
INNER JOIN RMA
ON Orders.OrderID = RMA.OrderID
WHERE RMA.Status = 'Complete'
AND Customers.State IN ('Washington', 'Oregon', 'Idaho', 'Montana')
GROUP BY SKU, Description
ORDER BY COUNT(*) DESC
LIMIT 5;
