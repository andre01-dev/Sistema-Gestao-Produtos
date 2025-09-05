create database hypesoft;
use hypesoft;

create table produtos (
	id int primary key auto_increment,
    nome varchar(200),
    descricao varchar (200),
    preco decimal(10,4),
    categoria varchar(100),
    quantidade int
);

select*from produtos;

create table usuario (
id int primary key auto_increment,
email varchar (255),
senha varchar(255)
);