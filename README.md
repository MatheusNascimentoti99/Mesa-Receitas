# Mesa-Receitas
## Projeto desenvolvido com Node + React + MySQL. 
/mreceitas: contém a API desenvolvida em NodeJS


## Banco de Dados MySQL
1 - Crie um banco de dado local MySQL;
2 - Execute o script setup.sql;
3 - No diretório "Mesa-Receitas/mreceitas/server/database.js" substitua o password e database para a instancia que você criou no passo 1

###setup.sql: script completo para a criação do Banco de Dados MySQL

## Abrir e executar API
$ git clone https://github.com/MatheusNascimentoti99/Mesa-Receitas.git
$ cd Mesa-Receitas
$ yarn install
$ yarn start

## Dados da API
[Código de rotas aqui](mreceitas/routes/)
### Contém CRUD para Autor, Receita, Ingrediente, Modo de Preparo, Passos

### Mapeamento:
``` 
Receita (titulo, imagem, tempo, ID_autor,)
	D(titulo) = varchar(50)
D(imagem) = varchar(100)
D(tempo) = time
D(ID_autor) = int
D(ID_Ingredientes) = int
ID_autor referencia Autor(nickname)

Autor(nickname, nome, nascimento)
	D(nickname) = varchar(50)
	D(nomeCompleto) = string
D(nascimento) = date

Ingredientes (nome, quantidade, unidade_medida, composto, id_receita)  
	D(nome) = varchar(50)
	D(quantidade) = float
	D(unidade_medida) = varchar(20)
	D(composicao) = varchar(50)
	D(id_receita)
	composto referencia Ingredientes(nome)
	id_receita referencia receita(titulo)

modoPreparo(id_receita, nome, descricao)
	D(id_receita) = int
	D(nome) = varchar(30)
	D(descricao) = varchar(100)
	id_receita referencia receita(nome)

passo(id_receita, id_modo, numero, texto)
	D(id_receita) = varchar(50)
	D(id_modo) = varchar(30)
	D(numero) = int
	D(texto) = varchar(100)
	id_receita referencia receita(nome)
	id_modo referencia modoPreparo 

```
