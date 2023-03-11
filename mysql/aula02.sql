-- Manipulando o MySQL
INSERT INTO usuarios(nome, email, idade) VALUES( -- Inserir dados
    "Edson Lopes Jr", "dev_edson@outlook.com", 22 -- 
); --

-- Inserindo varios dados
INSERT INTO usuarios(nome, email,idade) VALUES 
    ("Jennifer Ma,rcela", "marcela.jennifer.jm@gmail.com", 21),
    ("Ana Flavia", "anf.flavia@gmail.com", 44),
    ("Angelo Gabriel", "gabriel.2023@gmail.com", 26);

SELECT * FROM usuarios; -- Consultar todos os Dados.

SELECT * FROM usuarios WHERE idade <= 30; -- Consulta com condição