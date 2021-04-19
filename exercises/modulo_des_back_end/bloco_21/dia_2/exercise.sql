-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais
-- ( domestic_sales ) e internacionais ( internationa_sales ) de cada filme.
SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.BoxOffice AS b
INNER JOIN Pixar.Movies AS m
ON b.movie_id = m.id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número 
-- de vendas para cada filme que possui um número maior de vendas 
-- internacionais ( internationa_sales ) do que vendas nacionais 
-- ( domestic_sales ).
SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.BoxOffice AS b
INNER JOIN Pixar.Movies AS m
ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os 
-- filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT m.title, b.rating
FROM Pixar.BoxOffice AS b
INNER JOIN Pixar.Movies AS m
ON b.movie_id = m.id;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que 
-- retorne todos os dados dos cinemas, mesmo os que não possuem 
-- filmes em cartaz e, adicionalmente, os dados dos filmes que estão 
-- em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.*,  m.title as 'filme'
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos
-- os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os
-- dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos
-- cinemas em ordem alfabética.
SELECT m.*,  t.name as 'cinema'
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando 
-- INNER JOIN , que retornem os títulos dos filmes que possuem 
-- avaliação maior que 7.5.

SELECT m.title, b.rating
FROM Pixar.BoxOffice AS b
INNER JOIN Pixar.Movies AS m
ON b.movie_id = m.id
WHERE b.rating > 7.5;

SELECT m.title FROM Pixar.Movies AS m
WHERE m.id IN (SELECT movie_id FROM Pixar.BoxOffice AS b WHERE b.rating > 7.5);

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN ,
-- que retornem as avaliações dos filmes lançados depois de 2009.
SELECT rating FROM Pixar.BoxOffice AS b
WHERE b.movie_id IN (SELECT id FROM Pixar.Movies WHERE year > 2009);

SELECT rating FROM Pixar.BoxOffice AS b
INNER JOIN Pixar.Movies AS m
ON b.movie_id = m.id
WHERE m.year > 2009;

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT t.name, t.location FROM Pixar.Theater AS t
WHERE EXISTS (
	SELECT * FROM Pixar.Movies AS m
	WHERE t.id = m.theater_id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos 
-- cinemas que não possuem filmes em cartaz.
SELECT t.name, t.location FROM Pixar.Theater AS t
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies AS m
	WHERE t.id = m.theater_id
);

-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações
-- dos filmes com avaliação maior que 8.
SELECT * FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE rating > 8;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos 
-- filmes que possuem o mesmo diretor.
SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes 
FROM Pixar.Movies AS m1, Pixar.Movies AS m2
WHERE m1.director = m2.director;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN ,
-- que retornem o título dos filmes que arrecadaram 500 milhões ou mais,
-- e que possuem duração maior que 110 minutos.
SELECT m.title FROM Pixar.Movies AS m
WHERE m.id IN (
	SELECT movie_id FROM Pixar.BoxOffice AS b
    WHERE m.id = b.movie_id
    AND (b.domestic_sales >= 500000 OR b.international_sales >= 500000)
    AND m.length_minutes > 110
);

SELECT m.title FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE (b.domestic_sales > 500000 OR b.international_sales > 500000)
AND m.length_minutes > 110;
