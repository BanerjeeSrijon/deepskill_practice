SET SERVEROUTPUT ON;
-- Before
SELECT * FROM savings_accounts;

-- Execute
EXEC ProcessMonthlyInterest;

-- After
SELECT * FROM savings_accounts;