-- SQLite
CREATE TABLE usuario(
    codigo INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone NUMERIC NOT NULL,
    endereco TEXT NOT NULL,
    senha TEXT NOT NULL,
    categoria TEXT NOT NULL
);