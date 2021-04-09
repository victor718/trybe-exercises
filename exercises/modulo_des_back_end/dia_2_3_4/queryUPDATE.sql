
-- UPDATE nome_da_tabela
-- SET coluna1 = valor1, coluna2 = valor2
-- [WHERE condições]
-- [ORDER BY expressao [ ASC | DESC ]]
-- [LIMIT quantidade_resultados];

-- -- Exemplo:
-- UPDATE sakila.staff
-- SET password = 'FavorResetarSuaSenha123'
-- WHERE active = 1
-- ORDER BY last_update
-- LIMIT 2;

SET SQL_SAFE_UPDATES = 0;

UPDATE actor 
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=10000;

SELECT * FROM category
WHERE name = 'Sci-Fi';

-- Sci-fi = id -> 14
 
UPDATE category
SET name = 'Science Fiction'
WHERE category_id = 14;

UPDATE film AS filme
SET replacement_cost = 25
WHERE film_id IN (
SELECT * FROM(SELECT film_id
FROM film
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
)IDS);

SELECT *
FROM film
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13');
