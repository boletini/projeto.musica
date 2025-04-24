#cria um database
create database db_controle_musicas_ba;

#Ativa o database a ser utilizado
use db_controle_musicas_ba;

#Cria a tabela de musica
create table tbl_musica (
	id 				int not null primary key auto_increment,
    nome 			varchar(80) 	not null,
    link			varchar(200) 	not null,
    duracao 		time			not null,
    data_lancamento	date			not null,
    foto_capa		varchar(200),
    letra			text
);
CREATE TABLE tbl_genero (
    id_genero int not null primary key auto_increment,,
    genero VARCHAR(80)
);
CREATE TABLE tbl_gravadora (
    id_gravadora int not null primary key auto_increment,
    nome VARCHAR(80),
    telefone VARCHAR(45),
    email VARCHAR(80)
);
CREATE TABLE tbl_tipo_album (
    id_tipo int not null primary key auto_increment,
    tipo VARCHAR(80)
);
CREATE TABLE tbl_usuario (
    id_usuario int not null primary key auto_increment,
    nome VARCHAR(80),
    foto_perfil VARCHAR(80),
    senha VARCHAR(45),
    email VARCHAR(80)
);
CREATE TABLE tbl_banda (
    id_banda int not null primary key auto_increment,
    nome VARCHAR(80),
    membros VARCHAR(80),
    quantidade_musica INT
);
CREATE TABLE tbl_artista (
    id_artista int not null primary key auto_increment,
    nome VARCHAR(80),
    data_nascimento DATE,
    biografia VARCHAR(100)
);

ALTER TABLE tbl_tipo_album MODIFY COLUMN id_tipo_album INT AUTO_INCREMENT;

show tables;
desc tbl_genero;
select * from tbl_musica;