create database student;

use student;

create table students(
id int primary key,
name varchar(50),
age int check(age>=18),
email  varchar(50),
status varchar(20) default "avtive"
 );
 
insert into students values
(101, "Anbu", 23, "anbarasuanbu364@gmail.com","active" );

insert into students values
(102, "Yazh", 24, "yazh@gmail.com", "active");

insert into students values
(103, "Dinesh", 21, "dinesh@gmail.com", "active"),
(104, "sonthosh", 24, "sonthosh@gmail.com", "inactive"),
(105, "jeeva", 24, "jeeva@gmail.com", "active");


update students
set email ="anbarasuanbu364@gmail.com"
where id = 101;

delete from students
where id = 105;

alter table students
rename column id to ID;

-- alter table student add phone varchar(50);

select*from students;

