# API-dicasDEV

## Sobre o projeto

Esse projeto é o resultado dos estudos realizados no BootCamp da Resília Educação, sendo este a exigência de entreda da Sprint 2 do módulo 4. 

O desafio foi construir a uma API no modelo REST, explorando o CRUD, que fosse capaz de receber e armazenar dicas imputadas através do corpo da requisição e pudesse devolver ao usuário uma dica aleatória dentre aquelas armazenadas. 

Durante esse projeto, foi possível explorar o assunto API REST, tendo executado de maneira funcional os metodos GET e POST para a endidade Dicas e seu atribudos (dica e autor). 

## Tecnologias e metodologias utilizadas

- Javascript
- NodeJs
- Express
- Nodemon
- API REST
- MVC
- CRUD


### Pré-requisitos

É necessário ter um IDE. Para a execução desse projeto, eu utilizei o Visual Studio Code. Para mais informações e download acesse:

``https://code.visualstudio.com/``

Para poder testar a aplicação, foi utlizado o NodeJs (versão v16.15.1).

``https://nodejs.org/en/``

Para verificar o funcionamento da API foi utlizado o Postman. 

``https://www.postman.com/downloads/``

## Como executar o projeto

O equipamento usado para o desenvimento dessa API utiliza Windowns 11 versão 21H2.

Para verificar o funcionamento do projeto, é preciso fazer um clone desse repositorio. 

Abra o terminal e em uma pasta de fácil acesso digite o comando abaixo:

``` git clone https://github.com/NodjaLima/API-dicasDEV.git ```

Após realizado o clone do repositório, acesse o terminal e digite o comando para instalar as dependências necessárias. 

 ``` npm install ``` 

Agora é possível testar a aplicação e ainda reutilizar o codigo fonte, modificando conforme necessário.

Depois de tudo instalado, é preciso subir o sevridor, que está configurado utilizando Express, no arquivo app.js, que se encontra na raiz do projeto. O comando para tal ação é:

``` npm start ```

Caso prefira usar o Nodemon, para testar a aplicação enquanto ajusta o código, no lugar do comando anterior, você deve usar o comendo:

``` npm run dev ```


## Exemplos de Rotas

Esse projeto possui opções de rotas para os verbos HTTP GET e POST.

### GET 

Para retornar uma dica aleatória dentre as que estão no "banco de dados"

``http://localhost:3000/``

O retorno será:

``{
    "dica": "Acesse “redes de conhecimentos”",
    "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
}
``
### POST

Para inserir uma dica no "banco de dados" use a seguinte rota:

``http://localhost:3000/
``

O body da requisição deve estar na estrutura abaixo:

``{
    "dica": "escreva aqui a dica",
    "autor": "escreva aqui o autor"
}
``

O retorno dessa requisição será um objeto no formato Json com todas as dicas que estejam armazenadas no "banco de dados"

``[
    {
        "dica": "Decida quais habilidades você quer",
        "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
    },
    {
        "dica": "Planeje-se para aprender melhor",
        "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
    },
    {
        "dica": "Google é o seu melhor amigo",
        "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
    },
    {
        "dica": "Analise o código alheio",
        "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
    },
    {
        "dica": "Acesse “redes de conhecimentos”",
        "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
    },
    {
        "dica": "Entenda os designers",
        "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
    },
    {
        "dica": "Use ferramentas profissionais",
        "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
    },
    {
        "dica": "Deixe as coisas legais por último",
        "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
    },
    {
        "dica": "Continue com o processo de aprendizagem",
        "autor": "https://desenvolvimentoparaweb.com/miscelanea/10-dicas-desenvolvedores-web-iniciantes-devem-saber/"
    },
    {
        "dica": "escreva aqui a dica",
        "autor": "escreva aqui o autor"
    }
]
``

## Como contribuir para esse projeto

Faça um fork do projeto.

Crie uma nova branch com as suas alterações: git checkout -b my-feature .

Salve as alterações e crie uma mensagem de commit contando o que você fez: git commit -m "feature: My new feature".

Envie as suas alterações: git push origin my-feature.

## Contato 

Nodja Lima https://www.linkedin.com/in/nodjamoamal/

Vamos codar!

