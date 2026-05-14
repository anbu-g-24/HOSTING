-- create database anbu ;


-- create table table_name(
-- colomn_name datatype constraint,
-- colomn_name datatype constraint,
-- )

--   use anbu;

-- create TABLE student(
--  id INT primary key auto_increment,
--  name varchar(50) not null,
--   age int check (age>=18),
--  email varchar(100) unique,
--  status varchar(20) default 'active'
--   );

-- insert into student ( id, name , age , email , status)
--  values
-- ( 6,'hari' , 19, 'hari@gmail,com', 'inactive');
--  
-- select * from  student;

-- update table_name 
-- set coloumn1 = value 1,
-- coloumn2 = value 2
-- where condition


-- update student
-- set email = "anbarasuanbu365@gmail.com"
-- where id =6;

-- update student
-- set age= 18,
-- status = 'active'
-- where id = 1;


-- update student
-- set email = 'hari2006@gmail.com' ,
-- status = 'active'
-- where id = 6;

-- update student
-- set status = 'inactive';

-- select * from student;


-- truncate table student;


-- INSERT INTO student (id, name, age, email, status)
-- VALUES
-- (6, 'Arun', 22, 'arun@gmail.com', 'active'),
-- (7, 'Priya', 20, 'priya@gmail.com', 'active'),
-- (8, 'Rahul', 24, 'rahul@gmail.com', 'inactive'),
-- (9, 'Sneha', 19, 'sneha@gmail.com', 'active'),
-- (10, 'Karthik', 21, 'karthik@gmail.com', 'inactive'),
-- (11, 'Anjali', 23, 'anjali@gmail.com', 'active'),
-- (12, 'Vijay', 25, 'vijay@gmail.com', 'active');


-- insert into student
-- values(
-- 1, 'Thiyashika' , 18 , 'thiya@gmail.com' , 'active'
-- );


-- update student
-- set status = 'inactive'
-- where id = 8;

-- select * from student;

-- use anbu;

-- update student set phone = 46654845151
-- where id =1;

-- alter table student add phone varchar(50);

-- alter table student 
-- rename column phone to mobile;

-- alter table student
-- drop column mobile;

-- alter table student
-- drop constraint student_chk_1;

-- insert into student (name , age)
-- value ('parvathi', 70);


--  INSERT INTO student (name, age) 
--  VALUES ('Jane', 15);
--  
-- update student
-- set status = 'inactive'
-- where id= 13;

-- delete from student
-- where id=14;



-- select col1 , col2 
-- from table_name 

-- select name , email 
-- from student ;

-- select * from student;

-- select * from student
--  where age  <= 20 or status = "inactive";

-- select * from student where not status = "active";

-- select * from student
-- where age in (18 , 19 , 22, 21);

-- select * from student
-- where age between 18 and 22;

-- select * from student
-- where name like '%a';

-- select * from student
-- where email is null;

--  select * from student
--  order by age desc limit 5; 

-- update student
-- set name = 'Anbu'
-- where id =10;

select * from student;