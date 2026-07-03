export const sqlProblems = [
  // ─── SECTION 1: Must-Do (High Frequency) ─────────────────────────
  {
    id: 175,
    section: 1,
    name: "Combine Two Tables",
    difficulty: "Easy",
    topic: "LEFT JOIN",
    leetcodeUrl: "https://leetcode.com/problems/combine-two-tables/",
    tip: "Use LEFT JOIN so that persons without an address are still returned with NULL values.",
    description: "Write a SQL query to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not in the Address table, report null instead.",
    chatbotData: {
      intuition: "We need all persons regardless of whether they have a matching address. A standard INNER JOIN would drop people who don't have records in the Address table. Thus, a LEFT OUTER JOIN (or just LEFT JOIN) from Person to Address is perfect here.",
      complexity: "Time Complexity: O(N + M) where N and M are the sizes of Person and Address tables respectively (assuming index lookups on personId).\nSpace Complexity: O(1) beyond sorting/hashing required by the database engine.",
      edgeCases: "1. Person table has entries but Address is completely empty: returns all people with NULL city/state.\n2. Address has entries but Person is empty: returns empty result.",
      debugging: "If you are missing people, check if you accidentally used a comma join or INNER JOIN instead of LEFT JOIN."
    },
    solutions: {
      mysql: {
        code: `SELECT p.firstName, p.lastName, a.city, a.state\nFROM Person p\nLEFT JOIN Address a\nON p.personId = a.personId;`,
        explanation: [
          { line: 1, text: "Select the required columns: first name, last name, city, and state." },
          { line: 2, text: "Specify the Person table as the left table (aliased as 'p')." },
          { line: 3, text: "Use LEFT JOIN with Address (aliased as 'a') to retain all rows from Person." },
          { line: 4, text: "Perform the join condition on the common 'personId' column." }
        ]
      },
      postgresql: {
        code: `SELECT p.firstName, p.lastName, a.city, a.state\nFROM Person p\nLEFT JOIN Address a\nON p.personId = a.personId;`,
        explanation: [
          { line: 1, text: "Select fields from Person and Address." },
          { line: 3, text: "Perform standard LEFT OUTER JOIN to match rows or return NULLs." }
        ]
      },
      mssql: {
        code: `SELECT p.firstName, p.lastName, a.city, a.state\nFROM Person p\nLEFT JOIN Address a\nON p.personId = a.personId;`,
        explanation: [
          { line: 1, text: "Standard SQL-compliant LEFT JOIN works perfectly in SQL Server." }
        ]
      }
    }
  },
  {
    id: 176,
    section: 1,
    name: "Second Highest Salary",
    difficulty: "Medium",
    topic: "Subquery / LIMIT",
    leetcodeUrl: "https://leetcode.com/problems/second-highest-salary/",
    tip: "Wrap your LIMIT/OFFSET query inside an outer SELECT statement to return NULL if it is empty.",
    description: "Write a SQL query to report the second highest salary from the Employee table. If there is no second highest salary, the query should report null.",
    chatbotData: {
      intuition: "Using LIMIT 1 OFFSET 1 with descending order grabs the second row. However, if there's only 1 row or no duplicates, it returns nothing (empty set). Wrapping it in a dummy SELECT statement forces the database to return NULL instead of an empty result set.",
      complexity: "Time Complexity: O(N log N) for sorting unless an index exists on the salary column.\nSpace Complexity: O(1) or O(N) for intermediate sorting space.",
      edgeCases: "1. Only one unique salary: should return NULL.\n2. Duplicate highest salaries: must use DISTINCT to ignore duplicates.",
      debugging: "If your code returns empty instead of NULL on test cases with 1 row, wrap it inside: SELECT (your_query) AS SecondHighestSalary;"
    },
    solutions: {
      mysql: {
        code: `SELECT (\n  SELECT DISTINCT salary\n  FROM Employee\n  ORDER BY salary DESC\n  LIMIT 1 OFFSET 1\n) AS SecondHighestSalary;`,
        explanation: [
          { line: 1, text: "Outer SELECT wrapper: ensures that an empty subquery result becomes a single NULL." },
          { line: 2, text: "Select unique salaries using DISTINCT to skip duplicate values." },
          { line: 4, text: "Order from highest to lowest." },
          { line: 5, text: "LIMIT 1 (take one row) OFFSET 1 (skip the absolute highest)." }
        ]
      },
      postgresql: {
        code: `SELECT (\n  SELECT DISTINCT salary\n  FROM Employee\n  ORDER BY salary DESC\n  LIMIT 1 OFFSET 1\n) AS "SecondHighestSalary";`,
        explanation: [
          { line: 1, text: "Wrap inside standard subquery for NULL fallback." },
          { line: 6, text: "Alias with double quotes if case preservation is needed in PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT MAX(salary) AS SecondHighestSalary\nFROM Employee\nWHERE salary < (\n  SELECT MAX(salary)\n  FROM Employee\n);`,
        explanation: [
          { line: 1, text: "Query the maximum salary..." },
          { line: 3, text: "...that is strictly less than..." },
          { line: 4, text: "...the overall maximum salary. Since MAX of an empty set is NULL, it handles empty case naturally." }
        ]
      }
    }
  },
  {
    id: 181,
    section: 1,
    name: "Employees Earning More Than Managers",
    difficulty: "Easy",
    topic: "Self JOIN",
    leetcodeUrl: "https://leetcode.com/problems/employees-earning-more-than-managers/",
    tip: "Perform a self-join linking Employee to itself on employee.managerId = manager.id.",
    description: "Write a SQL query to find the employees who earn more than their managers.",
    chatbotData: {
      intuition: "Since manager and employee data are in the same Employee table, we can join the table to itself. One side represents the employees, the other manager. Match on employee's managerId and manager's id, and filter where employee salary > manager salary.",
      complexity: "Time Complexity: O(N²) in the worst case, but O(N) if managerId and id are indexed.\nSpace Complexity: O(1) extra space.",
      edgeCases: "1. Employee has no manager (managerId IS NULL): the join will filter them out, which is correct.",
      debugging: "Make sure you match Employee.managerId = Manager.id and NOT the other way around!"
    },
    solutions: {
      mysql: {
        code: `SELECT e.name AS Employee\nFROM Employee e\nJOIN Employee m\nON e.managerId = m.id\nWHERE e.salary > m.salary;`,
        explanation: [
          { line: 1, text: "Select employee name aliased as 'Employee'." },
          { line: 2, text: "Load Employee table as 'e' (the employee)." },
          { line: 3, text: "Join Employee table as 'm' (the manager)." },
          { line: 4, text: "Join condition: employee's managerId equals manager's id." },
          { line: 5, text: "Filter condition: employee salary exceeds manager salary." }
        ]
      },
      postgresql: {
        code: `SELECT e.name AS Employee\nFROM Employee e\nJOIN Employee m\nON e.managerId = m.id\nWHERE e.salary > m.salary;`,
        explanation: [
          { line: 1, text: "Standard SQL self-join works identical in PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT e.name AS Employee\nFROM Employee e\nINNER JOIN Employee m\nON e.managerId = m.id\nWHERE e.salary > m.salary;`,
        explanation: [
          { line: 3, text: "Explicit INNER JOIN is standard in SQL Server." }
        ]
      }
    }
  },
  {
    id: 182,
    section: 1,
    name: "Duplicate Emails",
    difficulty: "Easy",
    topic: "Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/duplicate-emails/",
    tip: "Use GROUP BY email and filter with HAVING COUNT(email) > 1.",
    description: "Write a SQL query to report all the duplicate emails.",
    chatbotData: {
      intuition: "To find duplicates, we group the rows by email. This groups all matching emails together. Then, we use HAVING COUNT(email) > 1 to filter out groups that only appear once.",
      complexity: "Time Complexity: O(N) to traverse and group the emails.\nSpace Complexity: O(U) where U is the number of unique emails.",
      edgeCases: "1. No duplicate emails: returns empty set.\n2. All emails are duplicates: returns unique list of those emails.",
      debugging: "Always write HAVING instead of WHERE when filtering based on aggregate counts."
    },
    solutions: {
      mysql: {
        code: `SELECT email\nFROM Person\nGROUP BY email\nHAVING COUNT(email) > 1;`,
        explanation: [
          { line: 1, text: "Select the email column." },
          { line: 3, text: "Group rows by the email address." },
          { line: 4, text: "Filter groups with occurrence count greater than one." }
        ]
      },
      postgresql: {
        code: `SELECT email\nFROM Person\nGROUP BY email\nHAVING COUNT(email) > 1;`,
        explanation: [
          { line: 4, text: "Standard HAVING COUNT aggregation filters duplicates." }
        ]
      },
      mssql: {
        code: `SELECT email\nFROM Person\nGROUP BY email\nHAVING COUNT(email) > 1;`,
        explanation: [
          { line: 1, text: "Works the same across all SQL Server versions." }
        ]
      }
    }
  },
  {
    id: 183,
    section: 1,
    name: "Customers Who Never Order",
    difficulty: "Easy",
    topic: "LEFT JOIN",
    leetcodeUrl: "https://leetcode.com/problems/customers-who-never-order/",
    tip: "Perform a LEFT JOIN from Customers to Orders and filter for orders.customerId IS NULL.",
    description: "Write a SQL query to report all customers who never order anything.",
    chatbotData: {
      intuition: "A LEFT JOIN preserves all customers. If a customer has never ordered, their corresponding order columns will be NULL. We can filter on `o.customerId IS NULL` or use `NOT IN` / `NOT EXISTS` to find them.",
      complexity: "Time Complexity: O(N + M) assuming index on customerId.\nSpace Complexity: O(1).",
      edgeCases: "1. All customers have ordered: returns empty.\n2. No customers have ordered: returns all customers.",
      debugging: "Make sure you filter for `Orders.customerId IS NULL` and not Customers.id!"
    },
    solutions: {
      mysql: {
        code: `SELECT c.name AS Customers\nFROM Customers c\nLEFT JOIN Orders o\nON c.id = o.customerId\nWHERE o.customerId IS NULL;`,
        explanation: [
          { line: 1, text: "Select the customer name and alias it as 'Customers'." },
          { line: 2, text: "Select from the Customers table (aliased as 'c')." },
          { line: 3, text: "LEFT JOIN Orders (aliased as 'o') on customer ID." },
          { line: 5, text: "Filter for rows where the order's customerId is NULL, representing unmatched records." }
        ]
      },
      postgresql: {
        code: `SELECT c.name AS "Customers"\nFROM Customers c\nLEFT JOIN Orders o\nON c.id = o.customerId\nWHERE o.customerId IS NULL;`,
        explanation: [
          { line: 1, text: "Use quotes for 'Customers' alias to preserve camelCase header format." }
        ]
      },
      mssql: {
        code: `SELECT c.name AS Customers\nFROM Customers c\nLEFT OUTER JOIN Orders o\nON c.id = o.customerId\nWHERE o.customerId IS NULL;`,
        explanation: [
          { line: 3, text: "LEFT OUTER JOIN is functionally equivalent and SQL Server compliant." }
        ]
      }
    }
  },
  {
    id: 184,
    section: 1,
    name: "Department Highest Salary",
    difficulty: "Medium",
    topic: "Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/department-highest-salary/",
    tip: "Use a subquery to find maximum salaries grouped by department, then join with Employee.",
    description: "Write a SQL query to find employees who have the highest salary in each of the departments.",
    chatbotData: {
      intuition: "First, find the maximum salary for each departmentId. Then, filter the main Employee table to only rows whose departmentId and salary match that maximum pair.",
      complexity: "Time Complexity: O(N) with indexes on departmentId and salary.\nSpace Complexity: O(D) where D is the number of departments.",
      edgeCases: "1. Multiple employees share the highest salary: all must be returned.\n2. A department has no employees: it is ignored.",
      debugging: "If your solution is missing tied highest earners, check if you grouped on Employee names instead of departmentId."
    },
    solutions: {
      mysql: {
        code: `SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary\nFROM Employee e\nJOIN Department d ON e.departmentId = d.id\nWHERE (e.departmentId, e.salary) IN (\n  SELECT departmentId, MAX(salary)\n  FROM Employee\n  GROUP BY departmentId\n);`,
        explanation: [
          { line: 1, text: "Select department name, employee name, and salary." },
          { line: 3, text: "Join Employee and Department on department ID." },
          { line: 4, text: "Filter using a row value constructor IN subquery..." },
          { line: 5, text: "...to select the maximum salary grouped by department ID." }
        ]
      },
      postgresql: {
        code: `SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary\nFROM Employee e\nJOIN Department d ON e.departmentId = d.id\nWHERE (e.departmentId, e.salary) IN (\n  SELECT departmentId, MAX(salary)\n  FROM Employee\n  GROUP BY departmentId\n);`,
        explanation: [
          { line: 4, text: "PostgreSQL supports tuple-based (row value constructor) IN subqueries." }
        ]
      },
      mssql: {
        code: `SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary\nFROM Employee e\nJOIN Department d ON e.departmentId = d.id\nJOIN (\n  SELECT departmentId, MAX(salary) AS max_sal\n  FROM Employee\n  GROUP BY departmentId\n) m ON e.departmentId = m.departmentId AND e.salary = m.max_sal;`,
        explanation: [
          { line: 4, text: "Since SQL Server does not support tuple-based IN (A, B) checks, join on an aggregate subquery instead." },
          { line: 8, text: "Join matching both department ID and the maximum salary." }
        ]
      }
    }
  },
  {
    id: 185,
    section: 1,
    name: "Department Top Three Salaries",
    difficulty: "Hard",
    topic: "Window Function",
    leetcodeUrl: "https://leetcode.com/problems/department-top-three-salaries/",
    tip: "Use DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) in a CTE.",
    description: "Write a SQL query to find the employees who are high earners in each of the departments (top 3 unique salaries).",
    chatbotData: {
      intuition: "We need the top 3 *unique* salaries. This is what DENSE_RANK() is built for. DENSE_RANK() assigns consecutive ranks without skipping numbers (e.g. 1, 2, 2, 3), whereas RANK() skips (e.g. 1, 2, 2, 4). Partition by department and filter for rank <= 3.",
      complexity: "Time Complexity: O(N log N) for partition sorting.\nSpace Complexity: O(N) to store ranked results.",
      edgeCases: "1. Fewer than 3 employees in a department: returns all.\n2. Tiers / multiple duplicates: DENSE_RANK correctly returns all matching employees.",
      debugging: "Make sure you use DENSE_RANK() instead of RANK() or ROW_NUMBER() to handle duplicate salary ties correctly!"
    },
    solutions: {
      mysql: {
        code: `WITH RankedEmployees AS (\n  SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary,\n         DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk\n  FROM Employee e\n  JOIN Department d ON e.departmentId = d.id\n)\nSELECT Department, Employee, Salary\nFROM RankedEmployees\nWHERE rnk <= 3;`,
        explanation: [
          { line: 1, text: "Create a Common Table Expression (CTE) to calculate ranks." },
          { line: 3, text: "Compute DENSE_RANK() partitioned by department, ordered descending by salary." },
          { line: 4, text: "Join Employee with Department." },
          { line: 7, text: "Query the CTE." },
          { line: 9, text: "Filter out ranks greater than 3." }
        ]
      },
      postgresql: {
        code: `WITH RankedEmployees AS (\n  SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary,\n         DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk\n  FROM Employee e\n  JOIN Department d ON e.departmentId = d.id\n)\nSELECT Department, Employee, Salary\nFROM RankedEmployees\nWHERE rnk <= 3;`,
        explanation: [
          { line: 3, text: "PostgreSQL fully supports window functions inside standard CTE expressions." }
        ]
      },
      mssql: {
        code: `WITH RankedEmployees AS (\n  SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary,\n         DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS rnk\n  FROM Employee e\n  JOIN Department d ON e.departmentId = d.id\n)\nSELECT Department, Employee, Salary\nFROM RankedEmployees\nWHERE rnk <= 3;`,
        explanation: [
          { line: 3, text: "Compatible across all SQL Server versions supporting window aggregates." }
        ]
      }
    }
  },
  {
    id: 196,
    section: 1,
    name: "Delete Duplicate Emails",
    difficulty: "Easy",
    topic: "DML",
    leetcodeUrl: "https://leetcode.com/problems/delete-duplicate-emails/",
    tip: "Use a self-join deletion or a subquery to keep only the minimum id for each email.",
    description: "Write a SQL query to delete all duplicate email entries in a Person table, keeping only unique emails based on its smallest id.",
    chatbotData: {
      intuition: "We want to delete a row if another row exists with the same email but a smaller ID. We can express this by joining the table to itself on email and comparing ids.",
      complexity: "Time Complexity: O(N²) in the worst case without indexes, but O(N) optimized.\nSpace Complexity: O(1).",
      edgeCases: "1. No duplicates: no deletions happen.\n2. Multiple duplicates: all but the lowest ID are deleted.",
      debugging: "Make sure you compare the ID fields correctly to keep the *smallest* ID (`p1.id > p2.id`)."
    },
    solutions: {
      mysql: {
        code: `DELETE p1\nFROM Person p1, Person p2\nWHERE p1.email = p2.email\nAND p1.id > p2.id;`,
        explanation: [
          { line: 1, text: "Delete from table instance 'p1'." },
          { line: 2, text: "Declare two alias instances of Person: 'p1' and 'p2'." },
          { line: 3, text: "Join on matching email addresses." },
          { line: 4, text: "Condition: delete 'p1' if its ID is strictly greater than 'p2''s ID." }
        ]
      },
      postgresql: {
        code: `DELETE FROM Person\nWHERE id NOT IN (\n  SELECT MIN(id)\n  FROM Person\n  GROUP BY email\n);`,
        explanation: [
          { line: 1, text: "Delete from Person..." },
          { line: 2, text: "...where the ID is NOT the minimum ID..." },
          { line: 4, text: "...for each distinct email address group." }
        ]
      },
      mssql: {
        code: `WITH CTE AS (\n  SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) as rn\n  FROM Person\n)\nDELETE FROM Person\nWHERE id IN (\n  SELECT id\n  FROM CTE\n  WHERE rn > 1\n);`,
        explanation: [
          { line: 1, text: "Define a CTE to identify duplicate rows." },
          { line: 2, text: "Generate row numbers partitioned by email, ordering by ID." },
          { line: 5, text: "Delete rows..." },
          { line: 8, text: "...where the row number is greater than 1 (meaning it's a duplicate)." }
        ]
      }
    }
  },
  {
    id: 197,
    section: 1,
    name: "Rising Temperature",
    difficulty: "Easy",
    topic: "Date Join",
    leetcodeUrl: "https://leetcode.com/problems/rising-temperature/",
    tip: "Use DATEDIFF or date addition to join Weather to itself with a 1-day difference.",
    description: "Write a SQL query to find all dates' Id with higher temperatures compared to its previous dates (yesterday).",
    chatbotData: {
      intuition: "We must join the Weather table to itself. One side represents today, the other yesterday. The join condition checks if today's recordDate is exactly 1 day after yesterday's. Then filter where today's temperature > yesterday's.",
      complexity: "Time Complexity: O(N log N) if recordDate is indexed.\nSpace Complexity: O(1).",
      edgeCases: "1. Gaps in dates: if a date is missing, it won't join to a 'yesterday' and is ignored correctly.\n2. Non-consecutive rows: join guarantees we match actual yesterday, not just previous row.",
      debugging: "In MySQL, DATEDIFF(a, b) = 1 means a - b = 1. In SQL Server, DATEDIFF(day, b, a) = 1. Be careful with parameter order!"
    },
    solutions: {
      mysql: {
        code: `SELECT w1.id\nFROM Weather w1\nJOIN Weather w2\nON DATEDIFF(w1.recordDate, w2.recordDate) = 1\nWHERE w1.temperature > w2.temperature;`,
        explanation: [
          { line: 1, text: "Select today's weather ID." },
          { line: 2, text: "Load Weather as w1 (today) and w2 (yesterday)." },
          { line: 4, text: "Join condition: DATEDIFF(today, yesterday) is exactly 1 day." },
          { line: 5, text: "Filter: today's temperature exceeds yesterday's." }
        ]
      },
      postgresql: {
        code: `SELECT w1.id\nFROM Weather w1\nJOIN Weather w2\nON w1.recordDate = w2.recordDate + INTERVAL '1 day'\nWHERE w1.temperature > w2.temperature;`,
        explanation: [
          { line: 4, text: "In PostgreSQL, add a 1-day interval to yesterday's date to match today's." }
        ]
      },
      mssql: {
        code: `SELECT w1.id\nFROM Weather w1\nJOIN Weather w2\nON DATEDIFF(day, w2.recordDate, w1.recordDate) = 1\nWHERE w1.temperature > w2.temperature;`,
        explanation: [
          { line: 4, text: "In SQL Server, DATEDIFF takes the date part 'day' as the first argument, and computes w1 - w2." }
        ]
      }
    }
  },
  {
    id: 177,
    section: 1,
    name: "Nth Highest Salary",
    difficulty: "Medium",
    topic: "Function / OFFSET",
    leetcodeUrl: "https://leetcode.com/problems/nth-highest-salary/",
    tip: "Subtract 1 from N first because OFFSET is 0-indexed.",
    description: "Write a SQL query to get the nth highest salary from the Employee table.",
    chatbotData: {
      intuition: "To find the Nth highest salary, we sort unique salaries descending, and skip N-1 rows. We wrap this in a user-defined function or CTE. Since OFFSET is 0-indexed, we must adjust N to N-1 before query execution.",
      complexity: "Time Complexity: O(N log N) for sorting.\nSpace Complexity: O(1).",
      edgeCases: "1. Fewer than N distinct salaries: returns NULL.\n2. N is non-positive: handled by pre-checks or returns NULL.",
      debugging: "Do not put expressions like `N-1` directly inside `LIMIT 1 OFFSET N-1` in MySQL; you must set a variable `SET N = N - 1` beforehand."
    },
    solutions: {
      mysql: {
        code: `CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT\nBEGIN\n  SET N = N - 1;\n  RETURN (\n      SELECT DISTINCT salary\n      FROM Employee\n      ORDER BY salary DESC\n      LIMIT 1 OFFSET N\n  );\nEND`,
        explanation: [
          { line: 1, text: "Define MySQL function accepting parameter N, returning INT." },
          { line: 3, text: "Decrement N by 1 to adjust for 0-indexed OFFSET." },
          { line: 4, text: "Return the result of the query." },
          { line: 5, text: "Select distinct salaries descending, skipping N rows, taking 1." }
        ]
      },
      postgresql: {
        code: `CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT AS $$\nBEGIN\n  RETURN (\n      SELECT DISTINCT salary\n      FROM Employee\n      ORDER BY salary DESC\n      LIMIT 1 OFFSET N - 1\n  );\nEND;\n$$ LANGUAGE plpgsql;`,
        explanation: [
          { line: 1, text: "PostgreSQL function syntax using standard plpgsql language." },
          { line: 7, text: "PostgreSQL allows expressions directly in LIMIT/OFFSET, so offset N - 1 works directly." }
        ]
      },
      mssql: {
        code: `CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS\nBEGIN\n  RETURN (\n      SELECT DISTINCT salary\n      FROM Employee\n      ORDER BY salary DESC\n      OFFSET @N-1 ROWS FETCH NEXT 1 ROWS ONLY\n  );\nEND`,
        explanation: [
          { line: 1, text: "SQL Server function using @N parameter syntax." },
          { line: 7, text: "Use OFFSET @N-1 ROWS FETCH NEXT 1 ROWS ONLY syntax for pagination in MS SQL." }
        ]
      }
    }
  },
  {
    id: 178,
    section: 1,
    name: "Rank Scores",
    difficulty: "Medium",
    topic: "Window Function",
    leetcodeUrl: "https://leetcode.com/problems/rank-scores/",
    tip: "Use DENSE_RANK() ordered by score descending.",
    description: "Write a SQL query to rank scores. The scores should be ranked from the highest to the lowest.",
    chatbotData: {
      intuition: "We want contiguous ranks for scores. If there's a tie, they get the same rank, and the next rank should be the next consecutive integer. This is the exact definition of DENSE_RANK().",
      complexity: "Time Complexity: O(N log N) for sorting.\nSpace Complexity: O(N).",
      edgeCases: "1. Empty table: returns empty.\n2. All scores identical: all get rank 1.",
      debugging: "In SQL, `rank` is often a reserved word. Make sure to alias it with quotes: `AS 'rank'` or `AS \"rank\"`."
    },
    solutions: {
      mysql: {
        code: `SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank'\nFROM Scores;`,
        explanation: [
          { line: 1, text: "Select score and compute DENSE_RANK() ordered descending." },
          { line: 2, text: "Alias the output column as 'rank' using quotes to avoid reserved keyword conflicts." }
        ]
      },
      postgresql: {
        code: `SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS "rank"\nFROM Scores;`,
        explanation: [
          { line: 1, text: "PostgreSQL requires double quotes to retain lowercase column names like 'rank'." }
        ]
      },
      mssql: {
        code: `SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS [rank]\nFROM Scores;`,
        explanation: [
          { line: 1, text: "Use square brackets [rank] to escape reserved keyword in SQL Server." }
        ]
      }
    }
  },
  {
    id: 180,
    section: 1,
    name: "Consecutive Numbers",
    difficulty: "Medium",
    topic: "Window Function",
    leetcodeUrl: "https://leetcode.com/problems/consecutive-numbers/",
    tip: "Use LAG(num, 1) and LAG(num, 2) to check if the current number matches the previous two.",
    description: "Write a SQL query to find all numbers that appear at least three times consecutively.",
    chatbotData: {
      intuition: "Consecutive means they appear one after another by ID order. We can use LAG() to look back 1 and 2 rows. If the current number matches the value from 1 row ago and 2 rows ago, it appears consecutively 3 times.",
      complexity: "Time Complexity: O(N log N) to sort rows for LAG lookups.\nSpace Complexity: O(N).",
      edgeCases: "1. Fewer than 3 rows: returns empty.\n2. ID gap: problem assumes contiguous IDs or consecutive order.",
      debugging: "Make sure you use `DISTINCT` in the outer select; a number appearing 4 times consecutively would generate duplicate matches."
    },
    solutions: {
      mysql: {
        code: `SELECT DISTINCT num AS ConsecutiveNums\nFROM (\n  SELECT num,\n         LAG(num, 1) OVER (ORDER BY id) AS prev1,\n         LAG(num, 2) OVER (ORDER BY id) AS prev2\n  FROM Logs\n) t\nWHERE num = prev1 AND num = prev2;`,
        explanation: [
          { line: 1, text: "Select unique numbers satisfying the condition." },
          { line: 4, text: "Use LAG(num, 1) to get the value of the previous row." },
          { line: 5, text: "Use LAG(num, 2) to get the value of the row 2 steps back." },
          { line: 8, text: "Filter where all three values match." }
        ]
      },
      postgresql: {
        code: `SELECT DISTINCT num AS "ConsecutiveNums"\nFROM (\n  SELECT num,\n         LAG(num, 1) OVER (ORDER BY id) AS prev1,\n         LAG(num, 2) OVER (ORDER BY id) AS prev2\n  FROM Logs\n) t\nWHERE num = prev1 AND num = prev2;`,
        explanation: [
          { line: 1, text: "Same window approach; quotes on alias for matching Case requirements." }
        ]
      },
      mssql: {
        code: `SELECT DISTINCT num AS ConsecutiveNums\nFROM (\n  SELECT num,\n         LAG(num, 1) OVER (ORDER BY id) AS prev1,\n         LAG(num, 2) OVER (ORDER BY id) AS prev2\n  FROM Logs\n) t\nWHERE num = prev1 AND num = prev2;`,
        explanation: [
          { line: 4, text: "LAG window function works natively across SQL Server." }
        ]
      }
    }
  },

  // ─── SECTION 2: Intermediate (Window & Aggregation) ──────────────
  {
    id: 262,
    section: 2,
    name: "Trips and Users",
    difficulty: "Medium",
    topic: "Conditional Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/trips-and-users/",
    tip: "Join Trips to Users twice (for client and driver) to filter out banned users, then calculate cancellation rate.",
    description: "Write a SQL query to find the cancellation rate of requests with unbanned users (both client and driver) each day between '2013-10-01' and '2013-10-03'. Round to 2 decimal points.",
    chatbotData: {
      intuition: "Filter out trips with banned clients or banned drivers. Then group by day. The cancellation rate is total cancelled trips divided by total trips. Use CASE WHEN inside SUM to count cancellations.",
      complexity: "Time Complexity: O(N) where N is the number of trips, with index on request_at.\nSpace Complexity: O(D) where D is the number of days.",
      edgeCases: "1. Days with 0 trips: won't be returned (cancellation rate is undefined).\n2. Float conversion: in PostgreSQL, divide by COUNT(*) using decimal numbers (e.g. 1.0) to avoid integer division.",
      debugging: "Verify you checked both driver AND client banned status. And make sure dates are exactly '2013-10-01' and '2013-10-03' inclusive."
    },
    solutions: {
      mysql: {
        code: `SELECT request_at AS Day,\n       ROUND(SUM(CASE WHEN status != 'completed' THEN 1 ELSE 0 END) / COUNT(*), 2) AS 'Cancellation Rate'\nFROM Trips t\nJOIN Users u1 ON t.client_id = u1.users_id AND u1.banned = 'No'\nJOIN Users u2 ON t.driver_id = u2.users_id AND u2.banned = 'No'\nWHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'\nGROUP BY request_at;`,
        explanation: [
          { line: 2, text: "Compute ratio of cancelled trips (non-completed status) to total trips, rounding to 2 decimal places." },
          { line: 4, text: "Join Users u1 on client ID to filter out banned clients." },
          { line: 5, text: "Join Users u2 on driver ID to filter out banned drivers." },
          { line: 6, text: "Restrict query to the requested 3-day window." }
        ]
      },
      postgresql: {
        code: `SELECT request_at AS Day,\n       ROUND(SUM(CASE WHEN status != 'completed' THEN 1.0 ELSE 0.0 END) / COUNT(*), 2) AS "Cancellation Rate"\nFROM Trips t\nJOIN Users u1 ON t.client_id = u1.users_id AND u1.banned = 'No'\nJOIN Users u2 ON t.driver_id = u2.users_id AND u2.banned = 'No'\nWHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'\nGROUP BY request_at;`,
        explanation: [
          { line: 2, text: "Use 1.0 and 0.0 inside SUM to force floating-point math in PostgreSQL and prevent truncated division." }
        ]
      },
      mssql: {
        code: `SELECT request_at AS Day,\n       CAST(ROUND(SUM(CASE WHEN status != 'completed' THEN 1.0 ELSE 0.0 END) / COUNT(*), 2) AS DECIMAL(10,2)) AS [Cancellation Rate]\nFROM Trips t\nINNER JOIN Users u1 ON t.client_id = u1.users_id AND u1.banned = 'No'\nINNER JOIN Users u2 ON t.driver_id = u2.users_id AND u2.banned = 'No'\nWHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'\nGROUP BY request_at;`,
        explanation: [
          { line: 2, text: "Cast to DECIMAL(10,2) to ensure trailing zeroes are preserved in output." }
        ]
      }
    }
  },
  {
    id: 511,
    section: 2,
    name: "Game Play Analysis I",
    difficulty: "Easy",
    topic: "Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/game-play-analysis-i/",
    tip: "Use MIN(event_date) grouped by player_id.",
    description: "Write a SQL query to report the first login date for each player.",
    chatbotData: {
      intuition: "The first login date is simply the minimum date recorded for each player. A simple GROUP BY player_id with MIN(event_date) solves this.",
      complexity: "Time Complexity: O(N) to scan the Activity table.\nSpace Complexity: O(P) where P is the number of distinct players.",
      edgeCases: "1. A player has only 1 login: MIN returns that date.",
      debugging: "Ensure you group by player_id, not event_date."
    },
    solutions: {
      mysql: {
        code: `SELECT player_id, MIN(event_date) AS first_login\nFROM Activity\nGROUP BY player_id;`,
        explanation: [
          { line: 1, text: "Select player ID and their minimum login date." },
          { line: 3, text: "Group rows by player ID so aggregates apply per player." }
        ]
      },
      postgresql: {
        code: `SELECT player_id, MIN(event_date) AS first_login\nFROM Activity\nGROUP BY player_id;`,
        explanation: [
          { line: 1, text: "Standard GROUP BY aggregator." }
        ]
      },
      mssql: {
        code: `SELECT player_id, MIN(event_date) AS first_login\nFROM Activity\nGROUP BY player_id;`,
        explanation: [
          { line: 1, text: "Standard syntax compatible across SQL Server." }
        ]
      }
    }
  },
  {
    id: 512,
    section: 2,
    name: "Game Play Analysis II",
    difficulty: "Medium",
    topic: "Subquery",
    leetcodeUrl: "https://leetcode.com/problems/game-play-analysis-ii/",
    tip: "Use an IN subquery with player_id and event_date matching the first login per player.",
    description: "Write a SQL query to report the device that each player used for their first login.",
    chatbotData: {
      intuition: "We cannot just select device_id in a GROUP BY player_id query because device_id is not part of the aggregation. Instead, we query the first login dates, and filter our main table to match those exact player_id and event_date combinations.",
      complexity: "Time Complexity: O(N log N) without indexes, O(N) with index.\nSpace Complexity: O(P) where P is the number of players.",
      edgeCases: "1. Multiple logins on the same day: question assumes one login record per date.",
      debugging: "If your database doesn't support tuple IN checks (like SQL Server), use a JOIN with the aggregated subquery."
    },
    solutions: {
      mysql: {
        code: `SELECT player_id, device_id\nFROM Activity\nWHERE (player_id, event_date) IN (\n  SELECT player_id, MIN(event_date)\n  FROM Activity\n  GROUP BY player_id\n);`,
        explanation: [
          { line: 1, text: "Select player and device." },
          { line: 3, text: "Filter where both player_id and event_date..." },
          { line: 4, text: "...exist in the subquery matching player to their first login date." }
        ]
      },
      postgresql: {
        code: `SELECT player_id, device_id\nFROM Activity\nWHERE (player_id, event_date) IN (\n  SELECT player_id, MIN(event_date)\n  FROM Activity\n  GROUP BY player_id\n);`,
        explanation: [
          { line: 3, text: "Tuple IN comparison works natively in PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT a.player_id, a.device_id\nFROM Activity a\nJOIN (\n  SELECT player_id, MIN(event_date) AS min_date\n  FROM Activity\n  GROUP BY player_id\n) m ON a.player_id = m.player_id AND a.event_date = m.min_date;`,
        explanation: [
          { line: 3, text: "Join on a subquery containing player_id and their first login date." },
          { line: 7, text: "Match on both player ID and the minimum login date to select the correct device." }
        ]
      }
    }
  },
  {
    id: 534,
    section: 2,
    name: "Game Play Analysis III",
    difficulty: "Medium",
    topic: "Window Function",
    leetcodeUrl: "https://leetcode.com/problems/game-play-analysis-iii/",
    tip: "Use SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date) to compute running totals.",
    description: "Write a SQL query to report for each player and date, how many games played so far by the player. That is, the total number of games played by the player until that date.",
    chatbotData: {
      intuition: "Running totals are best solved with window functions. We want to sum games_played, partition (group) by player_id, and order by event_date so the aggregation accumulates chronologically.",
      complexity: "Time Complexity: O(N log N) for window sorting.\nSpace Complexity: O(N).",
      edgeCases: "1. Only 1 log: running total is just that value.",
      debugging: "Do not forget ORDER BY inside OVER(); otherwise, it sums the entire partition at once instead of computing a running total."
    },
    solutions: {
      mysql: {
        code: `SELECT player_id, event_date,\n       SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date) AS games_played_so_far\nFROM Activity;`,
        explanation: [
          { line: 1, text: "Select player ID and event date." },
          { line: 2, text: "Compute running SUM of games played, partitioned by player and sorted by date." }
        ]
      },
      postgresql: {
        code: `SELECT player_id, event_date,\n       SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date) AS games_played_so_far\nFROM Activity;`,
        explanation: [
          { line: 2, text: "Window SUM works natively in PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT player_id, event_date,\n       SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date) AS games_played_so_far\nFROM Activity;`,
        explanation: [
          { line: 2, text: "Compatible across all SQL Server versions supporting window aggregates." }
        ]
      }
    }
  },
  {
    id: 550,
    section: 2,
    name: "Game Play Analysis IV",
    difficulty: "Medium",
    topic: "Date Join",
    leetcodeUrl: "https://leetcode.com/problems/game-play-analysis-iv/",
    tip: "Self-join on a.player_id = first_login.player_id AND today = first_login + 1 day, then calculate fraction.",
    description: "Write a SQL query to report the fraction of players that logged in again on the day after the day they first logged in, rounded to 2 decimal places.",
    chatbotData: {
      intuition: "Find the first login date for each player. Then left join the Activity table to this subquery where the activity date is exactly 1 day after the first login date. Count players with a match, divided by total unique players.",
      complexity: "Time Complexity: O(N log N) due to aggregation and join.\nSpace Complexity: O(P) to hold unique players.",
      edgeCases: "1. No players logging in consecutive days: returns 0.00.\n2. Date function formats: handle MySQL DATEDIFF vs PostgreSQL date math carefully.",
      debugging: "Make sure you divide by the total number of *distinct* players in the entire table, not just those who logged in on day 2."
    },
    solutions: {
      mysql: {
        code: `SELECT ROUND(\n  COUNT(DISTINCT a.player_id) / (SELECT COUNT(DISTINCT player_id) FROM Activity),\n  2\n) AS fraction\nFROM Activity a\nJOIN (\n  SELECT player_id, MIN(event_date) AS first_date\n  FROM Activity\n  GROUP BY player_id\n) f ON a.player_id = f.player_id AND DATEDIFF(a.event_date, f.first_date) = 1;`,
        explanation: [
          { line: 1, text: "Calculate and round the fraction to 2 decimals." },
          { line: 2, text: "Divide count of consecutive-login players by total unique players." },
          { line: 8, text: "Join Activity table 'a' with subquery 'f' containing each player's first login date." },
          { line: 10, text: "Match where player logged in exactly 1 day after first_date." }
        ]
      },
      postgresql: {
        code: `SELECT ROUND(\n  CAST(COUNT(DISTINCT a.player_id) AS DECIMAL) / (SELECT COUNT(DISTINCT player_id) FROM Activity),\n  2\n) AS fraction\nFROM Activity a\nJOIN (\n  SELECT player_id, MIN(event_date) AS first_date\n  FROM Activity\n  GROUP BY player_id\n) f ON a.player_id = f.player_id AND a.event_date = f.first_date + INTERVAL '1 day';`,
        explanation: [
          { line: 2, text: "Cast numerator to DECIMAL in PostgreSQL to avoid integer division." },
          { line: 10, text: "Use PG date arithmetic: event_date = first_date + INTERVAL '1 day'." }
        ]
      },
      mssql: {
        code: `SELECT ROUND(\n  CAST(COUNT(DISTINCT a.player_id) AS FLOAT) / (SELECT COUNT(DISTINCT player_id) FROM Activity),\n  2\n) AS fraction\nFROM Activity a\nJOIN (\n  SELECT player_id, MIN(event_date) AS first_date\n  FROM Activity\n  GROUP BY player_id\n) f ON a.player_id = f.player_id AND DATEDIFF(day, f.first_date, a.event_date) = 1;`,
        explanation: [
          { line: 2, text: "Cast count to FLOAT in SQL Server to avoid integer truncation." },
          { line: 10, text: "Use SQL Server DATEDIFF(day, start, end) = 1." }
        ]
      }
    }
  },
  {
    id: 570,
    section: 2,
    name: "Managers with at Least 5 Reports",
    difficulty: "Medium",
    topic: "Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/managers-with-at-least-5-reports/",
    tip: "Use GROUP BY managerId HAVING COUNT(*) >= 5 in a subquery, then join with Employee to get their names.",
    description: "Write a SQL query to report the managers who have at least five direct reports.",
    chatbotData: {
      intuition: "First, group employees by managerId and filter for groups with a size of 5 or more. Then join the resulting manager IDs back to the Employee table to retrieve the manager's name.",
      complexity: "Time Complexity: O(N) to aggregate and join.\nSpace Complexity: O(M) where M is the number of managers.",
      edgeCases: "1. A manager has 5 reports but their own name is NULL: returns NULL.\n2. No managers have >= 5 reports: returns empty.",
      debugging: "Do not count reports by grouping on manager names directly, because names are not unique. Always group on ID fields (managerId)."
    },
    solutions: {
      mysql: {
        code: `SELECT e.name\nFROM Employee e\nJOIN (\n  SELECT managerId\n  FROM Employee\n  GROUP BY managerId\n  HAVING COUNT(id) >= 5\n) m ON e.id = m.managerId;`,
        explanation: [
          { line: 1, text: "Select manager's name." },
          { line: 3, text: "Join Employee table with a subquery of qualifying manager IDs." },
          { line: 4, text: "Subquery: Group employees by managerId..." },
          { line: 6, text: "...and filter for managerId groups with 5 or more reports." }
        ]
      },
      postgresql: {
        code: `SELECT e.name\nFROM Employee e\nJOIN (\n  SELECT managerId\n  FROM Employee\n  GROUP BY managerId\n  HAVING COUNT(id) >= 5\n) m ON e.id = m.managerId;`,
        explanation: [
          { line: 1, text: "PostgreSQL syntax matches MySQL for this aggregation join." }
        ]
      },
      mssql: {
        code: `SELECT e.name\nFROM Employee e\nINNER JOIN (\n  SELECT managerId\n  FROM Employee\n  GROUP BY managerId\n  HAVING COUNT(id) >= 5\n) m ON e.id = m.managerId;`,
        explanation: [
          { line: 3, text: "INNER JOIN syntax is fully standard in SQL Server." }
        ]
      }
    }
  },
  {
    id: 602,
    section: 2,
    name: "Friend Requests II",
    difficulty: "Medium",
    topic: "UNION ALL",
    leetcodeUrl: "https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/",
    tip: "Use UNION ALL to combine requester_id and accepter_id columns into a single column, then count occurrences.",
    description: "Write a SQL query to find the people who have the most friends and the most friends number.",
    chatbotData: {
      intuition: "A friendship is mutual. A user's total friends is their appearances as requester_id PLUS their appearances as accepter_id. We can use UNION ALL to merge both columns into one list of user IDs, then group by ID and count occurrences descending.",
      complexity: "Time Complexity: O(N log N) for grouping and sorting.\nSpace Complexity: O(N) to store temporary union records.",
      edgeCases: "1. Multiple people tied for most friends: LeetCode tests usually guarantee a single winner or accept any one.",
      debugging: "Make sure you use `UNION ALL` instead of `UNION`. `UNION` removes duplicate rows, which would delete occurrences of users having multiple friendships!"
    },
    solutions: {
      mysql: {
        code: `WITH AllConnections AS (\n  SELECT requester_id AS id FROM RequestAccepted\n  UNION ALL\n  SELECT accepter_id AS id FROM RequestAccepted\n)\nSELECT id, COUNT(*) AS num\nFROM AllConnections\nGROUP BY id\nORDER BY num DESC\nLIMIT 1;`,
        explanation: [
          { line: 1, text: "Create a CTE to combine requester and accepter columns." },
          { line: 2, text: "Collect all user IDs that sent request." },
          { line: 3, text: "UNION ALL retains duplicates so we don't lose occurrences." },
          { line: 4, text: "Collect all user IDs that accepted request." },
          { line: 8, text: "Group and count occurrences of each user ID, sorting highest to lowest." },
          { line: 10, text: "Limit to 1 to return the user with the maximum friend count." }
        ]
      },
      postgresql: {
        code: `WITH AllConnections AS (\n  SELECT requester_id AS id FROM RequestAccepted\n  UNION ALL\n  SELECT accepter_id AS id FROM RequestAccepted\n)\nSELECT id, COUNT(*) AS num\nFROM AllConnections\nGROUP BY id\nORDER BY num DESC\nLIMIT 1;`,
        explanation: [
          { line: 10, text: "PostgreSQL supports LIMIT 1 for pagination." }
        ]
      },
      mssql: {
        code: `WITH AllConnections AS (\n  SELECT requester_id AS id FROM RequestAccepted\n  UNION ALL\n  SELECT accepter_id AS id FROM RequestAccepted\n)\nSELECT TOP 1 id, COUNT(*) AS num\nFROM AllConnections\nGROUP BY id\nORDER BY num DESC;`,
        explanation: [
          { line: 6, text: "Use TOP 1 inside SELECT instead of LIMIT 1 at the end in SQL Server." }
        ]
      }
    }
  },
  {
    id: 608,
    section: 2,
    name: "Tree Node",
    difficulty: "Medium",
    topic: "CASE WHEN",
    leetcodeUrl: "https://leetcode.com/problems/tree-node/",
    tip: "Use CASE WHEN to label nodes: p_id IS NULL is Root, id IN (SELECT p_id...) is Inner, others are Leaf.",
    description: "Write a SQL query to report the type of each node in the tree (Root, Inner, Leaf).",
    chatbotData: {
      intuition: "1. A node is a 'Root' if it has no parent (p_id IS NULL).\n2. A node is 'Leaf' if it has a parent but is not a parent to any other node (id is never a p_id).\n3. Otherwise, it is 'Inner'.",
      complexity: "Time Complexity: O(N) or O(N log N) depending on index availability.\nSpace Complexity: O(1).",
      edgeCases: "1. A tree with only one node (the root): labeled 'Root'.",
      debugging: "When checking `id NOT IN (SELECT p_id...)`, if any p_id is NULL, the IN check will return false/unknown. Make sure to filter `WHERE p_id IS NOT NULL` in your subquery."
    },
    solutions: {
      mysql: {
        code: `SELECT id,\n       CASE\n         WHEN p_id IS NULL THEN 'Root'\n         WHEN id IN (SELECT DISTINCT p_id FROM Tree WHERE p_id IS NOT NULL) THEN 'Inner'\n         ELSE 'Leaf'\n       END AS type\nFROM Tree;`,
        explanation: [
          { line: 2, text: "Use a CASE statement to determine node type." },
          { line: 3, text: "Condition 1: If parent ID is NULL, it must be the Root node." },
          { line: 4, text: "Condition 2: If the node ID exists as a parent to other nodes, it is an Inner node." },
          { line: 5, text: "Condition 3: All other nodes are Leaf nodes." }
        ]
      },
      postgresql: {
        code: `SELECT id,\n       CASE\n         WHEN p_id IS NULL THEN 'Root'\n         WHEN id IN (SELECT DISTINCT p_id FROM Tree WHERE p_id IS NOT NULL) THEN 'Inner'\n         ELSE 'Leaf'\n       END AS type\nFROM Tree;`,
        explanation: [
          { line: 1, text: "Standard CASE WHEN statement matches PostgreSQL syntax." }
        ]
      },
      mssql: {
        code: `SELECT id,\n       CASE\n         WHEN p_id IS NULL THEN 'Root'\n         WHEN id IN (SELECT DISTINCT p_id FROM Tree WHERE p_id IS NOT NULL) THEN 'Inner'\n         ELSE 'Leaf'\n       END AS type\nFROM Tree;`,
        explanation: [
          { line: 1, text: "Compatible across all SQL Server versions." }
        ]
      }
    }
  },
  {
    id: 626,
    section: 2,
    name: "Exchange Seats",
    difficulty: "Medium",
    topic: "CASE WHEN / MOD",
    leetcodeUrl: "https://leetcode.com/problems/exchange-seats/",
    tip: "Use MOD / modular arithmetic inside CASE WHEN to swap odd IDs to id+1 and even IDs to id-1.",
    description: "Write a SQL query to swap the seat id of every two consecutive students. If the number of students is odd, the id of the last student is not swapped.",
    chatbotData: {
      intuition: "We can modify the ID values using logic:\n1. If ID is odd and it's the maximum ID in the table, keep it unchanged.\n2. If ID is odd, map to ID + 1.\n3. If ID is even, map to ID - 1.\nThen order by the new ID.",
      complexity: "Time Complexity: O(N log N) to sort the rows by seat ID.\nSpace Complexity: O(1).",
      edgeCases: "1. Odd number of seats: the maximum ID is preserved correctly.\n2. Only 1 seat: remains unchanged.",
      debugging: "Be sure to order the final query output by the updated ID value (`ORDER BY id`)."
    },
    solutions: {
      mysql: {
        code: `SELECT CASE\n         WHEN MOD(id, 2) = 1 AND id = (SELECT MAX(id) FROM Seat) THEN id\n         WHEN MOD(id, 2) = 1 THEN id + 1\n         ELSE id - 1\n       END AS id,\n       student\nFROM Seat\nORDER BY id;`,
        explanation: [
          { line: 1, text: "Use CASE statement to calculate target IDs." },
          { line: 2, text: "If ID is odd (MOD equals 1) and is the last record, don't swap it." },
          { line: 3, text: "If ID is odd and not last, swap to next row (id + 1)." },
          { line: 4, text: "Otherwise, ID is even: swap to previous row (id - 1)." },
          { line: 8, text: "Sort the final result set by the newly computed IDs." }
        ]
      },
      postgresql: {
        code: `SELECT CASE\n         WHEN id % 2 = 1 AND id = (SELECT MAX(id) FROM Seat) THEN id\n         WHEN id % 2 = 1 THEN id + 1\n         ELSE id - 1\n       END AS id,\n       student\nFROM Seat\nORDER BY id;`,
        explanation: [
          { line: 2, text: "PostgreSQL uses standard '%' operator instead of MOD function." }
        ]
      },
      mssql: {
        code: `SELECT CASE\n         WHEN id % 2 = 1 AND id = (SELECT MAX(id) FROM Seat) THEN id\n         WHEN id % 2 = 1 THEN id + 1\n         ELSE id - 1\n       END AS id,\n       student\nFROM Seat\nORDER BY id;`,
        explanation: [
          { line: 2, text: "Use standard '%' modulo operator in SQL Server." }
        ]
      }
    }
  },
  {
    id: 1158,
    section: 2,
    name: "Market Analysis I",
    difficulty: "Medium",
    topic: "LEFT JOIN",
    leetcodeUrl: "https://leetcode.com/problems/market-analysis-i/",
    tip: "LEFT JOIN Users to Orders with the date condition inside the ON clause, not in WHERE.",
    description: "Write a SQL query to find for each user, the join date and the number of orders they made as a buyer in 2019.",
    chatbotData: {
      intuition: "We want to report every user, even if they didn't place any orders in 2019. A LEFT JOIN from Users to Orders is required. Crucially, the date filter `order_date BETWEEN '2019-01-01' AND '2019-12-31'` must be placed inside the ON clause. If put in WHERE, it would act as an inner join filter and drop users with 0 orders.",
      complexity: "Time Complexity: O(N + M) assuming indexes on buyer_id.\nSpace Complexity: O(1).",
      edgeCases: "1. Users with no orders: order count returns 0 (COALESCE/COUNT handles this).\n2. Users with orders in other years: correctly ignored.",
      debugging: "If users with 0 orders are missing from your output, check if your year filter is in the WHERE clause instead of the ON clause."
    },
    solutions: {
      mysql: {
        code: `SELECT u.user_id AS buyer_id, u.join_date,\n       COUNT(o.order_id) AS orders_in_2019\nFROM Users u\nLEFT JOIN Orders o\nON u.user_id = o.buyer_id AND o.order_date BETWEEN '2019-01-01' AND '2019-12-31'\nGROUP BY u.user_id, u.join_date;`,
        explanation: [
          { line: 1, text: "Select buyer ID and user join date." },
          { line: 2, text: "Count order IDs (not '*' so NULL values are counted as 0)." },
          { line: 4, text: "Use LEFT JOIN to retain users who placed no orders." },
          { line: 5, text: "Join condition: match buyer ID AND filter order dates between 2019-01-01 and 2019-12-31." },
          { line: 6, text: "Group by user ID and join date." }
        ]
      },
      postgresql: {
        code: `SELECT u.user_id AS buyer_id, u.join_date,\n       COUNT(o.order_id) AS orders_in_2019\nFROM Users u\nLEFT JOIN Orders o\nON u.user_id = o.buyer_id AND EXTRACT(YEAR FROM o.order_date) = 2019\nGROUP BY u.user_id, u.join_date;`,
        explanation: [
          { line: 5, text: "Use EXTRACT(YEAR FROM date) for alternative clean year filtering in PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT u.user_id AS buyer_id, u.join_date,\n       COUNT(o.order_id) AS orders_in_2019\nFROM Users u\nLEFT OUTER JOIN Orders o\nON u.user_id = o.buyer_id AND YEAR(o.order_date) = 2019\nGROUP BY u.user_id, u.join_date;`,
        explanation: [
          { line: 5, text: "Use standard SQL Server YEAR(date) function in join condition." }
        ]
      }
    }
  },
  {
    id: 1174,
    section: 2,
    name: "Immediate Food Delivery II",
    difficulty: "Medium",
    topic: "Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/immediate-food-delivery-ii/",
    tip: "Filter for first orders using (customer_id, order_date) IN (MIN date subquery), then find percentage.",
    description: "Write a SQL query to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places.",
    chatbotData: {
      intuition: "First, find each customer's first order date. Then query rows matching those (customer_id, first_order_date) pairs. An order is 'immediate' if order_date equals customer_pref_delivery_date. Calculate the ratio of immediate first orders to total first orders.",
      complexity: "Time Complexity: O(N log N) to identify minimum dates and join.\nSpace Complexity: O(P) where P is the number of customers.",
      edgeCases: "1. Customer has multiple orders on their first day: database logic matches first order day.",
      debugging: "Remember to multiply the ratio by 100.0 before dividing, to avoid decimal truncation."
    },
    solutions: {
      mysql: {
        code: `SELECT ROUND(\n  SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END) * 100.0 / COUNT(*),\n  2\n) AS immediate_percentage\nFROM Delivery\nWHERE (customer_id, order_date) IN (\n  SELECT customer_id, MIN(order_date)\n  FROM Delivery\n  GROUP BY customer_id\n);`,
        explanation: [
          { line: 1, text: "Round the final aggregate percentage to 2 decimal places." },
          { line: 2, text: "Calculate percentage: count immediate orders (where date matches preference) times 100 divided by total first orders." },
          { line: 5, text: "Filter only first orders using a tuple IN clause..." },
          { line: 6, text: "...to select the minimum order date for each customer." }
        ]
      },
      postgresql: {
        code: `SELECT ROUND(\n  CAST(SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1.0 ELSE 0.0 END) * 100.0 / COUNT(*) AS DECIMAL),\n  2\n) AS immediate_percentage\nFROM Delivery\nWHERE (customer_id, order_date) IN (\n  SELECT customer_id, MIN(order_date)\n  FROM Delivery\n  GROUP BY customer_id\n);`,
        explanation: [
          { line: 2, text: "Cast the division results to DECIMAL in PostgreSQL before rounding." }
        ]
      },
      mssql: {
        code: `WITH FirstOrders AS (\n  SELECT customer_id, MIN(order_date) AS min_date\n  FROM Delivery\n  GROUP BY customer_id\n)\nSELECT ROUND(\n  SUM(CASE WHEN d.order_date = d.customer_pref_delivery_date THEN 1.0 ELSE 0.0 END) * 100.0 / COUNT(*),\n  2\n) AS immediate_percentage\nFROM Delivery d\nJOIN FirstOrders f ON d.customer_id = f.customer_id AND d.order_date = f.min_date;`,
        explanation: [
          { line: 1, text: "Create a CTE 'FirstOrders' to find minimum order dates for each customer." },
          { line: 9, text: "Join the Delivery table to the CTE to isolate each customer's first order." }
        ]
      }
    }
  },
  {
    id: 1193,
    section: 2,
    name: "Monthly Transactions I",
    difficulty: "Medium",
    topic: "Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/monthly-transactions-i/",
    tip: "Use DATE_FORMAT or similar string formatting to group by month and country, then sum columns conditional on state.",
    description: "Write a SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.",
    chatbotData: {
      intuition: "We group transactions by country and month (yyyy-mm format). We count all transactions and sum their total amounts. To get the approved counts and totals, we use CASE WHEN to only sum values where state = 'approved'.",
      complexity: "Time Complexity: O(N log N) to group values.\nSpace Complexity: O(U) where U is unique month-country pairs.",
      edgeCases: "1. Countries with only 'declined' transactions: approved count should be 0, approved amount should be 0.\n2. NULL countries: handled by standard grouping.",
      debugging: "Make sure you group by BOTH country and month. Use the appropriate date function (DATE_FORMAT for MySQL, TO_CHAR for PostgreSQL, FORMAT for SQL Server)."
    },
    solutions: {
      mysql: {
        code: `SELECT DATE_FORMAT(trans_date, '%Y-%m') AS month, country,\n       COUNT(*) AS trans_count,\n       SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,\n       SUM(amount) AS trans_total_amount,\n       SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount\nFROM Transactions\nGROUP BY DATE_FORMAT(trans_date, '%Y-%m'), country;`,
        explanation: [
          { line: 1, text: "Extract month in YYYY-MM format and select country." },
          { line: 2, text: "Count total transactions." },
          { line: 3, text: "Use CASE WHEN to count only 'approved' transactions." },
          { line: 4, text: "Sum total transaction amounts." },
          { line: 5, text: "Sum transaction amounts only if they are approved." },
          { line: 7, text: "Group results by month and country." }
        ]
      },
      postgresql: {
        code: `SELECT TO_CHAR(trans_date, 'YYYY-MM') AS month, country,\n       COUNT(*) AS trans_count,\n       SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,\n       SUM(amount) AS trans_total_amount,\n       SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount\nFROM Transactions\nGROUP BY TO_CHAR(trans_date, 'YYYY-MM'), country;`,
        explanation: [
          { line: 1, text: "In PostgreSQL, use TO_CHAR(date, 'YYYY-MM') for date formatting." }
        ]
      },
      mssql: {
        code: `SELECT FORMAT(trans_date, 'yyyy-MM') AS month, country,\n       COUNT(*) AS trans_count,\n       SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,\n       SUM(amount) AS trans_total_amount,\n       SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount\nFROM Transactions\nGROUP BY FORMAT(trans_date, 'yyyy-MM'), country;`,
        explanation: [
          { line: 1, text: "In SQL Server, use FORMAT(date, 'yyyy-MM') for date grouping." }
        ]
      }
    }
  },
  {
    id: 1321,
    section: 2,
    name: "Restaurant Growth",
    difficulty: "Medium",
    topic: "Sliding Window",
    leetcodeUrl: "https://leetcode.com/problems/restaurant-growth/",
    tip: "Use SUM() OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) on daily aggregates.",
    description: "Write a SQL query to compute the moving average of how much the customer paid in a seven-day window (current day + 6 days before).",
    chatbotData: {
      intuition: "First, group deposits by visited_on to get daily totals. Then, apply a sliding window function: sum the daily totals over a window spanning 6 preceding rows to the current row. To ensure we have a full 7-day window, filter out the first 6 records using DENSE_RANK() or similar offsets.",
      complexity: "Time Complexity: O(N log N) for window aggregations.\nSpace Complexity: O(D) where D is unique days.",
      edgeCases: "1. Fewer than 7 days total: returns empty.",
      debugging: "Be sure to group by visited_on *before* applying the window SUM. Multiple customers can visit on the same day!"
    },
    solutions: {
      mysql: {
        code: `SELECT visited_on, amount,\n       ROUND(amount / 7, 2) AS average_amount\nFROM (\n  SELECT visited_on,\n         SUM(day_amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,\n         DENSE_RANK() OVER (ORDER BY visited_on) AS rnk\n  FROM (\n    SELECT visited_on, SUM(amount) AS day_amount\n    FROM Customer\n    GROUP BY visited_on\n  ) t\n) t2\nWHERE rnk >= 7;`,
        explanation: [
          { line: 2, text: "Round the moving average (amount divided by 7) to 2 decimal places." },
          { line: 5, text: "Window sum of daily totals over the current day plus 6 preceding days." },
          { line: 6, text: "Assign dense rank order to identify and exclude the first 6 incomplete days." },
          { line: 8, text: "Compute total daily amount grouped by visit date first." },
          { line: 13, text: "Filter: return only days with a complete 7-day history (rank >= 7)." }
        ]
      },
      postgresql: {
        code: `SELECT visited_on, amount,\n       ROUND(CAST(amount AS DECIMAL) / 7, 2) AS average_amount\nFROM (\n  SELECT visited_on,\n         SUM(day_amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,\n         DENSE_RANK() OVER (ORDER BY visited_on) AS rnk\n  FROM (\n    SELECT visited_on, SUM(amount) AS day_amount\n    FROM Customer\n    GROUP BY visited_on\n  ) t\n) t2\nWHERE rnk >= 7;`,
        explanation: [
          { line: 2, text: "Cast sum amount to DECIMAL in PostgreSQL before dividing to get correct decimals." }
        ]
      },
      mssql: {
        code: `SELECT visited_on, amount,\n       ROUND(CAST(amount AS FLOAT) / 7, 2) AS average_amount\nFROM (\n  SELECT visited_on,\n         SUM(day_amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount,\n         DENSE_RANK() OVER (ORDER BY visited_on) AS rnk\n  FROM (\n    SELECT visited_on, SUM(amount) AS day_amount\n    FROM Customer\n    GROUP BY visited_on\n  ) t\n) t2\nWHERE rnk >= 7;`,
        explanation: [
          { line: 2, text: "Cast sum amount to FLOAT in SQL Server before dividing." }
        ]
      }
    }
  },
  {
    id: 1341,
    section: 2,
    name: "Movie Rating",
    difficulty: "Medium",
    topic: "UNION ALL",
    leetcodeUrl: "https://leetcode.com/problems/movie-rating/",
    tip: "Write two separate queries (one for top user, one for top movie) and combine them using UNION ALL.",
    description: "Write a SQL query to: 1. Find the name of the user who has rated the greatest number of movies (tie-breaker: lexicographically smaller name). 2. Find the movie name with the highest average rating in February 2020 (tie-breaker: lexicographically smaller name).",
    chatbotData: {
      intuition: "This is a two-part query combined into one result set. We calculate the top user using aggregates and sorting. Then we calculate the top movie by average rating in Feb 2020. Finally, combine both outputs using UNION ALL.",
      complexity: "Time Complexity: O(N log N) for grouping and sorting.\nSpace Complexity: O(N).",
      edgeCases: "1. Ties: order by name/title ascending as the secondary sort key to break ties correctly.",
      debugging: "Make sure you use UNION ALL. If the same string is returned by both parts (highly unlikely but possible), UNION would collapse them into 1 row."
    },
    solutions: {
      mysql: {
        code: `(SELECT u.name AS results\n FROM MovieRating mr\n JOIN Users u ON mr.user_id = u.user_id\n GROUP BY u.name\n ORDER BY COUNT(*) DESC, u.name ASC\n LIMIT 1)\nUNION ALL\n(SELECT m.title AS results\n FROM MovieRating mr\n JOIN Movies m ON mr.movie_id = m.movie_id\n WHERE mr.created_at BETWEEN '2020-02-01' AND '2020-02-29'\n GROUP BY m.title\n ORDER BY AVG(mr.rating) DESC, m.title ASC\n LIMIT 1);`,
        explanation: [
          { line: 1, text: "First part: query for the top user." },
          { line: 5, text: "Order by rate count descending, then user name ascending." },
          { line: 7, text: "UNION ALL combines the results of both subqueries." },
          { line: 8, text: "Second part: query for the top movie." },
          { line: 11, text: "Filter only reviews created in February 2020." },
          { line: 13, text: "Order by average rating descending, then movie title ascending." }
        ]
      },
      postgresql: {
        code: `(SELECT u.name AS results\n FROM MovieRating mr\n JOIN Users u ON mr.user_id = u.user_id\n GROUP BY u.name\n ORDER BY COUNT(*) DESC, u.name ASC\n LIMIT 1)\nUNION ALL\n(SELECT m.title AS results\n FROM MovieRating mr\n JOIN Movies m ON mr.movie_id = m.movie_id\n WHERE mr.created_at BETWEEN '2020-02-01' AND '2020-02-29'\n GROUP BY m.title\n ORDER BY AVG(mr.rating) DESC, m.title ASC\n LIMIT 1);`,
        explanation: [
          { line: 1, text: "Syntax matches MySQL exactly for this combined query." }
        ]
      },
      mssql: {
        code: `SELECT results FROM (\n  SELECT TOP 1 u.name AS results\n  FROM MovieRating mr\n  INNER JOIN Users u ON mr.user_id = u.user_id\n  GROUP BY u.name\n  ORDER BY COUNT(*) DESC, u.name ASC\n) t1\nUNION ALL\nSELECT results FROM (\n  SELECT TOP 1 m.title AS results\n  FROM MovieRating mr\n  INNER JOIN Movies m ON mr.movie_id = m.movie_id\n  WHERE mr.created_at >= '2020-02-01' AND mr.created_at <= '2020-02-29'\n  GROUP BY m.title\n  ORDER BY AVG(mr.rating) DESC, m.title ASC\n) t2;`,
        explanation: [
          { line: 2, text: "In SQL Server, subqueries with TOP 1 are required since LIMIT is not supported." }
        ]
      }
    }
  },

  // ─── SECTION 3: Advanced (Hard) ──────────────────────────────────
  {
    id: 1204,
    section: 3,
    name: "Last Person to Fit in the Bus",
    difficulty: "Medium",
    topic: "Sliding Window",
    leetcodeUrl: "https://leetcode.com/problems/last-person-to-fit-in-the-bus/",
    tip: "Use running total SUM(weight) OVER (ORDER BY turn) and find the last person where weight <= 1000.",
    description: "Write a SQL query to find the person_name of the last person that can fit on the bus without exceeding the weight limit of 1000 kgs.",
    chatbotData: {
      intuition: "First, compute the running sum of weight ordered by turn. This represents the total weight of the bus after each person boards. Then, filter for total weights <= 1000, sort by total weight descending, and take the first record.",
      complexity: "Time Complexity: O(N log N) to compute the running sum.\nSpace Complexity: O(N).",
      edgeCases: "1. First person exceeds 1000kg: no one fits (handled by data assumptions usually).\n2. Total weight fits exactly: matches that last person.",
      debugging: "Ensure you sort by running weight descending (`ORDER BY cumulative_weight DESC`) to select the *last* person who fits."
    },
    solutions: {
      mysql: {
        code: `SELECT person_name\nFROM (\n  SELECT person_name,\n         SUM(weight) OVER (ORDER BY turn) AS cumulative_weight\n  FROM Queue\n) t\nWHERE cumulative_weight <= 1000\nORDER BY cumulative_weight DESC\nLIMIT 1;`,
        explanation: [
          { line: 1, text: "Select the name of the passenger." },
          { line: 4, text: "Calculate the running total of weight ordered by boarding turn." },
          { line: 7, text: "Filter only records where the cumulative weight is within the 1000kg limit." },
          { line: 8, text: "Order descending to put the last boarded person on top." },
          { line: 9, text: "Limit to 1 to select that person." }
        ]
      },
      postgresql: {
        code: `SELECT person_name\nFROM (\n  SELECT person_name,\n         SUM(weight) OVER (ORDER BY turn) AS cumulative_weight\n  FROM Queue\n) t\nWHERE cumulative_weight <= 1000\nORDER BY cumulative_weight DESC\nLIMIT 1;`,
        explanation: [
          { line: 1, text: "Standard window syntax works identically in PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT TOP 1 person_name\nFROM (\n  SELECT person_name,\n         SUM(weight) OVER (ORDER BY turn) AS cumulative_weight\n  FROM Queue\n) t\nWHERE cumulative_weight <= 1000\nORDER BY cumulative_weight DESC;`,
        explanation: [
          { line: 1, text: "Use SELECT TOP 1 at the beginning of the query instead of LIMIT 1 in SQL Server." }
        ]
      }
    }
  },
  {
    id: 601,
    section: 3,
    name: "Human Traffic of Stadium",
    difficulty: "Hard",
    topic: "Window Function",
    leetcodeUrl: "https://leetcode.com/problems/human-traffic-of-stadium/",
    tip: "Use row numbers difference (id - ROW_NUMBER() OVER()) to identify consecutive blocks of rows.",
    description: "Write a SQL query to display the records with three or more consecutive rows and the number of people is greater than or equal to 100.",
    chatbotData: {
      intuition: "First, filter out rows where people < 100. For the remaining rows, if they are consecutive, their `id` and their sequential `row_number` will increase at the same rate. This means `id - row_number` will be constant for consecutive groups. Group by this difference to filter groups with size >= 3.",
      complexity: "Time Complexity: O(N log N) for window sorting.\nSpace Complexity: O(N).",
      edgeCases: "1. Empty table: returns empty.\n2. Multiple separate consecutive groups: groups are correctly isolated by their differences.",
      debugging: "Make sure you calculate the row numbers AFTER filtering for people >= 100, otherwise the group ID math won't work!"
    },
    solutions: {
      mysql: {
        code: `WITH ConsecutiveGroups AS (\n  SELECT id, visit_date, people,\n         id - ROW_NUMBER() OVER (ORDER BY id) AS grp\n  FROM Stadium\n  WHERE people >= 100\n)\nSELECT id, visit_date, people\nFROM ConsecutiveGroups\nWHERE grp IN (\n  SELECT grp\n  FROM ConsecutiveGroups\n  GROUP BY grp\n  HAVING COUNT(*) >= 3\n)\nORDER BY visit_date;`,
        explanation: [
          { line: 1, text: "Create CTE to isolate visitors >= 100 and identify blocks." },
          { line: 3, text: "Compute grouping value: subtract row number from ID." },
          { line: 5, text: "Pre-filter: keep only rows where crowd count is at least 100." },
          { line: 9, text: "Filter rows whose group ID..." },
          { line: 11, text: "...belongs to groups with a size of 3 or more." }
        ]
      },
      postgresql: {
        code: `WITH ConsecutiveGroups AS (\n  SELECT id, visit_date, people,\n         id - ROW_NUMBER() OVER (ORDER BY id) AS grp\n  FROM Stadium\n  WHERE people >= 100\n)\nSELECT id, visit_date, people\nFROM ConsecutiveGroups\nWHERE grp IN (\n  SELECT grp\n  FROM ConsecutiveGroups\n  GROUP BY grp\n  HAVING COUNT(*) >= 3\n)\nORDER BY visit_date;`,
        explanation: [
          { line: 1, text: "CTE and ROW_NUMBER window work natively in PostgreSQL." }
        ]
      },
      mssql: {
        code: `WITH ConsecutiveGroups AS (\n  SELECT id, visit_date, people,\n         id - ROW_NUMBER() OVER (ORDER BY id) AS grp\n  FROM Stadium\n  WHERE people >= 100\n)\nSELECT id, visit_date, people\nFROM ConsecutiveGroups\nWHERE grp IN (\n  SELECT grp\n  FROM ConsecutiveGroups\n  GROUP BY grp\n  HAVING COUNT(*) >= 3\n)\nORDER BY visit_date;`,
        explanation: [
          { line: 1, text: "SQL Server compliant CTE query works identically." }
        ]
      }
    }
  },
  {
    id: 1633,
    section: 3,
    name: "Percentage of Users Attended a Contest",
    difficulty: "Medium",
    topic: "Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/percentage-of-users-attended-a-contest/",
    tip: "Group by contest_id and divide registration count by a subquery of total users count.",
    description: "Write a SQL query to find the percentage of the users registered in each contest, rounded to 2 decimal places.",
    chatbotData: {
      intuition: "For each contest, count the registered users. Divide by the total number of users (queried via a nested `SELECT COUNT(*) FROM Users` subquery). Multiply by 100.0 and round to 2 decimal places.",
      complexity: "Time Complexity: O(R) where R is the number of registrations.\nSpace Complexity: O(C) where C is the number of contests.",
      edgeCases: "1. Empty registration table: returns empty.\n2. 100% attendance: returns 100.00.",
      debugging: "Multiply count by 100.0 (decimal) BEFORE dividing, to prevent integer division in engines like PostgreSQL."
    },
    solutions: {
      mysql: {
        code: `SELECT contest_id,\n       ROUND(COUNT(user_id) * 100.0 / (SELECT COUNT(*) FROM Users), 2) AS percentage\nFROM Register\nGROUP BY contest_id\nORDER BY percentage DESC, contest_id ASC;`,
        explanation: [
          { line: 1, text: "Select contest ID." },
          { line: 2, text: "Divide registration count by total user count, multiply by 100, and round." },
          { line: 4, text: "Group rows by contest." },
          { line: 5, text: "Sort by percentage descending, breaking ties with contest_id ascending." }
        ]
      },
      postgresql: {
        code: `SELECT contest_id,\n       ROUND(COUNT(user_id) * 100.0 / (SELECT COUNT(*) FROM Users), 2) AS percentage\nFROM Register\nGROUP BY contest_id\nORDER BY percentage DESC, contest_id ASC;`,
        explanation: [
          { line: 2, text: "Standard numeric division handles decimal operations perfectly in PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT contest_id,\n       ROUND(COUNT(user_id) * 100.0 / (SELECT COUNT(*) FROM Users), 2) AS percentage\nFROM Register\nGROUP BY contest_id\nORDER BY percentage DESC, contest_id ASC;`,
        explanation: [
          { line: 2, text: "SQL Server supports subquery counts inside projection arithmetic." }
        ]
      }
    }
  },

  // ─── SECTION 4: Quick-Win Easy Problems ──────────────────────────
  {
    id: 577,
    section: 4,
    name: "Employee Bonus",
    difficulty: "Easy",
    topic: "LEFT JOIN",
    leetcodeUrl: "https://leetcode.com/problems/employee-bonus/",
    tip: "Use LEFT JOIN and check for bonus < 1000 OR bonus IS NULL.",
    description: "Write a SQL query to report the name and bonus amount of each employee with a bonus less than 1000.",
    chatbotData: {
      intuition: "Employees without a bonus record are considered to have a bonus of < 1000. So we LEFT JOIN Employee to Bonus, and filter where bonus is less than 1000 OR bonus is NULL.",
      complexity: "Time Complexity: O(N) where N is employee count.\nSpace Complexity: O(1).",
      edgeCases: "1. Employee has no bonus row: returned with NULL bonus (valid).",
      debugging: "Make sure you include `OR bonus IS NULL`. A simple `WHERE bonus < 1000` will filter out anyone with no bonus records!"
    },
    solutions: {
      mysql: {
        code: `SELECT e.name, b.bonus\nFROM Employee e\nLEFT JOIN Bonus b\nON e.empId = b.empId\nWHERE b.bonus < 1000 OR b.bonus IS NULL;`,
        explanation: [
          { line: 1, text: "Select employee name and bonus amount." },
          { line: 2, text: "Load Employee table as left table 'e'." },
          { line: 3, text: "LEFT JOIN Bonus table 'b' on employee ID." },
          { line: 5, text: "Filter: bonus must be less than 1000 OR it must be NULL." }
        ]
      },
      postgresql: {
        code: `SELECT e.name, b.bonus\nFROM Employee e\nLEFT JOIN Bonus b\nON e.empId = b.empId\nWHERE b.bonus < 1000 OR b.bonus IS NULL;`,
        explanation: [
          { line: 5, text: "Same filter logic applies for PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT e.name, b.bonus\nFROM Employee e\nLEFT OUTER JOIN Bonus b\nON e.empId = b.empId\nWHERE b.bonus < 1000 OR b.bonus IS NULL;`,
        explanation: [
          { line: 3, text: "LEFT OUTER JOIN matches SQL Server formatting standards." }
        ]
      }
    }
  },
  {
    id: 584,
    section: 4,
    name: "Find Customer Referee",
    difficulty: "Easy",
    topic: "Filter",
    leetcodeUrl: "https://leetcode.com/problems/find-customer-referee/",
    tip: "Check for referee_id != 2 OR referee_id IS NULL to handle NULL values properly.",
    description: "Write a SQL query to report the names of the customer that are not referred by the customer with id = 2.",
    chatbotData: {
      intuition: "In SQL, NULL comparisons (like `referee_id != 2`) evaluate to UNKNOWN, not TRUE. Therefore, rows with NULL values are discarded. We must explicitly include them using `OR referee_id IS NULL`.",
      complexity: "Time Complexity: O(N) to scan table.\nSpace Complexity: O(1).",
      edgeCases: "1. Referee ID is NULL: returned correctly.\n2. All rows are NULL: returns all records.",
      debugging: "If your solution is missing customers, check if you forgot the `OR referee_id IS NULL` comparison."
    },
    solutions: {
      mysql: {
        code: `SELECT name\nFROM Customer\nWHERE referee_id != 2 OR referee_id IS NULL;`,
        explanation: [
          { line: 1, text: "Select customer name." },
          { line: 3, text: "Filter: referee_id is not equal to 2, or is NULL." }
        ]
      },
      postgresql: {
        code: `SELECT name\nFROM Customer\nWHERE referee_id != 2 OR referee_id IS NULL;`,
        explanation: [
          { line: 3, text: "Standard SQL NULL handling matches PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT name\nFROM Customer\nWHERE referee_id <> 2 OR referee_id IS NULL;`,
        explanation: [
          { line: 3, text: "Use standard `<>` inequality operator (or `!=`) for SQL Server." }
        ]
      }
    }
  },
  {
    id: 595,
    section: 4,
    name: "Big Countries",
    difficulty: "Easy",
    topic: "Filter",
    leetcodeUrl: "https://leetcode.com/problems/big-countries/",
    tip: "Use simple OR conditions on area and population.",
    description: "Write a SQL query to report the name, population, and area of the big countries (area >= 3,000,000 sq km or population >= 25,000,000).",
    chatbotData: {
      intuition: "A simple filter query. We use the OR operator to select rows matching either criteria.",
      complexity: "Time Complexity: O(N) to scan, or O(log N) if indexes exist.\nSpace Complexity: O(1).",
      edgeCases: "1. Country matches both: returned once (OR handles this natively).",
      debugging: "Ensure you use the correct number of zeroes (3000000 and 25000000)."
    },
    solutions: {
      mysql: {
        code: `SELECT name, population, area\nFROM World\nWHERE area >= 3000000 OR population >= 25000000;`,
        explanation: [
          { line: 1, text: "Select name, population, and area fields." },
          { line: 3, text: "Apply OR criteria for big area or big population." }
        ]
      },
      postgresql: {
        code: `SELECT name, population, area\nFROM World\nWHERE area >= 3000000 OR population >= 25000000;`,
        explanation: [
          { line: 1, text: "Standard filter query is universal across all relational databases." }
        ]
      },
      mssql: {
        code: `SELECT name, population, area\nFROM World\nWHERE area >= 3000000 OR population >= 25000000;`,
        explanation: [
          { line: 1, text: "Same query works identically on SQL Server." }
        ]
      }
    }
  },
  {
    id: 596,
    section: 4,
    name: "Classes More Than 5 Students",
    difficulty: "Easy",
    topic: "Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/classes-more-than-5-students/",
    tip: "Group by class and filter with HAVING COUNT(student) >= 5.",
    description: "Write a SQL query to report all the classes that have at least five students.",
    chatbotData: {
      intuition: "Group the rows by class, then filter groups with a count of students >= 5 using the HAVING clause.",
      complexity: "Time Complexity: O(N) to group the table.\nSpace Complexity: O(C) where C is distinct classes.",
      edgeCases: "1. Duplicate students in same class: LeetCode tests assume student-class pairs are unique.",
      debugging: "Remember that you cannot use WHERE for aggregate conditions; you must use HAVING."
    },
    solutions: {
      mysql: {
        code: `SELECT class\nFROM Courses\nGROUP BY class\nHAVING COUNT(student) >= 5;`,
        explanation: [
          { line: 1, text: "Select the class names." },
          { line: 3, text: "Group rows by class." },
          { line: 4, text: "Filter groups with student count >= 5." }
        ]
      },
      postgresql: {
        code: `SELECT class\nFROM Courses\nGROUP BY class\nHAVING COUNT(student) >= 5;`,
        explanation: [
          { line: 4, text: "Aggregates are supported in PostgreSQL HAVING statements." }
        ]
      },
      mssql: {
        code: `SELECT class\nFROM Courses\nGROUP BY class\nHAVING COUNT(student) >= 5;`,
        explanation: [
          { line: 1, text: "Standard GROUP BY HAVING aggregates work identically." }
        ]
      }
    }
  },
  {
    id: 620,
    section: 4,
    name: "Not Boring Movies",
    difficulty: "Easy",
    topic: "Filter",
    leetcodeUrl: "https://leetcode.com/problems/not-boring-movies/",
    tip: "Use id % 2 = 1 to filter for odd IDs, and check description != 'boring'.",
    description: "Write a SQL query to report the movies with an odd numbered ID and a description that is not 'boring'. Sort by rating descending.",
    chatbotData: {
      intuition: "Use modulo arithmetic (`id % 2 = 1` or `MOD(id, 2) = 1`) to check for odd IDs. Combine with unequal filter for description, and order descending by rating.",
      complexity: "Time Complexity: O(N log N) due to sorting.\nSpace Complexity: O(1).",
      edgeCases: "1. No matching records: returns empty.",
      debugging: "Make sure you sort by rating DESC at the end."
    },
    solutions: {
      mysql: {
        code: `SELECT id, movie, description, rating\nFROM Cinema\nWHERE id % 2 = 1 AND description != 'boring'\nORDER BY rating DESC;`,
        explanation: [
          { line: 1, text: "Select fields from Cinema." },
          { line: 3, text: "Filter odd ID rows (id % 2 = 1) and description not matching 'boring'." },
          { line: 4, text: "Sort from highest rating to lowest." }
        ]
      },
      postgresql: {
        code: `SELECT id, movie, description, rating\nFROM Cinema\nWHERE id % 2 = 1 AND description != 'boring'\nORDER BY rating DESC;`,
        explanation: [
          { line: 3, text: "PostgreSQL uses standard '%' operator for modulo calculations." }
        ]
      },
      mssql: {
        code: `SELECT id, movie, description, rating\nFROM Cinema\nWHERE id % 2 = 1 AND description <> 'boring'\nORDER BY rating DESC;`,
        explanation: [
          { line: 3, text: "Use `<>` or `!=` for inequal description comparison in SQL Server." }
        ]
      }
    }
  },
  {
    id: 627,
    section: 4,
    name: "Swap Salary",
    difficulty: "Easy",
    topic: "DML",
    leetcodeUrl: "https://leetcode.com/problems/swap-salary/",
    tip: "Use a single UPDATE statement with a CASE WHEN expression to swap sex values.",
    description: "Write a SQL query to swap all 'f' and 'm' values (i.e., change all 'f' to 'm' and vice versa) with a single update statement and no intermediate temporary tables.",
    chatbotData: {
      intuition: "We use an UPDATE statement with a conditional CASE WHEN expression to swap values inline. If it was 'm', set to 'f'; otherwise set to 'm'.",
      complexity: "Time Complexity: O(N) to update N rows.\nSpace Complexity: O(1).",
      edgeCases: "1. Table is empty: no operations.",
      debugging: "Make sure you write a single update query with no subqueries or select wrappers."
    },
    solutions: {
      mysql: {
        code: `UPDATE Salary\nSET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END;`,
        explanation: [
          { line: 1, text: "Target the Salary table for update." },
          { line: 2, text: "Set sex column dynamically: if 'm' change to 'f', else change to 'm'." }
        ]
      },
      postgresql: {
        code: `UPDATE Salary\nSET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END;`,
        explanation: [
          { line: 1, text: "DML updates are identical in standard SQL / PostgreSQL." }
        ]
      },
      mssql: {
        code: `UPDATE Salary\nSET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END;`,
        explanation: [
          { line: 1, text: "Standard SQL UPDATE works natively on SQL Server." }
        ]
      }
    }
  },
  {
    id: 1393,
    section: 4,
    name: "Capital Gain/Loss",
    difficulty: "Medium",
    topic: "Conditional Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/capital-gainloss/",
    tip: "Use CASE WHEN inside SUM to count 'Buy' prices as negative and 'Sell' prices as positive.",
    description: "Write a SQL query to report the Capital gain/loss for each stock.",
    chatbotData: {
      intuition: "Buy operations represent cash outflow (negative values). Sell operations represent cash inflow (positive values). Sum these values grouped by stock_name.",
      complexity: "Time Complexity: O(N log N) to group rows.\nSpace Complexity: O(S) where S is unique stocks.",
      edgeCases: "1. Stock has net loss: returns negative values correctly.",
      debugging: "Double check that 'Buy' is subtracted (`-price`) and 'Sell' is added (`price`)."
    },
    solutions: {
      mysql: {
        code: `SELECT stock_name,\n       SUM(CASE WHEN operation = 'Buy' THEN -price ELSE price END) AS capital_gain_loss\nFROM Stocks\nGROUP BY stock_name;`,
        explanation: [
          { line: 1, text: "Select stock name." },
          { line: 2, text: "Aggregate prices: subtract if operation is 'Buy', add if 'Sell'." },
          { line: 4, text: "Group results by stock name." }
        ]
      },
      postgresql: {
        code: `SELECT stock_name,\n       SUM(CASE WHEN operation = 'Buy' THEN -price ELSE price END) AS capital_gain_loss\nFROM Stocks\nGROUP BY stock_name;`,
        explanation: [
          { line: 2, text: "Conditional SUM aggregation matches PostgreSQL specifications." }
        ]
      },
      mssql: {
        code: `SELECT stock_name,\n       SUM(CASE WHEN operation = 'Buy' THEN -price ELSE price END) AS capital_gain_loss\nFROM Stocks\nGROUP BY stock_name;`,
        explanation: [
          { line: 2, text: "Standard syntax is fully compatible with SQL Server." }
        ]
      }
    }
  },
  {
    id: 1407,
    section: 4,
    name: "Top Travellers",
    difficulty: "Easy",
    topic: "LEFT JOIN",
    leetcodeUrl: "https://leetcode.com/problems/top-travellers/",
    tip: "Use LEFT JOIN to retain users with 0 rides, and COALESCE(SUM(distance), 0) to handle NULLs.",
    description: "Write a SQL query to report the distance travelled by each user. Sort by travelled_distance descending, then user name ascending.",
    chatbotData: {
      intuition: "We want all users, even those with no rides. So LEFT JOIN Users to Rides. Group by user ID and name. Sum ride distance, replacing NULL results with 0 using COALESCE or IFNULL.",
      complexity: "Time Complexity: O(U + R) where U is users and R is rides.\nSpace Complexity: O(U) for grouping.",
      edgeCases: "1. User has no rides: returned with distance 0.",
      debugging: "Verify you sorted by name ascending as the secondary tie-breaker."
    },
    solutions: {
      mysql: {
        code: `SELECT u.name, COALESCE(SUM(r.distance), 0) AS travelled_distance\nFROM Users u\nLEFT JOIN Rides r\nON u.id = r.user_id\nGROUP BY u.id, u.name\nORDER BY travelled_distance DESC, u.name ASC;`,
        explanation: [
          { line: 1, text: "Select user name and compute aggregate distance, replacing NULLs with 0." },
          { line: 3, text: "LEFT JOIN Users to Rides to retain users with no ride activity." },
          { line: 5, text: "Group by user ID and user name to isolate totals." },
          { line: 6, text: "Sort by distance descending, breaking ties with user name ascending." }
        ]
      },
      postgresql: {
        code: `SELECT u.name, COALESCE(SUM(r.distance), 0) AS travelled_distance\nFROM Users u\nLEFT JOIN Rides r\nON u.id = r.user_id\nGROUP BY u.id, u.name\nORDER BY travelled_distance DESC, u.name ASC;`,
        explanation: [
          { line: 1, text: "COALESCE is standard SQL and fully supported by PostgreSQL." }
        ]
      },
      mssql: {
        code: `SELECT u.name, COALESCE(SUM(r.distance), 0) AS travelled_distance\nFROM Users u\nLEFT OUTER JOIN Rides r\nON u.id = r.user_id\nGROUP BY u.id, u.name\nORDER BY travelled_distance DESC, u.name ASC;`,
        explanation: [
          { line: 3, text: "LEFT OUTER JOIN matches SQL Server dialect requirements." }
        ]
      }
    }
  },
  {
    id: 1484,
    section: 4,
    name: "Group Sold Products By The Date",
    difficulty: "Easy",
    topic: "Aggregation",
    leetcodeUrl: "https://leetcode.com/problems/group-sold-products-by-the-date/",
    tip: "Use GROUP_CONCAT in MySQL, STRING_AGG in PostgreSQL, and STRING_AGG with WITHIN GROUP in SQL Server.",
    description: "Write a SQL query to find for each date the number of different products sold and their names. The sold products names for each date should be sorted lexicographically.",
    chatbotData: {
      intuition: "Group transactions by sell_date. To count the products, use COUNT(DISTINCT product). To concatenate the products into a comma-separated list, use the appropriate string aggregation function for your dialect, sorting them lexicographically.",
      complexity: "Time Complexity: O(N log N) to group and sort strings.\nSpace Complexity: O(N).",
      edgeCases: "1. Multiple instances of same product on same date: must use DISTINCT in count and aggregation.",
      debugging: "Be sure to use DISTINCT inside the concatenation function to avoid printing duplicate products on the same date."
    },
    solutions: {
      mysql: {
        code: `SELECT sell_date,\n       COUNT(DISTINCT product) AS num_sold,\n       GROUP_CONCAT(DISTINCT product ORDER BY product ASC SEPARATOR ',') AS products\nFROM Activities\nGROUP BY sell_date\nORDER BY sell_date;`,
        explanation: [
          { line: 1, text: "Select sale date." },
          { line: 2, text: "Count distinct products sold." },
          { line: 3, text: "Use GROUP_CONCAT with DISTINCT and ORDER BY to create a sorted comma-separated list." },
          { line: 5, text: "Group rows by sell_date." }
        ]
      },
      postgresql: {
        code: `SELECT sell_date,\n       COUNT(DISTINCT product) AS num_sold,\n       STRING_AGG(DISTINCT product, ',' ORDER BY product ASC) AS products\nFROM Activities\nGROUP BY sell_date\nORDER BY sell_date;`,
        explanation: [
          { line: 3, text: "In PostgreSQL, use STRING_AGG with DISTINCT and ORDER BY keyword inside." }
        ]
      },
      mssql: {
        code: `SELECT sell_date,\n       COUNT(DISTINCT product) AS num_sold,\n       STRING_AGG(product, ',') WITHIN GROUP (ORDER BY product ASC) AS products\nFROM (\n  SELECT DISTINCT sell_date, product\n  FROM Activities\n) t\nGROUP BY sell_date\nORDER BY sell_date;`,
        explanation: [
          { line: 3, text: "In SQL Server, STRING_AGG does not support DISTINCT directly. First run a DISTINCT subquery..." },
          { line: 4, text: "...then aggregate with WITHIN GROUP (ORDER BY product ASC) syntax." }
        ]
      }
    }
  }
];

export const sqlTiers = {
  1: {
    title: "Must-Do (High Frequency)",
    problems: sqlProblems.filter(p => p.section === 1),
    tip: "Master JOINs, self-joins, window functions like DENSE_RANK(), and NULL handling. These form 80% of MNC SQL interview rounds."
  },
  2: {
    title: "Intermediate (Window & Agg)",
    problems: sqlProblems.filter(p => p.section === 2),
    tip: "Use CTEs (Common Table Expressions) and window functions (SUM OVER, LAG, LEAD) to keep aggregation queries readable and optimized."
  },
  3: {
    title: "Advanced (Hard)",
    problems: [
      ...sqlProblems.filter(p => p.section === 3),
      // Include #185 as reference in Advanced tier as well
      sqlProblems.find(p => p.id === 185)
    ],
    tip: "For consecutive row patterns or cumulative thresholds, use window functions or creative inequality self-joins."
  },
  4: {
    title: "Quick-Win Easy",
    problems: sqlProblems.filter(p => p.section === 4),
    tip: "Warm up with basic filtering, UPDATE operations (CASE WHEN), and string aggregation (GROUP_CONCAT)."
  }
};
