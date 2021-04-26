CREATE VIEW sakila.movies_languages AS
	SELECT f.title, l.language_id, l.name
    FROM sakila.film AS f
    INNER JOIN sakila.language AS l
    ON f.language_id = l.language_id;
    
SELECT * FROM sakila.movies_languages;