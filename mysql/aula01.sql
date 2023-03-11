SHOW DATABASES; -- Mostrar todos os Bancos no sistema.
CREATE DATABASE sistemaDeCadastro; -- Criando um Banco de Dados.
USE sistemaDeCadastro; -- Acessando um banco de dados.
SHOW TABLE; -- Mostrar todas as Tabelas do banco.
CREATE TABLE usuarios ( -- Criando Tabela, adcionando os atributos a ela.
    nome VARCHAR(50), -- Atributos e o Tipo
    email VARCHAR(50), --
    idade INT --
);

DESCRIBE usuarios; -- Mostrar a estrutura da tabela
