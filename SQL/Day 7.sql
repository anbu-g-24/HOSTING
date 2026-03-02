

-- // group by;
-- 1
-- select dept_id , count(*) as total_employees
-- from employees
-- group by dept_id;

-- 2
-- select emp_name , avg(salary) as avg_salary
-- from employees
-- group by emp_name;

-- 3
-- select dept_id , sum(salary) as total_salary
-- from employees
-- group by dept_id;



-- function_name() over (
-- partition my column
--  order by column
-- );

-- select emp_name, salary, 
-- avg(salary) over () as company_avg_salary
-- from employees;

-- select emp_name , age , salary,
-- avg (salary) over () as company_avg_sala
-- from employees;

-- select emp_name , dept_id , salary,
-- avg(salary) over (partition by dept_id) as dept_avg_salary
-- from employees;
--  
-- select emp_name , salary , avg(salary) over(partition by dept_id) as dept_avg_salary
-- from employees
-- where salary > avg(salary) over ( partition by dept_id)


-- select emp_name , dept_id , salary,
-- row_number() over (order by salary asc) as row_num
-- from employees;

-- select emp_name, salary ,
-- rank() over (order by salary desc) as salary_rank
-- from employees;

-- select emp_name , salary,
-- rank() over (order by salary asc) as salary_rank
-- from employees;

-- select emp_name , salary,
-- dense_rank() over (order by salary desc) as salary_rank
-- from employees;

-- update employees
-- set emp_name = 'Anbarasu'
-- where emp_id = 105;

-- select emp_name , dept_id , salary,
-- rank() over (partition by dept_id order by salary desc ) as dept_rank
-- from employees;




-- with ctc_name as(
-- select
-- )
-- select * from ctc_name


-- with dept_avg as (
-- select dept_id, 
-- avg(salary) as avg_salary
-- from employees
-- group by dept_id
-- )
--  select * from dept_avg





-- with dept_avg as (
-- select dept_id,
-- avg(salary) as avg_salary
-- from employees
-- group by dept_id
-- )
-- select e.emp_name , e.salary , d.dept_name
-- from employees e
-- join dept_avg da on e.dept_id = da.dept_id
-- join departments d on e.dept_id = d.dept_id
-- where e.salary > da.avg_salary




-- with ranked_employees as(
-- select emp_name , dept_id , salary,
-- dense_rank () over (partition by dept_id order by salary desc) as rnk
-- from employees
--  )
-- select emp_name , dept_id , salary
-- from ranked_employees
-- where rnk <=2
