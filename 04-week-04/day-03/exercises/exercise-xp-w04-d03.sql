--01-01
-- SELECT
-- 	"language".language_id, 
-- 	"language"."name"
-- FROM
-- 	"language"
-- 	INNER JOIN
-- 	film
-- 	ON 
-- 		"language".language_id = film.language_id
-- GROUP BY "language".language_id ,name;

--01-02-01
-- SELECT
-- 	film.film_id, 
-- 	film.title, 
-- 	film.description, 
-- 	"language"."name" as "language"
-- FROM
-- 	film
-- 	INNER JOIN
-- 	"language"
-- 	ON 
-- 		film.language_id = "language".language_id;

--01-02-02
-- SELECT
-- 	film.film_id, 
-- 	film.title, 
-- 	film.description, 
-- 	"language"."name" as "language"
-- FROM
-- 	film
-- 	Right JOIN
-- 	"language"
-- 	ON 
-- 		film.language_id = "language".language_id
-- 	where film_id is null

--01-03
-- create table new_film (
-- 	id serial,
-- 	name varchar(20)
-- )
-- insert into new_film (name)
-- values('tes1'),('test2');
-- select * from new_film;
-- alter table new_film add primary key(id);

--01-04-01
-- create table customer_review (
-- 	review_id serial,
-- 	film_id int not null,
-- 	language_id int,
-- 	title varchar(40),
-- 	score int not null,
-- 	review_text text,
-- 	last_update date,
-- 	CONSTRAINT id_prim_key primary key ("review_id"),
-- 	FOREIGN KEY ("film_id") REFERENCES "film" ("film_id") ON DELETE CASCADE	
	
-- )

-- insert into customer_review (film_id, language_id, title, score, review_text, last_update)
-- values
-- ((select film_id from film where title='Aladdin Calendar'),1,'Heading 1', 8, 'djjjdhksbvkdlhdakljladsgklhvblkhvgdlhbsavkhvbaslkhslkhbl','2021/01/01'),
-- ((select film_id from film where title='Alamo Videotape'),2,'Heading 2', 8, 'jhvslkjhfkjvdkvbvhlberuirhgbilavblbvufbibibuflaiurbgjlkjsgl','2021/01/01')

-- select * from customer_review;

-- delete from new_film where id=1
-- delete from inventory where film_id=10
-- delete rental where
-- alter table customer_review drop constraint customer_review_film_id_fkey

-- alter table customer_review ADD CONSTRAINT id_fkey FOREIGN KEY ("film_id") REFERENCES "new_film" ("id") ON DELETE CASCADE

-- update customer_review
-- set film_id=2
-- where film_id=11



--02-01
-- update film 
-- set language_id=4
-- where film_id in (23,49,43,169)

--02-02
-- nothing

--02-03
-- drop table customer_review

--02-04
-- SELECT
-- 	count(rental.rental_id) 
	
-- FROM
-- 	rental
-- where rental.return_date is null;

--02-05
-- SELECT
-- 	film.title,
-- 	rental.rental_id, 
-- 	film.rental_rate
-- FROM
-- 	film
-- 	INNER JOIN
-- 	inventory
-- 	ON 
-- 		film.film_id = inventory.film_id
-- 	INNER JOIN
-- 	rental
-- 	ON 
-- 		rental.inventory_id = inventory.inventory_id
-- where rental.return_date is null
-- order by rental_rate desc
-- limit 30

--02-06
SELECT
	film.film_id, 
	film.title,
	max(film.replacement_cost) as replacement_cost 
FROM
	actor
	INNER JOIN
	film_actor
	ON 
		actor.actor_id = film_actor.actor_id
	INNER JOIN
	film
	ON 
		film.film_id = film_actor.film_id
	INNER JOIN
	film_category
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
	INNER JOIN
	rental
	ON 
		inventory.inventory_id = rental.inventory_id
	INNER JOIN
	customer
	ON 
		rental.customer_id = customer.customer_id
	INNER JOIN
	payment
	ON 
		rental.rental_id = payment.rental_id
		
where 
(position('Sumo'in description)+position('sumo'in description)>0 and actor.first_name='Penelope' and actor.last_name='Monroe') 
or
(length<60 and film.rating='R' and category."name"='Documentary')
or
(payment.amount>4 and customer.first_name='Matthew' and customer.last_name='Mahan' and rental.return_date between '2005-07-28' and '2005-08-01')
or
(customer.first_name='Matthew' and customer.last_name='Mahan' and (description ilike '%boat%' or title ilike '%boat%') and
    replacement_cost = (select max(replacement_cost) from
											actor
											INNER JOIN
											film_actor
											ON 
												actor.actor_id = film_actor.actor_id
											INNER JOIN
											film
											ON 
												film.film_id = film_actor.film_id
											INNER JOIN
											film_category
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
											INNER JOIN
											rental
											ON 
												inventory.inventory_id = rental.inventory_id
											INNER JOIN
											customer
											ON 
												rental.customer_id = customer.customer_id
											INNER JOIN
											payment
											ON 
												rental.rental_id = payment.rental_id 
							   where (customer.first_name='Matthew' 
							   and customer.last_name='Mahan' 
							   and (description ilike '%boat%' or title ilike '%boat%'))))
group by film.film_id, title;




