-- Before
SELECT * FROM accounts;

-- Execute (Transfer $2000 from 201 to 202)
EXEC TransferFunds(201, 202, 2000);

-- After
SELECT * FROM accounts;