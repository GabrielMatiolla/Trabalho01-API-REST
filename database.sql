CREATE DATABASE IF NOT EXISTS bd_dsapi;

USE bd_dsapi;

CREATE TABLE IF NOT EXISTS cidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    altura DOUBLE,
    nascimento DATE,
    cidade_id INT,
    FOREIGN KEY (cidade_id) REFERENCES cidades(id)
);

CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DOUBLE NOT NULL,
    quantidade DOUBLE NOT NULL,
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

CREATE TABLE IF NOT EXISTS pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    horario DATETIME NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE IF NOT EXISTS pedidos_produtos (
    pedido_id INT,
    produto_id INT,
    preco DOUBLE NOT NULL,        
    quantidade DOUBLE NOT NULL,
    PRIMARY KEY (pedido_id, produto_id),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);


INSERT INTO cidades (nome) VALUES ('Porto Alegre'), ('Canoas'), ('São Paulo'), ('Rio de Janeiro');

INSERT INTO categorias (nome) VALUES ('Eletrônicos'), ('Roupas'), ('Alimentos'), ('Livros');

INSERT INTO clientes (nome, altura, nascimento, cidade_id) 
VALUES ('Carlos Silva', 1.75, '1995-03-10', 1), ('Maria Souza', 1.68, '2000-11-22', 3);

INSERT INTO produtos (nome, preco, quantidade, categoria_id)
VALUES 
('Notebook Gamer', 4500.00, 10, 1),
('Camiseta Básica', 49.90, 50, 2),
('Arroz 5kg', 22.50, 100, 3),
('O Senhor dos Anéis', 120.00, 15, 4);