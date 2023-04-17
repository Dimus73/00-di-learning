--#01-01
SELECT 
	film.rating,
	count(film.film_id)
FROM
	film
GROUP BY
	film.rating;
	
--#01-02
SELECT
	film.title, 
	film.rental_rate, 
	film.length, 
	film.rating
FROM
	film
WHERE
	film.rating in ('G','PG-13') and film.length < 120 and film.rental_rate < 3
ORDER by film.title;

--#01-03
UPDATE customer
SET 
	first_name='Dmitry', last_name='Prigozhin'
WHERE
	customer_id=10;
	
--#01-04
UPDATE address
SET
	address='Hgalil,35'
WHERE 
	address_id = (SELECT customer.address_id FROM customer WHERE customer_id=10);
	
SELECT
	customer.customer_id, 
	customer.first_name, 
	address.address
FROM
	customer
	INNER JOIN
	address
	ON 
		customer.address_id = address.address_id
WHERE
	customer_id=10; 
	
