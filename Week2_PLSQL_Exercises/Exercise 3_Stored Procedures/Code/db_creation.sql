-- For Scenario 1: Savings Accounts
CREATE TABLE savings_accounts (
    account_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    balance NUMBER
);

-- For Scenario 2: Employees
CREATE TABLE employees (
    employee_id NUMBER PRIMARY KEY,
    department_id NUMBER,
    salary NUMBER,
    name VARCHAR2(100)
);

-- For Scenario 3: Accounts for fund transfers
CREATE TABLE accounts (
    account_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    balance NUMBER,
    account_type VARCHAR2(20)
);

INSERT INTO savings_accounts VALUES (101, 1, 5000);
INSERT INTO savings_accounts VALUES (102, 2, 15000);
INSERT INTO savings_accounts VALUES (103, 3, 7500);

INSERT INTO employees VALUES (1, 10, 5000, 'John Smith');
INSERT INTO employees VALUES (2, 20, 6500, 'Emma Davis');
INSERT INTO employees VALUES (3, 10, 8000, 'Robert Brown');

INSERT INTO accounts VALUES (201, 1, 5000, 'CHECKING');
INSERT INTO accounts VALUES (202, 1, 10000, 'SAVINGS');
INSERT INTO accounts VALUES (203, 2, 15000, 'CHECKING');

COMMIT;