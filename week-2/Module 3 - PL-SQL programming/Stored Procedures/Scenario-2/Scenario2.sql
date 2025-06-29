CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(dept IN VARCHAR2, bonus_pct IN NUMBER) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonus_pct / 100)
    WHERE Department = dept;
END;
/
BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/