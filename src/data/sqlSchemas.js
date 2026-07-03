/**
 * sqlSchemas.js — DDL + seed data for each SQL problem.
 * Each key matches the LeetCode problem number (as a string).
 * 'setup' is run before the user's query to create and populate tables.
 */

export const sqlSchemas = {
  /* ─── #175 Combine Two Tables ───────────────────────────── */
  '175': {
    description: 'Person(personId, lastName, firstName) left-joined with Address(addressId, personId, city, state)',
    setup: `
      CREATE TABLE Person (personId INT, lastName TEXT, firstName TEXT);
      INSERT INTO Person VALUES (1,'Wang','Allen'),(2,'Alice','Bob');
      CREATE TABLE Address (addressId INT, personId INT, city TEXT, state TEXT);
      INSERT INTO Address VALUES (1,2,'New York City','New York'),(2,3,'Leetcode','California');
    `,
  },

  /* ─── #176 Second Highest Salary ────────────────────────── */
  '176': {
    description: 'Employee(id, salary)',
    setup: `
      CREATE TABLE Employee (id INT, salary INT);
      INSERT INTO Employee VALUES (1,100),(2,200),(3,300);
    `,
  },

  /* ─── #177 Nth Highest Salary ───────────────────────────── */
  '177': {
    description: 'Employee(id, salary)',
    setup: `
      CREATE TABLE Employee (id INT, salary INT);
      INSERT INTO Employee VALUES (1,100),(2,200),(3,300);
    `,
  },

  /* ─── #178 Rank Scores ──────────────────────────────────── */
  '178': {
    description: 'Scores(id, score)',
    setup: `
      CREATE TABLE Scores (id INT, score REAL);
      INSERT INTO Scores VALUES (1,3.50),(2,3.65),(3,4.00),(4,3.85),(5,4.00),(6,3.65);
    `,
  },

  /* ─── #180 Consecutive Numbers ──────────────────────────── */
  '180': {
    description: 'Logs(id, num)',
    setup: `
      CREATE TABLE Logs (id INT, num INT);
      INSERT INTO Logs VALUES (1,1),(2,1),(3,1),(4,2),(5,1),(6,2),(7,2);
    `,
  },

  /* ─── #181 Employees Earning More Than Their Managers ───── */
  '181': {
    description: 'Employee(id, name, salary, managerId)',
    setup: `
      CREATE TABLE Employee (id INT, name TEXT, salary INT, managerId INT);
      INSERT INTO Employee VALUES (1,'Joe',70000,3),(2,'Henry',80000,4),(3,'Sam',60000,NULL),(4,'Max',90000,NULL);
    `,
  },

  /* ─── #182 Duplicate Emails ─────────────────────────────── */
  '182': {
    description: 'Person(id, email)',
    setup: `
      CREATE TABLE Person (id INT, email TEXT);
      INSERT INTO Person VALUES (1,'a@b.com'),(2,'c@d.com'),(3,'a@b.com');
    `,
  },

  /* ─── #183 Customers Who Never Order ───────────────────── */
  '183': {
    description: 'Customers(id, name), Orders(id, customerId)',
    setup: `
      CREATE TABLE Customers (id INT, name TEXT);
      INSERT INTO Customers VALUES (1,'Joe'),(2,'Henry'),(3,'Sam'),(4,'Max');
      CREATE TABLE Orders (id INT, customerId INT);
      INSERT INTO Orders VALUES (1,3),(2,1);
    `,
  },

  /* ─── #184 Department Highest Salary ───────────────────── */
  '184': {
    description: 'Employee(id, name, salary, departmentId), Department(id, name)',
    setup: `
      CREATE TABLE Department (id INT, name TEXT);
      INSERT INTO Department VALUES (1,'IT'),(2,'Sales');
      CREATE TABLE Employee (id INT, name TEXT, salary INT, departmentId INT);
      INSERT INTO Employee VALUES (1,'Joe',70000,1),(2,'Jim',90000,1),(3,'Henry',80000,2),(4,'Sam',60000,2),(5,'Max',90000,1);
    `,
  },

  /* ─── #185 Department Top Three Salaries ───────────────── */
  '185': {
    description: 'Employee(id, name, salary, departmentId), Department(id, name)',
    setup: `
      CREATE TABLE Department (id INT, name TEXT);
      INSERT INTO Department VALUES (1,'IT'),(2,'Sales');
      CREATE TABLE Employee (id INT, name TEXT, salary INT, departmentId INT);
      INSERT INTO Employee VALUES (1,'Joe',85000,1),(2,'Henry',80000,2),(3,'Sam',60000,2),(4,'Max',90000,1),(5,'Janet',69000,1),(6,'Randy',85000,1),(7,'Will',70000,1);
    `,
  },

  /* ─── #196 Delete Duplicate Emails ─────────────────────── */
  '196': {
    description: 'Person(id, email) — delete duplicates keeping lowest id',
    setup: `
      CREATE TABLE Person (id INT, email TEXT);
      INSERT INTO Person VALUES (1,'john@example.com'),(2,'bob@example.com'),(3,'john@example.com');
    `,
  },

  /* ─── #197 Rising Temperature ──────────────────────────── */
  '197': {
    description: 'Weather(id, recordDate, temperature)',
    setup: `
      CREATE TABLE Weather (id INT, recordDate TEXT, temperature INT);
      INSERT INTO Weather VALUES (1,'2015-01-01',10),(2,'2015-01-02',25),(3,'2015-01-03',20),(4,'2015-01-04',30);
    `,
  },

  /* ─── #262 Trips and Users ──────────────────────────────── */
  '262': {
    description: 'Trips(id, client_id, driver_id, city_id, status, request_at), Users(users_id, banned, role)',
    setup: `
      CREATE TABLE Users (users_id INT, banned TEXT, role TEXT);
      INSERT INTO Users VALUES (1,'No','client'),(2,'Yes','client'),(3,'No','client'),(4,'No','driver'),(10,'No','driver'),(11,'No','driver'),(12,'No','driver'),(13,'No','driver');
      CREATE TABLE Trips (id INT, client_id INT, driver_id INT, city_id INT, status TEXT, request_at TEXT);
      INSERT INTO Trips VALUES (1,1,10,1,'completed','2013-10-01'),(2,2,11,1,'cancelled_by_driver','2013-10-01'),(3,3,12,6,'completed','2013-10-01'),(4,4,13,6,'cancelled_by_client','2013-10-01'),(5,1,10,1,'completed','2013-10-02'),(6,2,11,6,'completed','2013-10-02'),(7,3,12,6,'completed','2013-10-02'),(8,2,12,12,'completed','2013-10-03'),(9,3,10,12,'completed','2013-10-03'),(10,4,13,12,'cancelled_by_driver','2013-10-03');
    `,
  },

  /* ─── #511 Game Play Analysis I ────────────────────────── */
  '511': {
    description: 'Activity(player_id, device_id, event_date, games_played)',
    setup: `
      CREATE TABLE Activity (player_id INT, device_id INT, event_date TEXT, games_played INT);
      INSERT INTO Activity VALUES (1,2,'2016-03-01',5),(1,2,'2016-05-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07-03',5);
    `,
  },

  /* ─── #512 Game Play Analysis II ───────────────────────── */
  '512': {
    description: 'Activity(player_id, device_id, event_date, games_played)',
    setup: `
      CREATE TABLE Activity (player_id INT, device_id INT, event_date TEXT, games_played INT);
      INSERT INTO Activity VALUES (1,2,'2016-03-01',5),(1,2,'2016-05-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07-03',5);
    `,
  },

  /* ─── #534 Game Play Analysis III ──────────────────────── */
  '534': {
    description: 'Activity(player_id, device_id, event_date, games_played)',
    setup: `
      CREATE TABLE Activity (player_id INT, device_id INT, event_date TEXT, games_played INT);
      INSERT INTO Activity VALUES (1,2,'2016-03-01',5),(1,2,'2016-05-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07-03',5);
    `,
  },

  /* ─── #550 Game Play Analysis IV ───────────────────────── */
  '550': {
    description: 'Activity(player_id, device_id, event_date, games_played)',
    setup: `
      CREATE TABLE Activity (player_id INT, device_id INT, event_date TEXT, games_played INT);
      INSERT INTO Activity VALUES (1,2,'2016-03-01',5),(1,2,'2016-05-02',6),(2,3,'2017-06-25',1),(3,1,'2016-03-02',0),(3,4,'2018-07-03',5);
    `,
  },

  /* ─── #569 Median Employee Salary ──────────────────────── */
  '569': {
    description: 'Employee(id, company, salary)',
    setup: `
      CREATE TABLE Employee (id INT, company TEXT, salary INT);
      INSERT INTO Employee VALUES (1,'A',2341),(2,'A',341),(3,'A',15),(4,'A',15314),(5,'A',451),(6,'A',513),(7,'B',15),(8,'B',13),(9,'B',1154),(10,'B',1),(11,'B',454),(12,'B',400),(13,'C',2345),(14,'C',2645),(15,'C',2645),(16,'C',2652),(17,'C',65);
    `,
  },

  /* ─── #570 Managers with at Least 5 Direct Reports ─────── */
  '570': {
    description: 'Employee(id, name, department, managerId)',
    setup: `
      CREATE TABLE Employee (id INT, name TEXT, department TEXT, managerId INT);
      INSERT INTO Employee VALUES (101,'John','A',NULL),(102,'Dan','A',101),(103,'James','A',101),(104,'Amy','A',101),(105,'Anne','A',101),(106,'Ron','B',101);
    `,
  },

  /* ─── #571 Find Median Given Frequency of Numbers ───────── */
  '571': {
    description: 'Numbers(num, frequency)',
    setup: `
      CREATE TABLE Numbers (num INT, frequency INT);
      INSERT INTO Numbers VALUES (0,7),(1,1),(2,3),(3,1);
    `,
  },

  /* ─── #574 Winning Candidate ────────────────────────────── */
  '574': {
    description: 'Candidate(id, name), Vote(id, candidateId)',
    setup: `
      CREATE TABLE Candidate (id INT, name TEXT);
      INSERT INTO Candidate VALUES (1,'A'),(2,'B'),(3,'C'),(4,'D'),(5,'E');
      CREATE TABLE Vote (id INT, candidateId INT);
      INSERT INTO Vote VALUES (1,2),(2,4),(3,3),(4,2),(5,5);
    `,
  },

  /* ─── #577 Employee Bonus ───────────────────────────────── */
  '577': {
    description: 'Employee(empId, name, supervisor, salary), Bonus(empId, bonus)',
    setup: `
      CREATE TABLE Employee (empId INT, name TEXT, supervisor INT, salary INT);
      INSERT INTO Employee VALUES (3,'Brad',NULL,4000),(1,'John',3,1000),(2,'Dan',3,2000),(4,'Thomas',3,4000);
      CREATE TABLE Bonus (empId INT, bonus INT);
      INSERT INTO Bonus VALUES (2,500),(4,2000);
    `,
  },

  /* ─── #578 Get Highest Answer Rate Question ──────────────── */
  '578': {
    description: 'SurveyLog(id, action, question_id, answer_id, q_num, timestamp)',
    setup: `
      CREATE TABLE SurveyLog (id INT, action TEXT, question_id INT, answer_id INT, q_num INT, timestamp INT);
      INSERT INTO SurveyLog VALUES (5,'show',285,NULL,1,123),(5,'answer',285,124124,1,124),(5,'show',369,NULL,2,125),(5,'skip',369,NULL,2,126);
    `,
  },

  /* ─── #580 Count Student Number in Departments ──────────── */
  '580': {
    description: 'Student(student_id, student_name, gender, dept_id), Department(dept_id, dept_name)',
    setup: `
      CREATE TABLE Department (dept_id INT, dept_name TEXT);
      INSERT INTO Department VALUES (1,'Engineering'),(2,'Science'),(3,'Law');
      CREATE TABLE Student (student_id INT, student_name TEXT, gender TEXT, dept_id INT);
      INSERT INTO Student VALUES (1,'Jack','M',1),(2,'Jane','F',1),(3,'Mark','M',2);
    `,
  },

  /* ─── #584 Find Customer Referee ───────────────────────── */
  '584': {
    description: 'Customer(id, name, referee_id)',
    setup: `
      CREATE TABLE Customer (id INT, name TEXT, referee_id INT);
      INSERT INTO Customer VALUES (1,'Will',NULL),(2,'Jane',NULL),(3,'Alex',2),(4,'Bill',NULL),(5,'Zack',1),(6,'Mark',2);
    `,
  },

  /* ─── #585 Investments in 2016 ──────────────────────────── */
  '585': {
    description: 'Insurance(pid, tiv_2015, tiv_2016, lat, lon)',
    setup: `
      CREATE TABLE Insurance (pid INT, tiv_2015 REAL, tiv_2016 REAL, lat REAL, lon REAL);
      INSERT INTO Insurance VALUES (1,10,5,10,10),(2,20,20,20,20),(3,10,30,20,20),(4,10,40,40,40);
    `,
  },

  /* ─── #586 Customer Placing the Largest Number of Orders ── */
  '586': {
    description: 'Orders(order_number, customer_number)',
    setup: `
      CREATE TABLE Orders (order_number INT, customer_number INT);
      INSERT INTO Orders VALUES (1,1),(2,2),(3,3),(4,3);
    `,
  },

  /* ─── #595 Big Countries ────────────────────────────────── */
  '595': {
    description: 'World(name, continent, area, population, gdp)',
    setup: `
      CREATE TABLE World (name TEXT, continent TEXT, area INT, population INT, gdp BIGINT);
      INSERT INTO World VALUES ('Afghanistan','Asia',652230,25500100,20343000000),('Albania','Europe',28748,2831741,12960000000),('Algeria','Africa',2381741,37100000,188681000000),('Andorra','Europe',468,78115,3712000000),('Angola','Africa',1246700,20609294,100990000000);
    `,
  },

  /* ─── #596 Classes With More Than 5 Students ────────────── */
  '596': {
    description: 'Courses(student, class)',
    setup: `
      CREATE TABLE Courses (student TEXT, class TEXT);
      INSERT INTO Courses VALUES ('A','Math'),('B','English'),('C','Math'),('D','Biology'),('E','Math'),('F','Computer'),('G','Math'),('H','Math'),('I','Math');
    `,
  },

  /* ─── #597 Friend Requests I ────────────────────────────── */
  '597': {
    description: 'FriendRequest(sender_id, send_to_id, request_date), RequestAccepted(requester_id, accepter_id, accept_date)',
    setup: `
      CREATE TABLE FriendRequest (sender_id INT, send_to_id INT, request_date TEXT);
      INSERT INTO FriendRequest VALUES (1,2,'2016/06/01'),(1,3,'2016/06/01'),(1,4,'2016/06/01'),(2,3,'2016/06/02'),(3,4,'2016/06/09');
      CREATE TABLE RequestAccepted (requester_id INT, accepter_id INT, accept_date TEXT);
      INSERT INTO RequestAccepted VALUES (1,2,'2016/06/03'),(1,3,'2016/06/08'),(2,3,'2016/06/08'),(3,4,'2016/06/09'),(3,4,'2016/06/10');
    `,
  },

  /* ─── #601 Human Traffic of Stadium ────────────────────── */
  '601': {
    description: 'Stadium(id, visit_date, people)',
    setup: `
      CREATE TABLE Stadium (id INT, visit_date TEXT, people INT);
      INSERT INTO Stadium VALUES (1,'2017-01-01',10),(2,'2017-01-02',109),(3,'2017-01-03',150),(4,'2017-01-04',99),(5,'2017-01-05',145),(6,'2017-01-06',1455),(7,'2017-01-07',199),(8,'2017-01-09',188);
    `,
  },

  /* ─── #602 Friend Requests II ───────────────────────────── */
  '602': {
    description: 'RequestAccepted(requester_id, accepter_id, accept_date)',
    setup: `
      CREATE TABLE RequestAccepted (requester_id INT, accepter_id INT, accept_date TEXT);
      INSERT INTO RequestAccepted VALUES (1,2,'2016/06/03'),(1,3,'2016/06/08'),(2,3,'2016/06/08'),(3,4,'2016/06/09');
    `,
  },

  /* ─── #607 Sales Person ─────────────────────────────────── */
  '607': {
    description: 'SalesPerson(sales_id, name, salary, commission_rate, hire_date), Company(com_id, name, city), Orders(order_id, order_date, com_id, sales_id, amount)',
    setup: `
      CREATE TABLE SalesPerson (sales_id INT, name TEXT, salary INT, commission_rate INT, hire_date TEXT);
      INSERT INTO SalesPerson VALUES (1,'John',100000,6,'4/1/2006'),(2,'Amy',12000,5,'5/1/2010'),(3,'Mark',65000,12,'12/25/2008'),(4,'Pam',25000,25,'1/1/2005'),(5,'Alex',5000,10,'2/3/2007');
      CREATE TABLE Company (com_id INT, name TEXT, city TEXT);
      INSERT INTO Company VALUES (1,'RED','Boston'),(2,'ORANGE','New York'),(3,'YELLOW','Boston'),(4,'GREEN','Wisconsin');
      CREATE TABLE Orders (order_id INT, order_date TEXT, com_id INT, sales_id INT, amount INT);
      INSERT INTO Orders VALUES (1,'1/1/2014',3,4,10000),(2,'2/1/2014',4,5,5000),(3,'3/1/2014',1,1,50000),(4,'4/1/2014',1,4,25000);
    `,
  },

  /* ─── #608 Tree Node ────────────────────────────────────── */
  '608': {
    description: 'Tree(id, p_id)',
    setup: `
      CREATE TABLE Tree (id INT, p_id INT);
      INSERT INTO Tree VALUES (1,NULL),(2,1),(3,1),(4,2),(5,2);
    `,
  },

  /* ─── #610 Triangle Judgement ───────────────────────────── */
  '610': {
    description: 'Triangle(x, y, z)',
    setup: `
      CREATE TABLE Triangle (x INT, y INT, z INT);
      INSERT INTO Triangle VALUES (13,15,30),(10,20,15);
    `,
  },

  /* ─── #612 Shortest Distance in a Plane ─────────────────── */
  '612': {
    description: 'Point2D(x, y)',
    setup: `
      CREATE TABLE Point2D (x INT, y INT);
      INSERT INTO Point2D VALUES (-1,-1),(0,0),(2,2);
    `,
  },

  /* ─── #613 Shortest Distance in a Line ──────────────────── */
  '613': {
    description: 'Point(x)',
    setup: `
      CREATE TABLE Point (x INT);
      INSERT INTO Point VALUES (-1),(0),(2);
    `,
  },

  /* ─── #614 Second Degree Follower ───────────────────────── */
  '614': {
    description: 'Follow(followee, follower)',
    setup: `
      CREATE TABLE Follow (followee TEXT, follower TEXT);
      INSERT INTO Follow VALUES ('A','B'),('B','C'),('B','D'),('D','E');
    `,
  },

  /* ─── #615 Average Salary ───────────────────────────────── */
  '615': {
    description: 'Employee(id, company, salary)',
    setup: `
      CREATE TABLE Employee (id INT, company TEXT, salary INT);
      INSERT INTO Employee VALUES (1,'A',2341),(2,'A',341),(3,'A',15),(4,'A',15314),(5,'A',451),(6,'A',513),(7,'B',15),(8,'B',13),(9,'B',1154),(10,'B',1),(11,'B',454),(12,'B',400),(13,'C',2345),(14,'C',2645),(15,'C',2645),(16,'C',2652),(17,'C',65);
    `,
  },

  /* ─── #619 Biggest Single Number ────────────────────────── */
  '619': {
    description: 'MyNumbers(num)',
    setup: `
      CREATE TABLE MyNumbers (num INT);
      INSERT INTO MyNumbers VALUES (8),(8),(3),(3),(1),(4),(5),(6);
    `,
  },

  /* ─── #620 Not Boring Movies ────────────────────────────── */
  '620': {
    description: 'Cinema(id, movie, description, rating)',
    setup: `
      CREATE TABLE Cinema (id INT, movie TEXT, description TEXT, rating REAL);
      INSERT INTO Cinema VALUES (1,'War','great 3D',8.9),(2,'Science','boring',8.5),(3,'irish','boring',6.2),(4,'Ice song','Fantasy',8.6),(5,'House card','Interesting',9.1);
    `,
  },

  /* ─── #626 Exchange Seats ───────────────────────────────── */
  '626': {
    description: 'Seat(id, student)',
    setup: `
      CREATE TABLE Seat (id INT, student TEXT);
      INSERT INTO Seat VALUES (1,'Abbot'),(2,'Doris'),(3,'Emerson'),(4,'Green'),(5,'Jeames');
    `,
  },

  /* ─── #1045 Customers Who Bought All Products ───────────── */
  '1045': {
    description: 'Customer(customer_id, product_key), Product(product_key)',
    setup: `
      CREATE TABLE Product (product_key INT);
      INSERT INTO Product VALUES (5),(6);
      CREATE TABLE Customer (customer_id INT, product_key INT);
      INSERT INTO Customer VALUES (1,5),(2,6),(3,5),(3,6),(1,6);
    `,
  },

  /* ─── #1050 Actors and Directors Who Cooperated 3+ Times ── */
  '1050': {
    description: 'ActorDirector(actor_id, director_id, timestamp)',
    setup: `
      CREATE TABLE ActorDirector (actor_id INT, director_id INT, timestamp INT);
      INSERT INTO ActorDirector VALUES (1,1,0),(1,1,1),(1,1,2),(1,2,3),(1,2,4),(2,1,5),(2,1,6);
    `,
  },

  /* ─── #1070 Product Sales Analysis III ──────────────────── */
  '1070': {
    description: 'Sales(sale_id, product_id, year, quantity, price), Product(product_id, product_name)',
    setup: `
      CREATE TABLE Product (product_id INT, product_name TEXT);
      INSERT INTO Product VALUES (1,'Nokia'),(2,'Apple'),(3,'Samsung');
      CREATE TABLE Sales (sale_id INT, product_id INT, year INT, quantity INT, price INT);
      INSERT INTO Sales VALUES (1,1,2008,10,5000),(2,1,2009,10,5000),(7,2,2011,15,9000);
    `,
  },

  /* ─── #1164 Product Price at a Given Date ────────────────── */
  '1164': {
    description: 'Products(product_id, new_price, change_date)',
    setup: `
      CREATE TABLE Products (product_id INT, new_price INT, change_date TEXT);
      INSERT INTO Products VALUES (1,20,'2019-08-14'),(2,50,'2019-08-14'),(1,30,'2019-08-15'),(1,35,'2019-08-16'),(2,65,'2019-08-17'),(3,20,'2019-08-18');
    `,
  },

  /* ─── #1193 Monthly Transactions I ──────────────────────── */
  '1193': {
    description: 'Transactions(id, country, state, amount, trans_date)',
    setup: `
      CREATE TABLE Transactions (id INT, country TEXT, state TEXT, amount INT, trans_date TEXT);
      INSERT INTO Transactions VALUES (121,'US','approved',1000,'2018-12-18'),(122,'US','declined',2000,'2018-12-19'),(123,'US','approved',2000,'2019-01-01'),(124,'DE','approved',2000,'2019-01-07');
    `,
  },

  /* ─── #1204 Last Person to Fit in the Bus ────────────────── */
  '1204': {
    description: 'Queue(person_id, person_name, weight, turn)',
    setup: `
      CREATE TABLE Queue (person_id INT, person_name TEXT, weight INT, turn INT);
      INSERT INTO Queue VALUES (5,'Alice',250,1),(4,'Bob',175,5),(3,'Alex',350,2),(6,'John Cena',400,3),(1,'Winston',500,6),(2,'Marie',200,4);
    `,
  },

  /* ─── #1321 Restaurant Growth ───────────────────────────── */
  '1321': {
    description: 'Customer(customer_id, name, visited_on, amount)',
    setup: `
      CREATE TABLE Customer (customer_id INT, name TEXT, visited_on TEXT, amount INT);
      INSERT INTO Customer VALUES (1,'Jhon','2019-01-01',100),(2,'Daniel','2019-01-02',110),(3,'Jade','2019-01-03',120),(4,'Khaled','2019-01-04',130),(5,'Winston','2019-01-05',110),(6,'Elvis','2019-01-06',140),(7,'Anna','2019-01-07',150),(8,'Maria','2019-01-08',80),(9,'Jaze','2019-01-09',110),(1,'Jhon','2019-01-10',130),(3,'Jade','2019-01-10',150);
    `,
  },

  /* ─── #1341 Movie Rating ─────────────────────────────────── */
  '1341': {
    description: 'Movies(movie_id, title), Users(user_id, name), MovieRating(movie_id, user_id, rating, created_at)',
    setup: `
      CREATE TABLE Movies (movie_id INT, title TEXT);
      INSERT INTO Movies VALUES (1,'Avengers'),(2,'Frozen 2'),(3,'Joker');
      CREATE TABLE Users (user_id INT, name TEXT);
      INSERT INTO Users VALUES (1,'Daniel'),(2,'Monica'),(3,'Maria'),(4,'James');
      CREATE TABLE MovieRating (movie_id INT, user_id INT, rating INT, created_at TEXT);
      INSERT INTO MovieRating VALUES (1,1,3,'2020-01-12'),(1,2,4,'2020-02-11'),(1,3,2,'2020-02-12'),(1,4,1,'2020-01-01'),(2,1,5,'2020-02-17'),(2,2,2,'2020-02-01'),(2,3,2,'2020-03-01'),(3,1,3,'2020-02-22'),(3,2,4,'2020-02-25');
    `,
  },

  /* ─── #1393 Capital Gain/Loss ───────────────────────────── */
  '1393': {
    description: 'Stocks(stock_name, operation, operation_day, price)',
    setup: `
      CREATE TABLE Stocks (stock_name TEXT, operation TEXT, operation_day INT, price INT);
      INSERT INTO Stocks VALUES ('Leetcode','Buy',1,1000),('Corona Masks','Buy',2,10),('Leetcode','Sell',5,9000),('Handbags','Buy',17,30000),('Corona Masks','Sell',3,1010),('Corona Masks','Buy',4,1000),('Corona Masks','Sell',5,500),('Corona Masks','Buy',6,1000),('Handbags','Sell',29,7000),('Corona Masks','Sell',10,10000);
    `,
  },

  /* ─── #1407 Top Travellers ──────────────────────────────── */
  '1407': {
    description: 'Users(id, name), Rides(id, user_id, distance)',
    setup: `
      CREATE TABLE Users (id INT, name TEXT);
      INSERT INTO Users VALUES (1,'Alice'),(2,'Bob'),(3,'Alex'),(4,'Donald'),(7,'Lee'),(13,'Jonathan'),(19,'Elvis');
      CREATE TABLE Rides (id INT, user_id INT, distance INT);
      INSERT INTO Rides VALUES (1,1,120),(2,2,317),(3,3,222),(4,7,100),(5,13,312),(6,19,50),(7,7,120),(8,19,400),(9,7,50);
    `,
  },

  /* ─── #1484 Group Sold Products By the Date ──────────────── */
  '1484': {
    description: 'Activities(sell_date, product)',
    setup: `
      CREATE TABLE Activities (sell_date TEXT, product TEXT);
      INSERT INTO Activities VALUES ('2020-05-30','Headphone'),('2020-06-01','Pencil'),('2020-06-02','Mask'),('2020-05-30','Basketball'),('2020-06-01','Bible'),('2020-06-02','Mask'),('2020-05-30','T-Shirt');
    `,
  },

  /* ─── #1517 Find Users With Valid E-Mails ────────────────── */
  '1517': {
    description: 'Users(user_id, name, mail)',
    setup: `
      CREATE TABLE Users (user_id INT, name TEXT, mail TEXT);
      INSERT INTO Users VALUES (1,'Winston','winston@leetcode.com'),(2,'Jonathan','jonathanisgreat'),(3,'Annabelle','bella-@leetcode.com'),(4,'Sally','sally.come@leetcode.com'),(5,'Marwan','quarz#2020@leetcode.com'),(6,'David','david69@gmail.com'),(7,'Shapiro','.shapo@leetcode.com');
    `,
  },

  /* ─── #1527 Patients With a Condition ───────────────────── */
  '1527': {
    description: 'Patients(patient_id, patient_name, conditions)',
    setup: `
      CREATE TABLE Patients (patient_id INT, patient_name TEXT, conditions TEXT);
      INSERT INTO Patients VALUES (1,'Daniel','YFEV COUGH'),(2,'Alice',''),(3,'Bob','DIAB100 MYOP'),(4,'George','ACNE DIAB100'),(5,'Alain','DIAB201');
    `,
  },

  /* ─── #1667 Fix Names in a Table ────────────────────────── */
  '1667': {
    description: 'Users(user_id, name)',
    setup: `
      CREATE TABLE Users (user_id INT, name TEXT);
      INSERT INTO Users VALUES (1,'aLice'),(2,'bOB');
    `,
  },

  /* ─── #1683 Invalid Tweets ──────────────────────────────── */
  '1683': {
    description: 'Tweets(tweet_id, content)',
    setup: `
      CREATE TABLE Tweets (tweet_id INT, content TEXT);
      INSERT INTO Tweets VALUES (1,'Vote for Biden'),(2,'Let us make America great again!');
    `,
  },

  /* ─── #1693 Daily Leads and Partners ────────────────────── */
  '1693': {
    description: 'DailySales(date_id, make_name, lead_id, partner_id)',
    setup: `
      CREATE TABLE DailySales (date_id TEXT, make_name TEXT, lead_id INT, partner_id INT);
      INSERT INTO DailySales VALUES ('2020-12-8','toyota',0,1),('2020-12-8','toyota',1,0),('2020-12-8','toyota',1,2),('2020-12-7','toyota',0,2),('2020-12-7','toyota',0,1),('2020-12-8','honda',1,2),('2020-12-8','honda',2,1),('2020-12-7','honda',0,1),('2020-12-7','honda',1,2),('2020-12-7','honda',1,3);
    `,
  },

  /* ─── #1729 Find Followers Count ────────────────────────── */
  '1729': {
    description: 'Followers(user_id, follower_id)',
    setup: `
      CREATE TABLE Followers (user_id INT, follower_id INT);
      INSERT INTO Followers VALUES (0,1),(1,0),(2,0),(2,1);
    `,
  },

  /* ─── #1731 The Number of Employees Which Report to Each Employee ── */
  '1731': {
    description: 'Employees(employee_id, name, reports_to, age)',
    setup: `
      CREATE TABLE Employees (employee_id INT, name TEXT, reports_to INT, age INT);
      INSERT INTO Employees VALUES (9,'Hercy',NULL,43),(6,'Alice',9,41),(4,'Bob',9,36),(2,'Winston',NULL,37);
    `,
  },

  /* ─── #1741 Find Total Time Spent by Each Employee ─────── */
  '1741': {
    description: 'Employees(emp_id, event_day, in_time, out_time)',
    setup: `
      CREATE TABLE Employees (emp_id INT, event_day TEXT, in_time INT, out_time INT);
      INSERT INTO Employees VALUES (1,'2020-11-28',4,32),(1,'2020-11-28',55,200),(1,'2020-12-03',1,42),(2,'2020-11-28',3,33),(2,'2020-12-09',47,74);
    `,
  },

  /* ─── #1757 Recyclable and Low Fat Products ─────────────── */
  '1757': {
    description: 'Products(product_id, low_fats, recyclable)',
    setup: `
      CREATE TABLE Products (product_id INT, low_fats TEXT, recyclable TEXT);
      INSERT INTO Products VALUES (0,'Y','N'),(1,'Y','Y'),(2,'N','Y'),(3,'Y','Y'),(4,'N','N');
    `,
  },

  /* ─── #1789 Primary Department for Each Employee ────────── */
  '1789': {
    description: 'Employee(employee_id, department_id, primary_flag)',
    setup: `
      CREATE TABLE Employee (employee_id INT, department_id INT, primary_flag TEXT);
      INSERT INTO Employee VALUES (1,1,'N'),(2,1,'Y'),(2,2,'N'),(3,3,'N'),(4,2,'N'),(4,3,'Y'),(4,4,'N');
    `,
  },

  /* ─── #1907 Count Salary Categories ─────────────────────── */
  '1907': {
    description: 'Accounts(account_id, income)',
    setup: `
      CREATE TABLE Accounts (account_id INT, income INT);
      INSERT INTO Accounts VALUES (3,108939),(2,12747),(8,87709),(6,91796);
    `,
  },

  /* ─── #1934 Confirmation Rate ───────────────────────────── */
  '1934': {
    description: 'Signups(user_id, time_stamp), Confirmations(user_id, time_stamp, action)',
    setup: `
      CREATE TABLE Signups (user_id INT, time_stamp TEXT);
      INSERT INTO Signups VALUES (3,'2020-03-21 10:16:13'),(7,'2020-01-04 13:57:59'),(2,'2020-07-29 23:09:44'),(6,'2020-12-09 10:39:37');
      CREATE TABLE Confirmations (user_id INT, time_stamp TEXT, action TEXT);
      INSERT INTO Confirmations VALUES (3,'2021-01-06 03:30:46','timeout'),(3,'2021-07-14 14:00:00','timeout'),(7,'2021-06-12 11:57:29','confirmed'),(7,'2021-06-13 12:58:28','confirmed'),(7,'2021-06-14 13:59:27','confirmed'),(2,'2021-01-22 00:00:00','confirmed'),(2,'2021-02-28 23:59:59','timeout');
    `,
  },
};
