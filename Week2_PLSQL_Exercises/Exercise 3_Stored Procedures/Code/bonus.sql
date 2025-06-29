CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department_id IN NUMBER,
    p_bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE employees
    SET salary = salary * (1 + p_bonus_percent/100)
    WHERE department_id = p_department_id;
    
    DBMS_OUTPUT.PUT_LINE('Bonus applied to department ' || p_department_id);
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
        ROLLBACK;
END;
/