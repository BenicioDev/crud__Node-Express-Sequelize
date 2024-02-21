# Crud com rotas utilizando Node, Express e Sequelize.

### Dependências instaladas:
  	-express: v4.18.2
  	-sequelize-cli: v6.6.2
  	-sequelize: v6.37.1
  	-mysql2: v3.9.1
  	-nodemon: v3.0.3
   	-bcrypt: v5.1.1

<hr>

## Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-007396?style=for-the-badge&logo=JavaScript)&nbsp;
![Node](https://img.shields.io/badge/Node-007396?style=for-the-badge&logo=Node)&nbsp;
![Express](https://img.shields.io/badge/Express-007396?style=for-the-badge&logo=Express)&nbsp;
![Sequelize](https://img.shields.io/badge/Sequelize-007396?style=for-the-badge&logo=Sequelize)&nbsp;
![bcrypt](https://img.shields.io/badge/bcrypt-007396?style=for-the-badge&logo=bcrypt)&nbsp;
![mysql](https://img.shields.io/badge/mysql-007396?style=for-the-badge&logo=mysql)&nbsp;
![Nodemon](https://img.shields.io/badge/Nodemon-007396?style=for-the-badge&logo=Nodemon)&nbsp;
![npm](https://img.shields.io/badge/npm-007396?style=for-the-badge&logo=npm)&nbsp;

<hr>

## Breve descrição de cada commit.
#### 1º commit 
	- Importando o express para criar e testar a primeira rota 
	
#### 2º commit
	- Configurando sequelize para o banco de dados e criando BD com comando "npx sequelize db:create"

#### 3º commit
	- Criando as migração com comando "npx sequelize migration:create --name=create-user" e executando-as com o comando "npx sequelize db:migrate", fazendo assim com que ele crie a tabela e os campos que estarão no arquivo "src/migrations/20240218182106-create-user.js"
	
#### 4º commit
    - Criação pasta models, User.js. Importar o Model e o DataTypes para tipar os nossos dados. 
    Fazer banco de dados reconhecer nosso User.js colocando ele nas nossas migrations.
    Inicializa conexão com User.init(connection)


#### 5º commit (main)
    - Criando o método POST para criar usuario no banco de dados e corrigindo os campos "update_at" e "create_at" para "updated_at" e "created_at" pois criei com o nome errado       e ele estava ocasionando um erro.

#### 6º commit 
    - Modularizando arquivo com rota de salvar usuario para deixar projeto melhor organizado, fazendo tratativa de erros com try catch e colocando o status http no retorno das rotas já criadas
    
    Criando o método de atualizar usuário (update)


#### 7º commit
    - Criando o método get e delete para listar ou deletar o(s) usuário(s) e criando sua rota.

#### 8º commit - IMPLEMENTAÇÃO
    - Encriptando senhas dos métodos Create e Update com a biblioteca bcrypt.



