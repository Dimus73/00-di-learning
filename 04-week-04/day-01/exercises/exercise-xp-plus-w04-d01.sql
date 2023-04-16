-- create table students (
-- 	id serial primary key
-- 	,first_name varchar(20)
-- 	,last_name varchar(20)
-- 	, birth_date date);
-- insert into students(first_name, last_name, birth_date)
-- values
-- ('Marc','Benichou', '1998-11-02'),
-- ('Yoan', 'Cohen', '2010-12-03'),
-- ('Lea', 'Benichou','1987-07-27'),
-- ('Amelia', 'Dux', '1996-04-07'),
-- ('David', 'Grez', '2003-06-14'),
-- ('Omer', 'Simpson', '1980-10-03');

-- insert into students(first_name, last_name, birth_date)
-- values
-- ('Dmitriy','Prigozhin', '1973-03-29');

select * 
from students;

select first_name, last_name 
from students;

select first_name, last_name 
from students
where id=2;

select first_name, last_name 
from students 
where first_name='Marc' and last_name='Benichou';

select first_name, last_name 
from students 
where first_name='Marc' or last_name='Benichou';

select first_name, last_name 
from students 
where first_name like '%a%';

select first_name, last_name 
from students 
where LOWER(first_name) like 'a%';

select first_name, last_name 
from students 
where LOWER(first_name) like '%a';

select first_name, last_name 
from students 
where LOWER(first_name) like '%a_';

select id, first_name, last_name 
from students 
where id in (1, 3);

select first_name, last_name, birth_date 
from students 
where birth_date>='2000-01-01';








