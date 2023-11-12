--Danillo Araújo

--Passo 01

CREATE TABLE instrumento (
id_instrumento serial PRIMARY key,
nome varchar(24) not null,
preco float not null,
em_promocao BOOLEAN
)

--Passo 02

CREATE TABLE vendedor (
id_vendedor serial PRIMARY key,
nome varchar(24) not null,
sexo char not null,
idade INTEGER not NULL
)

--Passo 03

INSERT INTO instrumento 
	(nome, preco, em_promocao)
VALUES
	('violao',  219.99, FALSE)
	('piano',  599.99, FALSE)
    
    
	
--Passo 04

SELECT em_promocao, preco FROM instrumento WHERE (preco > 400)

SELECT * FROM instrumento WHERE (em_promocao = TRUE)

SELECT id_instrumento, nome FROM instrumento WHERE (preco < 250)

