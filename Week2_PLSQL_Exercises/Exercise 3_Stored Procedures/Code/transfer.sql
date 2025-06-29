CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    -- Check source account balance
    SELECT balance INTO v_balance
    FROM accounts
    WHERE account_id = p_from_account;
    
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds');
    END IF;
    
    -- Perform transfer
    UPDATE accounts SET balance = balance - p_amount
    WHERE account_id = p_from_account;
    
    UPDATE accounts SET balance = balance + p_amount
    WHERE account_id = p_to_account;
    
    DBMS_OUTPUT.PUT_LINE('Transferred $' || p_amount || ' from account ' || 
                         p_from_account || ' to ' || p_to_account);
    COMMIT;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Account not found');
        ROLLBACK;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
        ROLLBACK;
END;
/