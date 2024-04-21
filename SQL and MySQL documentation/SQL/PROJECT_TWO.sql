SELECT Customers.State, COUNT(*) AS NumberOfReturns
FROM Customers INNER JOIN  Orders ON Customers.CustomerID = Orders.CustomerID
INNER JOIN RMA ON Orders.OrderID = RMA.OrderID
GROUP BY State
ORDER  BY NumberOfReturns DESC;

SELECT SKU, COUNT(*) AS NumberOfReturns
FROM Orders INNER JOIN RMA ON  Orders.OrderID=RMA.OrderID
GROUP BY SKU
ORDER BY NumberOfReturns DESC;

SELECT SKU, COUNT(*) * 100 /(SELECT COUNT(*) FROM RMA) AS Percentage
FROM Orders INNER JOIN RMA ON  Orders.OrderID=RMA.OrderID
GROUP BY SKU
ORDER BY Percentage DESC;
