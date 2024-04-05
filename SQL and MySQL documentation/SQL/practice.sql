CREATE TABLE PartsMaintenance(
VehicleID VARCHAR(20) NOT NULL,
State VARCHAR(25),
Repair VARCHAR(50),
Reason VARCHAR(50),
YEAR SMALLINT,
Make VARCHAR(50),
BodyType VARCHAR(50)
);

ALTER TABLE  PartsMaintenance
MODIFY COLUMN VehicleID VARCHAR(50); 

DROP TABLE PartsMaintenance;

LOAD DATA INFILE '/home/codio/workspace/FleetMaintenanceRecords.csv' 
INTO TABLE PartsMaintenance 
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

SELECT Repair, COUNT(*) AS TimesRepaired
FROM PartsMaintenance GROUP BY Repair
ORDER  BY TimesRepaired;

| Repair                   | TimesRepaired |
+--------------------------+---------------+
| Dent Repair Rear         |            25 |
| Transmission             |            28 |
| Dent Repair  Left Fender |            37 |
| Shocks                   |            47 |
| Cab corner panel         |            49 |
| Struts                   |            51 |
| Brake line replacement   |            52 |
| Rocker Panel             |            53 |
| Fender replacement       |            54 |
| Wheel Arch               |            55 |
| Battery replacement      |            56 |
| Windshield replacement   |            63 |
| Tire replacement         |            66 |
| Tire repair              |            74 |
| Fule tank                |            95 |
+--------------------------+-------