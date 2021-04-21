-- Crie um Trigger para INSERT que deve definir o valor do campo 
-- release_year da tabela movies como o ano atual de forma dinâmica, 
-- sem haver a necessidade de digitar manualmente o valor do ano. 
DELIMITER $$
CREATE TRIGGER set_year_movies
	BEFORE INSERT ON BeeMovies.movies
    FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(CURRENT_DATE());
END $$
DELIMITER ;

-- Além disso, crie um outro Trigger para INSERT que adiciona um novo 
-- registro na tabela movies_logs , informando o movie_id do filme 
-- que acaba de ser inserido na tabela movies , a action como 'INSERT' 
-- e a log_date como a data atual.
DELIMITER $$
CREATE TRIGGER register_logs
AFTER INSERT ON BeeMovies.movies
FOR EACH ROW
BEGIN
	INSERT INTO BeeMovies.movies_logs
    (movie_id, action, loG_date)
    VALUES (
		(SELECT m.movie_id FROM BeeMovies.movies AS m
		ORDER BY m.movie_id DESC LIMIT 1),
        'INSERT',
		CURRENT_DATE()
	);
END $$
DELIMITER ;

-- Crie um Trigger para UPDATE que, ao receber uma alteração na 
-- tabela movies , deve comparar o valor anterior de ticket_price 
-- com o valor sendo inserido nesta atualização. 
-- Caso o valor seja maior que o anterior, insira na coluna 
-- ticket_price_estimation o valor de 'Increasing' . 
-- Caso contrário, insira o valor 'Decreasing' . 
DELIMITER $$
CREATE TRIGGER update_movies
BEFORE UPDATE ON BeeMovies.movies
FOR EACH ROW
	BEGIN
		SET NEW.ticket_price_estimation = IF(
			NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
	END $$
DELIMITER ;

Adicionalmente, insira um novo registro na tabela movies_logs , 
contendo informações sobre o registro alterado 
( movie_id , action e log_date ).
DELIMITER $$
CREATE TRIGGER update_movies_logs
BEFORE UPDATE ON BeeMovies.movies
FOR EACH ROW
	BEGIN
		UPDATE BeeMovies.movies_logs
        SET action = 'UPDATE',
			log_date = 	CURRENT_DATE()
		WHERE BeeMovies.movies_logs.movie_id = NEW.movie_id;
	END $$
DELIMITER ;


-- Crie um Trigger na tabela movies que, 
-- ao ter algum de seus registros excluídos, 
-- deve enviar uma informação para a tabela movies_logs ,
--  onde devem ser guardados a data da exclusão, a action 'DELETE' 
--  e o id do filme excluído.
DELIMITER $$
CREATE TRIGGER delete_movies_logs
	AFTER DELETE ON BeeMovies.movies
    FOR EACH ROW
BEGIN
	INSERT INTO BeeMovies.movies_logs
    (movie_id, action, log_date)
    VALUES (OLD.movie_id, 'DELETE', CURRENT_DATE());
END $$
DELIMITER ;