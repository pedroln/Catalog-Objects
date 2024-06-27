<h2> CATÁLOGO DE OBJETOS </h2>

<h3> Requisitos que foram feitos com sucesso: </h3>

- Listagem de objetos já inseridos no banco de dados.

- Botão de informação dos objetos e de adição ao carrinho.
  
- Tela de Checkout, com inserção de informação do usuário e suas compras sem implementação após isto.
  



<h3>Conteúdo:</h3>

Listagem de objetos de um catálogo, permitindo que o usuário insira objetos que ele gostaria de comprar ao seu carrinho, veja algmuas informações sobre o objeto em questão e uma tela de Checkout.

Bibliotecas, aplicações e frameworks utilizados:

- Spring Boot + PostgreSQL para o Back-End, com criação automatizada do banco de dados e inserção de objetos para teste.
  
- ReactJS para o Front-End, utilizando do MaterialUI para criação fácil de alguns componentes.
  
- Docker para facilitar a execução do projeto.
  


- Para rodar o projeto, primeiramente geraremos a imagem do Front-End e do Back-End para que o docker consiga rodá-lo:

- Para montar a imagem do Back-End, navegue para a pasta Back-End e utilize o seguinte comando:
   <blockquote>
     
  "docker build -t back-end-app:latest ."
     
  </blockquote>
  
- Para montar a imagem do Front-End, navegue para a pasta Front-End e utilize o seguinte comando:
   <blockquote>
     
  "docker build -t front-end-app:latest ."
     
  </blockquote>
  
- Após as imagens montadas, retornar para a pasta raiz (aonde possuimos o nosso docker-compose.yaml) e rodá-lo com o seguinte comando
  <blockquote>
  
  "docker-compose up"
    
  </blockquote>
- Após todo este processo,o Front-End estará rodando na url localhost:3000 e o Back na localhost:8080
