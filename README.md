# Trabalho 01: API-REST para Loja Online

Este projeto é uma API REST desenvolvida em Node.js e Express para simular o backend de uma loja online, permitindo o gerenciamento de clientes, produtos e pedidos.

O projeto foi desenvolvido como parte de um trabalho acadêmico.

## Tecnologias Utilizadas

* Node.js
* Express
* MySQL (com a biblioteca `mysql2`)
* Dotenv (para gerenciamento de variáveis de ambiente)

## Como Configurar e Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente.

### 1. Pré-requisitos

* [Node.js](https://nodejs.org/en/) instalado
* Um servidor de banco de dados MySQL (como o XAMPP, WAMP ou Docker)

### 2. Instalação

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/GabrielMatiolla/Trabalho01-API-REST.git](https://github.com/GabrielMatiolla/Trabalho01-API-REST.git)
    ```

2.  Navegue até a pasta do projeto:
    ```bash
    cd Trabalho01-API-REST
    ```

3.  Instale as dependências do Node.js:
    ```bash
    npm install
    ```

### 3. Configuração do Banco de Dados

1.  Inicie seu servidor MySQL e acesse-o.
2.  Crie um novo banco de dados chamado `bd_dsapi`.
3.  Execute o script SQL (database.sql) para criar todas as tabelas (`cidades`, `clientes`, `produtos`, `pedidos`, etc.).

### 4. Variáveis de Ambiente

1.  Crie um arquivo chamado `.env` na raiz do projeto.
2.  Adicione as seguintes variáveis, substituindo pelos seus dados de conexão do MySQL:

    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=sua_senha_aqui
    DB_DATABASE=bd_dsapi
    API_PORT=3000
    ```

### 5. Executando a API

Para iniciar o servidor em modo de desenvolvimento (com auto-reload usando `nodemon`):

```bash
npm run dev
