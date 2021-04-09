SELECT * FROM customer;

SELECT * FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY last_name;

SELECT * FROM customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY first_name;

SELECT COUNT(*) AS 'Total de pagamentos feitos entre 01/05/2005 e 01/08/2005' FROM customer
WHERE last_update BETWEEN '2005/05/01' AND '2005/08/01'; 

SELECT * FROM film;

SELECT * FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

SELECT * FROM film
WHERE rating IN ('G', 'PG', 'PG-12')
ORDER BY title;