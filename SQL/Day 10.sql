use company_db;

create view active_employees as
select emp_id , emp_name , dept_id
from employees
where status = "active";

select * from company_db.active_employees;

select * from active_employees;


create view inactive_employees as
select emp_id , emp_name , dept_id
from employees
where status = "inactive";

select * from company_db.inactive_employees;


select* from inactive_employees;
