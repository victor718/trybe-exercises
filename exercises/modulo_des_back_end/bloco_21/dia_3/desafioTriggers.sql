-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros , 
-- defina o valor da coluna data_atualizacao para o momento 
-- do ocorrido, a acao para 'INSERÇÃO' 
-- e a coluna disponivel_em_estoque para 1 .

DELIMITER $$
CREATE TRIGGER insert_info_car
	BEFORE INSERT ON betrybe_automoveis.carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = now(),
		NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

-- Crie um TRIGGER que, a cada atualização feita na tabela carros , 
-- defina o valor da coluna data_atualizacao para o momento do
-- ocorrido e a acao para 'ATUALIZAÇÃO' .

DELIMITER $$
CREATE TRIGGER set_update_car
BEFORE UPDATE ON betrybe_automoveis.carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

UPDATE betrybe_automoveis.carros
SET preco = 25000
WHERE id_carro = 1;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros ,
-- envie para a tabela log_operacoes as informações do tipo_operacao como
-- 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

DELIMITER $$
CREATE TRIGGER set_log_delete_car
	AFTER DELETE ON betrybe_automoveis.carros
    FOR EACH ROW
BEGIN
	INSERT INTO betrybe_automoveis.log_operacoes
    (tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;