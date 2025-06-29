-- Create customers table
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    birth_date DATE,
    balance NUMBER,
    is_vip VARCHAR2(1) DEFAULT 'N' CHECK (is_vip IN ('Y','N'))
);

-- Create loans table
CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER REFERENCES customers(customer_id),
    interest_rate NUMBER,
    due_date DATE
);

-- Insert sample data
INSERT INTO customers VALUES (1, 'John Smith', DATE '1950-05-15', 7500, 'N');
INSERT INTO customers VALUES (2, 'Emma Davis', DATE '1960-11-30', 15000, 'N');
INSERT INTO customers VALUES (3, 'Robert Brown', DATE '1975-03-22', 25000, 'N');
INSERT INTO customers VALUES (4, 'Mary Wilson', DATE '1955-08-17', 5000, 'N');

INSERT INTO loans VALUES (101, 1, 5.5, SYSDATE + 15);
INSERT INTO loans VALUES (102, 2, 4.2, SYSDATE + 45);
INSERT INTO loans VALUES (103, 3, 3.8, SYSDATE + 10);
INSERT INTO loans VALUES (104, 4, 6.0, SYSDATE + 60);

COMMIT;