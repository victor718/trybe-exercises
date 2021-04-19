SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

SELECT concat(first_name, ' ', last_name) AS Nome, store_id, active FROM customer
WHERE active IS FALSE
AND store_id = 2
AND (first_name <> 'KENNETH' AND last_name <> 'KENNETH')
ORDER BY first_name;

SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17'
AND replacement_cost > 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

SELECT COUNT(*) AS 'Total de clientes' FROM customer;

SELECT * FROM film
WHERE (rating = 'R' OR rating = 'NC-17')
ORDER BY replacement_cost, title
LIMIT 50;
