-- 1 - Monte uma procedure que exiba os 10 atores mais 
-- populares, baseado em sua quantidade de filmes. 
-- Essa procedure não deve receber parâmetros de entrada ou saída e, 
-- quando chamada, deve exibir o id do ator ou atriz e a 
-- quantidade de filmes em que atuaram.

DELIMITER $$;

CREATE PROCEDURE ExibeAtoresComMaisFilmes()
BEGIN
	SELECT actor_id, COUNT(actor_id) AS 'Total de filmes'
	FROM film_actor
	GROUP BY actor_id;
END $$;

DELIMITER $$;

CALL ExibeAtoresComMaisFilmes;


-- Monte uma procedure que receba como parâmetro de 
-- entrada o nome da categoria desejada em uma string 
-- e que exiba o id do filme , seu titulo , 
-- o id de sua categoria e o nome da categoria 
-- selecionada. Use as tabelas film , film_category e 
-- category para montar essa procedure.

DELIMITER $$;

CREATE PROCEDURE ShowFilmAndCategory(IN get_category VARCHAR(50))
BEGIN
	SELECT f.film_id, f.title, c.category_id, c.name
    FROM sakila.film AS f
    INNER JOIN sakila.film_category as fc
    ON f.film_id = fc.film_id
    INNER JOIN sakila.category AS c
    ON fc.category_id = c.category_id
    WHERE c.name LIKE CONCAT('%', get_category, '%');
END $$;

DELIMITER $$;

CALL ShowFilmAndCategory('Action');


-- Monte uma procedure que receba o email de um cliente como
-- parâmetro de entrada e diga se o cliente está ou não ativo,
-- através de um parâmetro de saída.
DELIMITER $$;

CREATE PROCEDURE IsActive(
	IN client_email VARCHAR(100),
    OUT cliente_ativo VARCHAR(100)
)
BEGIN
	SELECT IF(c.active = 1, 'Cliente ativo', 'Cliente desativado') INTO cliente_ativo
    FROM sakila.customer AS c
    WHERE c.email LIKE CONCAT('%', client_email , '%');
END $$;

DELIMITER $$;

CALL IsActive('TERRA', @cliente_active);
SELECT @cliente_active;