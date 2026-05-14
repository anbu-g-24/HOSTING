-- create database company_db;
-- use company_db;


--  create table departments(
--  dept_id int primary key auto_increment,
--  dept_name varchar(50) not null,
--  location varchar(50)
--  );

-- Insert Into departments 
-- values
-- (1, 'Hr', 'Chennai'),
-- (2, 'IT', 'Banglore'),
-- (3, 'Finance', 'Mumbai'),
-- (4, 'Sales', 'Delhi');

-- select * from departments;

-- create table employees
--  (
--  emp_id int primary key,
--  emp_name varchar(50) NOT NULL,
--  age int check(age >=18),
--  email varchar(100) unique,
--  phone varchar(15),
--  hire_date date,
--  salary int check (salary > 10000),
--  dept_id int,
--  status varchar(20) default 'active',
--  foreign key (dept_id) REFERENCES departments(dept_id)
--  );

-- INSERT INTO employees values
-- (101, 'Arun', 25, 'arun@company.com', '9876543210', '2022-01-10', 30000, 2, 'active'),
--   (102, 'Priya', 24, 'priya@company.com', '9876543211', '2021-03-15', 28000, 1, 'active'),
--   (103, 'Rahul', 28, 'rahul@company.com', '9876543212', '2020-07-20', 45000, 2, 'inactive'),
--   (104, 'Sneha', 26, 'sneha@company.com', '9876543213', '2022-11-01', 32000, 3, 'active'),
--  (105, 'Karthik', 30, 'karthik@company.com', '9876543214', '2019-05-25', 50000, 4, 'active'),
--  (106, 'Anjali', 27, 'anjali@company.com', '9876543215', '2023-02-10', 26000, 1, 'active');


--  select * from employees;

-- -- select emp_name , salary
-- -- from employees;

-- -- select emp_name , phone
-- -- from employees;

-- -- select distinct dept_id
-- -- from employees;

-- -- select * from employees
-- -- where dept_id = 3;

-- -- select * from employees
-- -- where  salary >30000;

-- -- select * from employees
-- -- where age>25;

-- -- select * from employees
-- -- where  dept_id = 3 	AND salary >30000;

-- -- select * from employees
-- -- where salary >=30000;

-- -- insert into employees
-- -- values
-- -- (100 , 'Anbu', 22, 'anbu@gmail.com' , '6380760524', '2025-12-24',30000 , 4 , 'active');

-- -- select * from employees
-- -- where  not status = 'active';

-- -- select * from employees
-- -- where dept_id in (1,4);

-- -- select * from employees
-- -- where dept_id in(2);

-- -- select * from employees
-- -- where emp_name like '%a%';

-- select * from employees
-- where phone is not null;

--  insert into employees
-- values
-- (107, 'Manoj' , 29 ,' manoj@gmail.com' , '1548946516','2020-04-5', 45000, 1, 'inactive'),
-- (108, 'Divya' , 23 ,' Divya@gmail.com' , '6549946515','2023-09-12', 32000, 2, 'active'),
-- (109, 'Sanjay' , 24 ,' Sanjaiy@gmail.com' , '6354844165','2025-02-15', 25000, 4, 'inactive'),
-- (110, 'Pooja' , 30 ,' Pooja@gmail.com' , '45469465165','2026-01-23', 15000, 3, 'active'),
-- (111, 'Keeru' , 24 ,' Keeru@gmail.com' , '9659465165','2024-01-28', 50000, 1, 'active');

--  select * from employees
--  where dept_id in(1,4);


-- select sum(salary) as total_salary
-- from employees;

-- select avg(salary) as average_salary
-- from employees;

-- select dept_id , count(*) as emp_count
-- from employees
-- group by dept_id;

--   select * from employees
--  where age is not null;


--  select d.dept_name , count(e.emp_id) as total_employees
--  from employees e
--  join departments d on e.dept_id= d.dept_id
--  group by d.dept_name


-- Select dept_id, count(salary) as total_salary
-- from employees
-- group by dept_id;

-- select dept_id, count(salary) as total_salary
-- from employees
-- group by dept_id;



 select * from employees;