-- Check interest discounts
SELECT c.name, l.interest_rate, 
       CASE 
         WHEN FLOOR(MONTHS_BETWEEN(SYSDATE, c.birth_date) / 12) > 60 
         THEN 'Discount Applied' 
         ELSE 'No Discount' 
       END AS discount_status
FROM customers c
JOIN loans l ON c.customer_id = l.customer_id;


-- Check VIP status
SELECT name, balance, is_vip 
FROM customers 
ORDER BY balance DESC;

-- Check upcoming loans
SELECT c.name, l.loan_id, l.due_date
FROM loans l
JOIN customers c ON l.customer_id = c.customer_id
WHERE l.due_date <= SYSDATE + 30;