--#01
select * from customer;

--#02
select concat(first_name, ' ', last_name) as FullName from customer;

--#03
select create_date 
from customer
group by create_date;

-- #04	
select * 
from customer
order by first_name DESC;

-- #05	
SELECT
	film.film_id, 
	film.title, 
	film.description, 
	film.release_year, 
	film.rental_rate
FROM
	film
order by rental_rate;

-- #06	
SELECT
	address.address, 
	address.phone
FROM
	customer
	INNER JOIN
	address
	ON 
		customer.address_id = address.address_id
WHERE
	address.district = 'Texas';

-- #07	
SELECT
	film.title, 
	film.description, 
	film.release_year, 
	film.language_id, 
	film.rental_duration, 
	film.rental_rate, 
	film."length", 
	film.replacement_cost, 
	film.rating, 
	film.last_update, 
	film.special_features, 
	film.fulltext
FROM
	film
WHERE
	film.title like '%Matrix%';
	
-- #08		
SELECT
	film.film_id,
	film.title, 
	film.description, 
	film.rental_rate, 
	film."length"
FROM
	film
WHERE
	film.title like '%Ma%';
	
-- #10	
SELECT
	film.film_id,
	film.title, 
	film.description, 
	film.rental_rate, 
	film."length"
FROM
	film
order by film.rental_rate
LIMIT 10;
	
--#11
SELECT
	film.film_id,
	film.title, 
	film.description, 
	film.rental_rate, 
	film."length"
FROM
	film
order by film.rental_rate
OFFSET 5 ROWS 
FETCH FIRST 5 ROW ONLY;

--#12
SELECT
	customer.first_name, 
	customer.last_name, 
	payment.payment_date, 
	payment.amount
FROM
	customer
	INNER JOIN
	payment
	ON 
		customer.customer_id = payment.customer_id
order by customer.customer_id;

--#13
SELECT
	film.film_id, 
	film.title 
FROM
	film
	LEFT JOIN
	(select film_id from inventory group by film_id) as a
	ON 
		film.film_id = a.film_id
where a.film_id is null;

--#14
SELECT
	city.city, 
	country.country
FROM
	city
	INNER JOIN
	country
	ON 
		city.country_id = country.country_id;
		
--#15
SELECT
	payment.staff_id, 
	customer.first_name, 
	customer.last_name, 
	payment.amount, 
	payment.payment_date
FROM
	customer
	INNER JOIN
	payment
	ON 
		customer.customer_id = payment.customer_id
ORDER BY
	payment.staff_id;



