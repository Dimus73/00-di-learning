--01-01
SELECT
	film.film_id,
	film.title,
	rental.rental_id
	
FROM
	film_category
	INNER JOIN
	film
	ON 
		film.film_id = film_category.film_id
	INNER JOIN
	category
	ON 
		film_category.category_id = category.category_id
	INNER JOIN
	inventory
	ON 
		film.film_id = inventory.film_id
	left JOIN
	rental
	ON 
	inventory.inventory_id = rental.inventory_id
where rental.rental_id is null
-- 	where rental.return_date is null 
-- 	group by film.title
union all
SELECT
	film.film_id,
	film.title,
    5
	
FROM
	film_category
	INNER JOIN
	film
	ON 
		film.film_id = film_category.film_id
	INNER JOIN
	category
	ON 
		film_category.category_id = category.category_id
	INNER JOIN
	inventory
	ON 
		film.film_id = inventory.film_id
	left JOIN
	rental
	ON 
	inventory.inventory_id = rental.inventory_id
where rental.return_date is not null 
group by film.film_id, film.title;

--01-02
-- create table waiting (
-- 	id serial primary key,
-- 	film_id int references film(film_id) on delete no action,
-- 	child_name varchar(25)
-- )
-- insert into waiting(film_id, child_name)
-- values (70,'Masha'),(758,'Petia')
-- select * from waiting
-- create or replace FUNCTION remove_child()
--  RETURNS trigger AS
-- $$
-- Begin
-- 	delete from waiting
-- 	where film_id=(SELECT inventory.film_id FROM inventory 
-- 				   WHERE inventory.inventory_id = NEW."inventory_id");
-- 	return NEW;
-- 	END;
-- $$ LANGUAGE 'plpgsql';

-- CREATE or replace TRIGGER rental_insert_tr
--   AFTER INSERT
--   ON "rental"
--   FOR EACH ROW
--   EXECUTE PROCEDURE remove_child();

-- insert into rental (rental_date, inventory_id, customer_id, return_date, staff_id, last_update)
-- values ('2005-05-25 00:09:02',313,142,'2005-06-02 20:56:02',2,'2006-02-16 02:30:53')




	
	
	
	
	
	