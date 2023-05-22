# PROJETO 22 - BLOGS API :computer:

## Esse projeto pertence ao módulo de `back-end` da [Trybe](https://www.betrybe.com/) :green_heart:

### Stacks utilizadas no desenvolvimento:
<div style="display: inline_block"><br>
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Shield" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Shield" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS Shield" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS Shield" />
  <img src="https://img.shields.io/badge/Sequelize-6888A1?style=for-the-badge&logo=sequelize&logoColor=blue" alt="Sequelize Shield" />
</div>
 
 #
<details>
 
<summary>
  
## 1- Resumo
  
</summary>

Para a criação do Blogs API utilizei alguns conceitos e ferramentas novas e outras já vistas, sendo elas:

- Docker
- Node.js
- Express
- Arquitetura de Software
- Object Relational Mapper (ORM).
- Autorizações/Autenticações

A arquitetura utilizada na aplicação foi a Model-Service-Controller (MSC). No entanto, a grande novidade dessa fez foi a utilização do Sequelize e do JSON Web Token (JWT).

-> O Sequelize é um ORM que abstrai os comandos de operações de SQL, e faz com que possamos usar linguagem de programação que já estamos usando no back-end para nos conectarmos e operarmos o banco de dados. Dessa maneira podemos aumentar a produtividade na codificação de software, facilitando a manutenibilidade e confidenciabilidade de uma aplicação.

-> Já o JWT é uma das formas mais utilizadas para autenticar usuários em APIs RESTful e tem como objetivo transmitir ou armazenar de forma compacta e segura objetos JSON entre diferentes aplicações. O JWT é digitalmente assinado usando uma chave secreta com o algoritmo HMAC ou um par de chaves pública e privada RSA ou ECDSA, aumentando sua segurança.

Por fim, com a utilização de todas as ferramentas citadas anteriormente, pude criar uma API RESTful que possui fluxo de Login com chave de autorização/autenticação juntamente com a implementação das funções básicas de uma API, o famoso CRUD (Create, Read, Update, Delete), que gerenciava as postagens da aplicação. Veja mais abaixo!
  
</details>

#

<details>
 
<summary>
 
## 2- Requisitos

</summary>

* I. Crie migrations para as tabelas users, categories, blog_posts, posts_categories
* II. Crie o modelo User em src/models/User.js com as propriedades corretas
* III. Sua aplicação deve ter o endpoint POST /login
* IV. Sua aplicação deve ter o endpoint POST /user
* V. Sua aplicação deve ter o endpoint GET /user
* VI. Sua aplicação deve ter o endpoint GET /user/:id
* VII. Crie o modelo Category em src/models/Category.js com as propriedades corretas
* VIII. Sua aplicação deve ter o endpoint POST /categories
* IX. Sua aplicação deve ter o endpoint GET /categories
* X. Crie o modelo BlogPost em src/models/BlogPost.js com as propriedades e associações corretas
* XI. Crie o modelo PostCategory em src/models/PostCategory.js com as propriedades e associações corretas
* XII. Sua aplicação deve ter o endpoint POST /post
* XIII. Sua aplicação deve ter o endpoint GET /post
* XIV. Sua aplicação deve ter o endpoint GET /post/:id
* XV. Sua aplicação deve ter o endpoint PUT /post/:id
* XVI. Sua aplicação deve ter o endpoint DELETE /post/:id
* XVII. Sua aplicação deve ter o endpoint DELETE /user/me
* XVIII. Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm
  
</details>

# 

<details>
 
<summary>

## 3- Nota do Projeto
 
</summary>

## 100% :heavy_check_mark:

![Project-blogs-api-grade](https://github.com/jonnoliveira/trybe-project-22-blogs-api/blob/main/images/blogs-api-grade.png)

</details> 
 
# 
