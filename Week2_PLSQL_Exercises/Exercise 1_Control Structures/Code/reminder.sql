BEGIN
  FOR cust IN (
    SELECT customer_id, 
           FLOOR(MONTHS_BETWEEN(SYSDATE, birth_date)/12) AS age
    FROM customers
  )
  LOOP
    IF cust.age > 60 THEN
      UPDATE loans
      SET interest_rate = GREATEST(interest_rate - 1, 0)  -- Prevent negative rates
      WHERE customer_id = cust.customer_id;
      
      DBMS_OUTPUT.PUT_LINE('Applied discount to customer ' || cust.customer_id);
    END IF;
  END LOOP;
  COMMIT;
END;
/

SET SERVEROUTPUT ON;
BEGIN
  FOR loan_rec IN (
    SELECT c.name, l.loan_id, l.due_date
    FROM loans l
    JOIN customers c ON l.customer_id = c.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
  )
  LOOP
    DBMS_OUTPUT.PUT_LINE('REMINDER: ' || loan_rec.name || 
                         ', Loan #' || loan_rec.loan_id || 
                         ' due on ' || TO_CHAR(loan_rec.due_date, 'Mon DD, YYYY'));
  END LOOP;
END;
/

SET SERVEROUTPUT ON;
BEGIN
  FOR loan_rec IN (
    SELECT c.name, l.loan_id, l.due_date
    FROM loans l
    JOIN customers c ON l.customer_id = c.customer_id
    WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
  )
  LOOP
    DBMS_OUTPUT.PUT_LINE('REMINDER: ' || loan_rec.name || 
                         ', Loan #' || loan_rec.loan_id || 
                         ' due on ' || TO_CHAR(loan_rec.due_date, 'Mon DD, YYYY'));
  END LOOP;
END;
/