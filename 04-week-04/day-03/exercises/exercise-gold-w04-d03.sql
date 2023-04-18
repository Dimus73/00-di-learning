--01-01
SELECT
	rental.rental_id, 
	rental.rental_date 
	
FROM
	rental
	
WHERE rental.return_date is null;


--01-02
SELECT
	customer.last_name, 
	customer.first_name 
FROM
	rental
	INNER JOIN
	customer
	ON 
		rental.customer_id = customer.customer_id

WHERE rental.return_date is null
group by customer.last_name, customer.first_name;

--01-03
SELECT
	film.title 

FROM
	category
	INNER JOIN
	film_category
	ON 
		category.category_id = film_category.category_id
	INNER JOIN
	film
	ON 
		film.film_id = film_category.film_id
	INNER JOIN
	film_actor
	ON 
		film.film_id = film_actor.film_id
	INNER JOIN
	actor
	ON 
		film_actor.actor_id = actor.actor_id
WHERE
	category."name" = 'Action' and actor.first_name = 'Joe' and actor.last_name = 'Swank';
	
--02-01

SELECT
	country.country, 
	city.city, 
	count(store.store_id)
FROM
	store
	INNER JOIN
	address
	ON 
		store.address_id = address.address_id
	INNER JOIN
	city
	ON 
		address.city_id = city.city_id
	INNER JOIN
	country
	ON 
		city.country_id = country.country_id
group by country.country, city.city;

--02-02&03
SELECT
	store.store_id, 
	sum(film."length")/60 as Length_in_hours
FROM
	store
	INNER JOIN
	inventory
	ON 
		store.store_id = inventory.store_id
	INNER JOIN
	film
	ON 
		inventory.film_id = film.film_id
	INNER JOIN
	rental
	ON 
		inventory.inventory_id = rental.inventory_id
where rental.return_date is not null
group by store.store_id;
 
--03-04

SELECT
	city.city, 
	city.city_id,
	customer.first_name, 
	customer.last_name
FROM
	customer
	INNER JOIN
	address
	ON 
		customer.address_id = address.address_id
	INNER JOIN
	city
	ON 
		address.city_id = city.city_id
WHERE city.city_id in (SELECT
						city.city_id
					FROM
						address
						INNER JOIN
						city
						ON 
							address.city_id = city.city_id
						INNER JOIN
						store
						ON 
							address.address_id = store.address_id);

--03-05

SELECT
	country.country, 
	customer.first_name, 
	customer.last_name
FROM
	customer
	INNER JOIN
	address
	ON 
		customer.address_id = address.address_id
	INNER JOIN
	city
	ON 
		address.city_id = city.city_id
	INNER JOIN
	country
	ON 
		city.country_id = country.country_id
WHERE country.country_id in (SELECT
						country.country_id
					FROM
						address
						INNER JOIN
						city
						ON 
							address.city_id = city.city_id
						INNER JOIN
						store
						ON 
							address.address_id = store.address_id
                        INNER JOIN
						country
						ON 
							city.country_id = country.country_id);
							
							
							
--03-06

create or replace function search_for_exceptions (t text) 
returns bool as $$
	declare 
       exep varchar[];
	   chk bool;
 	begin
        exep := array ['beast','monster','ghost','dead','zombie','undead'];
		chk=false;
		for p in 1..6 LOOP
			if position (exep[p] in lower(t)) >0 then
				chk=True;
			end if;
		end loop;
		return chk;
	end;
$$ language plpgsql;


SELECT
	film.film_id,
	film."length", 
	film.title, 
	film.description, 
	search_for_exceptions(film.title),search_for_exceptions(film.description)
FROM
	category
	INNER JOIN
	film_category
	ON 
		category.category_id = film_category.category_id
	INNER JOIN
	film
	ON 
		film.film_id = film_category.film_id
where category."name" != 'Horror' and 
      NOT search_for_exceptions(film.title) and
	  NOT search_for_exceptions(film.description)
order by film.title;
		
		
							
							
