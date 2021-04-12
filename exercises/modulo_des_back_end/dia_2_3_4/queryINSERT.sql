INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name
FROM customer
LIMIT 5;

INSERT INTO category
VALUES
(null, 'action', default),
(null, 'aventure', default),
(null, 'comedy', default),
(null, 'animation', default);
