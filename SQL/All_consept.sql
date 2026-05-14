create database college_management;
use college_management;

create table students(
id int primary key,
name varchar(20) not null,
age int check(age>=18),
gender varchar(10),
phone_no varchar(15)
);

insert into students
values
(101, "Anbu", 22, "Male", "5451545416"),
(102, "Anu", 22, "Male", "5451545416"),
(103, "Dinesh", 22, "Male", "5451545416");

insert into students
values
(104, "Dina", 22, "Male", "5451545416");

delete from students
where id=104;

update students
set name="priya"
where id=102;

select count(*) as total_students
from students;




select * from students;