-- Crie uma function que, dado o 
-- parâmetro de entrada inventory_id , retorna 
-- o nome do filme vinculado ao 
-- registro de inventário com esse id.

CREATE FUNCTION inventoryOfFilm(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE nome_filme VARCHAR(100);
    SELECT f.title FROM sakila.film AS f
    INNER JOIN sakila.inventory AS i
    ON i.film_id = f.film_id
    WHERE i.inventory_id = id
    INTO nome_filme ;
	RETURN nome_filme;
END $$

DELIMITER ;

SELECT inventoryOfFilm(22);

-- Crie uma function que receba uma determinada categoria de filme 
-- em formato de texto (ex: 'Action' , 'Horror' ) 
-- e retorna a quantidade total de 
-- filmes registrados nessa categoria.

DELIMITER $$

CREATE FUNCTION ExibirTotalFilmesCategoria(categoria_filme VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total_filme_categoria INT;
    SELECT COUNT(c.category_id)
	FROM sakila.category AS c
	INNER JOIN sakila.film_category AS fc
	ON c.category_id = fc.category_id
	INNER JOIN sakila.film AS f
	ON fc.film_id = f.film_id
	WHERE c.name = categoria_filme
    INTO total_filme_categoria;
	RETURN total_filme_categoria;
END $$

DELIMITER ;