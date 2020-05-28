DROP DATABASE IF EXISTS mreceita;
CREATE DATABASE mreceita
DEFAULT CHARACTER SET utf8
default collate utf8_general_ci;
-- Mudando para o banco recém criado
USE mreceita;
show databases;
create table if not exists autor(
	nickname varchar(20) not null,
    nome varchar(50) not null,
    nascimento char(10) not null,
    primary key (nickname)
)DEFAULT CHARSET = utf8;

create table if not exists receita(
	titulo varchar(50) not null,
    imagem varchar(100),
    id_autor varchar(20),
    tempo float,
	unidadeMedida varchar(20),
    primary key (titulo),
    foreign key (id_autor) references autor(nickname)  on update cascade on delete set null
)DEFAULT CHARSET = utf8;

create table if not exists ingrediente(
	nome varchar(70) not null,
    quantidade float not null,
    unidade_medida varchar(20) not null,
    detalhes varchar(70),
    id_receita varchar(50),
    composto varchar(70),
    primary key (nome, id_receita),
    foreign key (id_receita) references receita(titulo)  on update cascade on delete cascade,
    foreign key (composto) references ingrediente(nome)  on update cascade on delete cascade
)DEFAULT CHARSET = utf8;

create table if not exists modoPreparo(
	id_receita varchar(50) not null,
    nome varchar(30) not null,
    descricao varchar(100),
    numero int auto_increment,
    primary key (numero, id_receita),
    foreign key (id_receita) references receita(titulo) on update cascade on delete cascade
    
)DEFAULT CHARSET = utf8;
create table if not exists passo(
	id_receita varchar(50) not null,
    id_modo int not null,
    numero int AUTO_INCREMENT,
    texto varchar(100),
    primary key (numero,id_receita, id_modo),
    foreign key (id_receita) references receita(titulo)  on update cascade on delete cascade,
	foreign key (id_modo) references modoPreparo(numero) on update cascade on delete cascade

)DEFAULT CHARSET = utf8;

insert into autor (nome, nickname, nascimento) values ("Adoilson", "inho", '21/05/2020');
insert into receita (titulo, imagem, id_autor, tempo, unidadeMedida) values ('Ovo frito', '', 'inho', 2 , 'minutos');

insert into ingrediente (nome, quantidade, unidade_medida, detalhes, id_receita) values ('Ovo', 2, 'ovos', 'muito bom, quase toda casa tem' , 'Ovo frito');
insert into ingrediente (nome, unidade_medida, quantidade, id_receita, composto) values ('Gema', '', 1, 'Ovo frito', 'Ovo');
insert into ingrediente (nome, unidade_medida, quantidade, id_receita, composto) values ('Clara',  '', 1, 'Ovo frito', 'Ovo');
insert into modoPreparo (id_receita, nome, descricao) values ('Ovo frito', 'Quebrar ovo', 'Muito fácil');
insert into modoPreparo (id_receita, nome, descricao) values ('Ovo frito', 'Fritar ovo', 'Cuitado para não se queimar');
insert into passo (id_receita, id_modo, texto) values ('Ovo frito', 1, 'Pegue uma colher');
insert into passo (id_receita, id_modo, texto) values ('Ovo frito', 1, 'Divida o ovo no meio');
insert into passo (id_receita, id_modo, texto) values ('Ovo frito', 1, 'Coloque na frijideira já com óleo');
insert into passo (id_receita, id_modo, texto) values ('Ovo frito', 2, 'Deixe o ovo criar consistência');
insert into passo (id_receita, id_modo, texto) values ('Ovo frito', 2, 'Depois vire o ovo');
insert into passo (id_receita, id_modo, texto) values ('Ovo frito', 2, 'Pronto. Pode comer com farova, cuscuz, etc');

select receita.*, modoPreparo.nome, modoPreparo.descricao, passo.numero, passo.texto from receita join modoPreparo on id_receita = titulo join passo on modoPreparo.numero = passo.id_modo order by modoPreparo.numero, passo.numero;
select * from autor; 
select * from passo; 
Select * from modoPreparo;
select * from passo;