-- SQL Joins
-- 1. normal froms 1 enough no atomic
-- use only one vs value from one row
-- 2. must be in one enough
-- employee role separated into no partical dependancy
-- 3. third from : must be in two enough

-- Joins
-- =>joins used to compain a rows from  multiple table using  related column.

-- iNNER JOIN : inner join returns only a matching record from both tables.



-- use company_db;

-- select e.emp_name , d.dept_name , e.age
-- from employees e 
-- inner join departments d 
-- on e.dept_id = d.dept_id;

-- select e.emp_name , d.dept_name
-- from employees e
-- left join departments d 
-- on e.dept_id = d.dept_id;

-- select e.emp_name , d.dept_name 
-- from employees e
-- Right join departments d
-- on e.dept_id = d.dept_id;


-- select e.emp_name , d.dept_name
-- from employees e
-- left join departments d 
-- on e.dept_id = d.dept_id

-- union

-- select e.emp_name , d.dept_name 
-- from employees e 
-- Right join departments d
-- on e.dept_id = d.dept_id;


-- create table roles(
-- role_id  int primary key,
-- role_name varchar(50) not null
-- );

-- insert into roles
-- values
-- (1 , 'HR Executive'),
-- (2 , 'Softwere Engineer'),
-- (3 , 'Senior Developer'),
-- (4 , 'Accountant');
 
 
--  create table employees_roles(
--  emp_id int,
--  ROLE_ID int,
--  primary key (emp_id , role_id),
--  Foreign key (emp_id) references employees(emp_id),
--  Foreign key (role_id) references roles(role_id)
--  );
--  
--  
--  INSERT INTO  employees_roles values
--  (101 , 2),
--  (102 , 3),
--  (103 , 1),
--  (104 , 4);
--  
--  select e.emp_name , r.role_name 
--  from employees e
--  join employees_roles er on e.emp_id = er.emp_id
--  join roles r on er.role_id = r.role_id;
--  
--  
--  select e.emp_id , r.role_id 
--  from employees e
--  join employees_roles er on e.emp_id = er.emp_id
--  join roles r on er.role_id = r.role_id;
--  
