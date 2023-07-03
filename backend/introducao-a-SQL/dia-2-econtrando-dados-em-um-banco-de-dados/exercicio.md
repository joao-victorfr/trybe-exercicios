```
-- Exclui o banco de dados Scientists caso já exista
DROP SCHEMA IF EXISTS Scientists;

-- Cria o banco Scientists
CREATE SCHEMA Scientists;
USE Scientists;

-- Cria a tabela Scientists
CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

-- Cria a tabela Projects
CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

-- Cria a tabela AssignedTo
CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

-- Insere valores na tabela Scientists
INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

-- Insere valores na tabela Projects
 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

-- Insere valores na tabela AssignedTo
 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

1 - Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”.

__SELECT 'This is SQL Exercise, Practice and Solution';__

2 - Escreva uma query para exibir três números em três colunas.

__SELECT 1,2,3;__

3 - Escreva uma query para exibir a soma dos números 10 e 15.

__SELECT 10+15;__

4 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

__SELECT (10/2) + 3;__

5 - Escreva uma query para exibir todas as informações de todos os cientistas.

__SELECT * FROM Scientists.Scientists;__

6 - Escreva uma query para exibir o nome como “Nome do Projeto” e as horas como “Tempo de Trabalho” de cada projeto.

__SELECT NAME AS "NOME DO PROJETO", HOURS AS "TEMPO DE TRABALHO" FROM Scientists.Projects;__

7 - Escreva uma query para exibir o nome dos cientistas em ordem alfabética.

__SELECT * FROM Scientists.Scientists ORDER BY NAME ASC;__

8 - Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.

__SELECT * FROM Scientists.Projects ORDER BY NAME ASC;__

9 - Escreva uma query que exiba a string “O projeto Name precisou de Hours horas para ser concluído.” para cada projeto.

__SELECT CONCAT("O PROJETO ", NAME, "PRECISOU DE ", HOURS, "HORAS PARA SER CONCLUIDO") FROM Scientists.Projects;__

10 - Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

__SELECT NAME, HOURS FROM Scientists.Projects ORDER BY HOURS DESC LIMIT 3;__

11 - Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.

__SELECT DISTINCT(PROJECT) FROM Scientists.AssignedTo;__

12 - Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

__SELECT NAME FROM Scientists.Projects ORDER BY HOURS DESC LIMIT 1;__

13- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

__SELECT NAME FROM Scientists.Projects ORDER BY HOURS ASC LIMIT 1 OFFSET 1;__

14 - Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

__SELECT * FROM Scientists.Projects ORDER BY HOURS ASC LIMIT 5;__

15 - Escreva uma query que exiba a string “Existem Number cientistas na tabela Scientists.”, em que Number se refira a quantidade de cientistas.

__SELECT CONCAT("EXISTEM ", COUNT(*), " CIENTISTAS NA TABELA SCIENTISTS") FROM Scientists.Scientists;__
