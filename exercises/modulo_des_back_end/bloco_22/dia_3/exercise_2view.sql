CREATE VIEW sakila.film_info AS
	SELECT ac.actor_id AS `actor_id`,
    CONCAT(ac.first_name, " ", ac.last_name) AS `actor`,
    f.title AS `title`
    FROM sakila.actor AS ac
    INNER JOIN sakila.film_actor AS ac_f
    ON ac.actor_id = ac_f.actor_id
    INNER JOIN sakila.film AS f
    ON ac_f.film_id = f.film_id
    ORDER BY `actor`;
    
SELECT * FROM sakila.film_info;
