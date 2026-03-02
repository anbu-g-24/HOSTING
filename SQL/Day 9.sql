-- use company_db;


-- Delimiter $$
-- create procedure check_salary(IN sal INT)
-- Begin
-- if sal > 40000 then
-- select 'High Salary';
-- else 
-- select 'Average Salary';
-- End IF;
-- End $$
-- Delimiter ;

-- call check_salary(50000)

-- Delimiter $$
-- create procedure ak()
-- Begin
-- select * from employees;
-- end $$
-- delimiter ;

-- call ak();


-- Delimiter $$
-- create procedure gebd(in deptid int)
-- Begin
-- select emp_name, salary
-- from employees
-- where dept_id = deptid;
-- End $$
-- Delimiter ;

-- call gebd(2);



-- delimiter $$
-- create procedure dept_avg_salary()
-- Begin 
-- Select dept_id, AVG(salary) AS avg_salary
-- from employees
-- group by dept_id;
-- End $$
-- delimiter ;

-- call dept