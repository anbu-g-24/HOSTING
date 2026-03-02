create database college_db;

use college_db;

create table student(
id int primary key,
name varchar(50),
age int check (age>18),
phone varchar (15),
role varchar(50)
);

insert into student
 values
(101, "Anbu" , 22, "6845846551", "B.Sc");

select * from student