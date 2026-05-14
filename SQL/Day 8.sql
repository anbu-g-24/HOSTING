-- use company_db;

-- Delimiter $$
-- create procedure get_all_employees()
-- begin 
-- select * from employees;
-- end $$
-- Delimiter ;


-- call get_all_employees();


-- Delimiter $$
-- create procedure get_emp_by_dept(IN dept INT)
-- Begin
-- select emp_name , salary
-- from employees
-- where dept_id = dept;
-- End $$
-- Delimiter ; 
 
-- call get_emp_by_dept(3);


-- COUNT

-- Delimiter $$
-- create procedure emp_count(out total int)
-- Begin
-- select count(*) into total from employees;
-- End $$
-- Delimiter ;

-- call emp_count(@count);
-- select @count



-- DOUBLE VALUES

-- Delimiter $$
-- create procedure double_value(inout num int)
-- Begin
-- set num = num *2;
-- End $$
-- Delimiter ;
 
 
 
-- DELIMITER $$

-- CREATE TRIGGER before_salary_insert
-- BEFORE INSERT ON employees 
-- FOR EACH ROW
-- BEGIN
--     IF NEW.salary < 0 THEN
--         SET NEW.salary = 0;
--     END IF;
-- END $$

-- DELIMITER ;



 
 