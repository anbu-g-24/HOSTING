create database ak;
 
 use ak;
 
 create table employees(
 id int primary key,
 name varchar(20),
 age int check (age>18),
 phone varchar(15) 
 );
 
 
 insert into employees
 values
 (1 , 'Anbu', 22, '5451586212');
 
 select * from employees;