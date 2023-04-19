--01
-- create table Customer (
-- 	id serial primary key,
-- 	first_name varchar(30) not null,
-- 	last_name varchar(30) not null
-- )

-- create table Customer_profile (
-- 	id serial primary key,
-- 	isLoggedIn bool Default false,
-- 	customer_id int references customer(id) on delete cascade unique
-- )

-- insert into customer (first_name,last_name)
-- values ('John', 'Doe'),
-- ('Jerome', 'Lalu'),
-- ('Lea', 'Rive')

-- select * from customer;

-- -- insert into Customer_profile (isLoggedIn, customer_id)
-- -- values (true,1),(false,2)

-- select first_name from
-- customer 
-- inner join Customer_profile 
-- 	on customer.id=Customer_profile.customer_id
-- where isLoggedIn;

-- select * from
-- customer 
-- left join Customer_profile 
-- 	on customer.id=Customer_profile.customer_id;
	
-- select count(*) from
-- customer 
-- inner join Customer_profile 
-- 	on customer.id=Customer_profile.customer_id
-- where not isLoggedIn;	


--02
-- create table book (
-- 	book_id SERIAL primary key, 
-- 	title varchar(50) not null,
-- 	author varchar(50) NOT NULL
-- );

-- insert into book (title,author)
-- values ( 'Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee');

-- create table Student (
-- 	student_id SERIAL PRIMARY KEY, 
-- 	name varchar(50) NOT NULL UNIQUE, 
-- 	age int check (age<=15)
-- )

-- insert into Student(name,age)
-- values ('John', 12), ('Lera', 11),('Patrick', 10),('Bob', 14)

-- create table Library (
-- id serial primary key,
-- book_fk_id int references book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- student_id int references student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- borrowed_date date
-- )	

-- insert into library (book_fk_id, student_id,borrowed_date)
-- values ((select book_id from book where title='Alice In Wonderland'),
-- 		(select student_id from student where student.name='John'),
-- 		'2022-02-15'),
-- 	    ((select book_id from book where title='Alice In Wonderland'),
-- 		(select student_id from student where student.name='Lera'),
-- 		'2021-05-21'),
-- 		((select book_id from book where title='To kill a mockingbird'),
-- 		(select student_id from student where student.name='Bob'),
-- 		'2021-03-03'),
-- 		((select book_id from book where title='Harry Potter'),
-- 		(select student_id from student where student.name='Bob'),
-- 		'2021-08-12');

-- select * from library;
-- -- select * from book;
-- delete from library
-- ;
-- select * from library;

-- select name , title
-- from student
-- inner join "library" 
-- 	on student.student_id=library.student_id
-- inner join book
-- 	on book_id=book_fk_id
	
-- select avg(age) 
-- from student
-- inner join "library" 
-- 	on student.student_id=library.student_id
-- inner join book
-- 	on book_id=book_fk_id
-- where title='Alice In Wonderland'

delete from student;
select * from library;

