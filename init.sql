DROP DATABASE IF EXISTS informatica_db;
CREATE DATABASE informatica_db;
USE informatica_db;

CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE produto(
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL
);

CREATE TABLE pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    data_pedido DATE NOT NULL,
    valor_total DECIMAL(10, 2),
    id_cliente INT NOT NULL,

    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente) ON DELETE CASCADE
);

CREATE TABLE item_pedido (
    id_item_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL (10, 2) NOT NULL,

    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);

INSERT INTO cliente (nome, email, telefone) VALUES
('Cauã Debattisti', 'caua.deb@email.com', '(11) 99999-0001'),
('Pedro Reis', 'pedro.reis@email.com', '(11) 99999-0002'),
('Ryan Lage', 'ryan.lage@email.com', '(11) 99999-0003'),
('Samuel Ferraz', 'samuel.ferraz@email.com', '(11) 99999-0004');

INSERT INTO produto (nome, descricao, preco, estoque) VALUES
('Mouse Gamer RGB', '2000 DPI, sensor óptico, 6 botões', 49.90, 15),
('Teclado Mecânico', 'Switch Blue, iluminação LED, ABNT2', 189.90, 10),
('Monitor 24"', 'Full HD, 75Hz, painel IPS, HDMI', 699.00, 8),
('SSD 512GB', 'NVMe M.2, leitura 3500MB/s', 250.00, 20);

INSERT INTO pedido (id_cliente, data_pedido, valor_total) VALUES
(1, '2026-03-05', 49.90),
(2, '2026-03-06', 500.00),
(1, '2026-03-07', 189.90);

INSERT INTO item_pedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(1, 1, 1, 49.90),
(2, 3, 2, 250.00),
(3, 2, 1, 189.90);