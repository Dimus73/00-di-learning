select * 
from students;

--02-Update-01
update students
set birth_date='1998-11-02'
where last_name='Benichou';

--02-Update-01
update students
set last_name='Guez'
where last_name='Grez';

--02-Delete-01
delete from students
where last_name='Benichou' and first_name='Lea';

--02-Count-01
select count(*)
from students;

--02-Count-02
select count(*)
from students
where birth_date>'2000-01-01';

--02-Insert / Alter-01
-- alter table students
-- add math_grade float;

update students
set math_grade=80
where id=1;

update students
set math_grade=90
where id in (2,4);

update students
set math_grade=40
where id=6;

select count(*)
from students
where math_grade>83;

-- insert into students(first_name, last_name, birth_date, math_grade)
-- select first_name, last_name, birth_date, 70 from students where last_name='Simpson';

select sum(math_grade)
from students;

select first_name, last_name, birth_date, count(math_grade)
from students
group by first_name, last_name, birth_date;

select sum(math_grade)
from students;
-- select * 
-- from students;
