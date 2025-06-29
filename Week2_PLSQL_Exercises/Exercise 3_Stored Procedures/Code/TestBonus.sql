-- Before
SELECT * FROM employees WHERE department_id = 10;

-- Execute (10% bonus for dept 10)
EXEC UpdateEmployeeBonus(10, 10);

-- After
SELECT * FROM employees WHERE department_id = 10;