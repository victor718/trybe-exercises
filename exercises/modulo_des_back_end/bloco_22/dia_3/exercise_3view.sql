CREATE VIEW sakila.address_info AS
	SELECT ad.address_id AS "address_id",
    ad.address AS `address`, ad.district AS `district`,
    c.city_id AS "city_id", c.city AS `city` 
    FROM sakila.address AS ad
    INNER JOIN sakila.city AS c
    ON ad.city_id = c.city_id
    ORDER BY c.city;
    
SELECT * FROM sakila.address_info;
