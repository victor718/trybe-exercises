CREATE VIEW sakila.film_with_categories AS
	SELECT f.title AS `Title`, c.category_id AS `Categories id`, c.name AS `Category`
    FROM sakila.film AS f
    INNER JOIN sakila.film_category AS cf
    ON f.film_id = cf.film_id
    INNER JOIN sakila.category AS c
    ON cf.category_id = c.category_id
    ORDER BY f.title;
    
SELECT * FROM sakila.film_with_categories;
