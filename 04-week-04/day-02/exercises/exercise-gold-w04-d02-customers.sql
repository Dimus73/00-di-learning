-- create table purchases(
-- 	id serial primary key,
-- 	customer_id int,
-- 	item_id int,
-- 	quantity_purchased int
-- )

-- insert into purchases (customer_id, item_id, quantity_purchased)
-- values (3,3,1),(5,2,10),(1,1,2)


SELECT
	items.item_name, 
	items.price, 
	purchases.quantity_purchased
FROM
	purchases
	INNER JOIN
	items
	ON 
		purchases.item_id = items."id";
		
SELECT
	customers.fierstname, 
	customers.lastname, 
	items.item_name, 
	purchases.quantity_purchased, 
	items.price
FROM
	purchases
	INNER JOIN
	items
	ON 
		purchases.item_id = items."id"
	INNER JOIN
	customers
	ON 
		purchases.customer_id = customers."id"	
WHERE customers.id=5;


