# API Books Express MongoDB README

API Books é uma aplicação feita com Node.js, Express e MongoDB que permite a criação, leitura, atualização e exclusão de registros de livros em uma base de dados.

## Instalação

Para instalar a aplicação, você pode clonar este repositório usando o comando:

```
git clone https://github.com/AllanGaiteiro/api-books-express-mongodb.git
```

Depois disso, navegue até a pasta raiz do projeto e execute o seguinte comando para instalar as dependências necessárias:

```
npm install
```

## Configuração

Antes de executar a aplicação, você precisa adicionar as variáveis de ambiente necessárias no arquivo `.env`. Você pode usar o arquivo `.env.example` como modelo.

Além disso, você também precisa ter uma instância do MongoDB em execução em sua máquina. Você pode usar o MongoDB local ou um serviço de hospedagem de banco de dados como o MongoDB Atlas.

Certifique-se de atualizar as informações do banco de dados no arquivo `src/config/db.connect.js`.

## Executando a aplicação

Para iniciar a aplicação, basta executar o seguinte comando:

```
npm run start
```

Isso iniciará a aplicação na porta especificada no arquivo `.env`.

## Endpoints

A seguinte tabela lista todos os endpoints disponíveis na API:

### Books

| Método HTTP | Endpoint           | Descrição                                 |
|-------------|--------------------|------------------------------------------|
| GET         | /api/book          | Retorna todos os livros da base de dados |
| POST        | /api/book          | Cria um novo registro de livro            |
| GET         | /api/book/:id      | Retorna um livro específico por ID        |
| PUT         | /api/book/:id      | Atualiza um registro de livro específico  |
| DELETE      | /api/book/:id      | Exclui um registro de livro específico    |

### Author

| Método HTTP | Endpoint           | Descrição                                 |
|-------------|--------------------|------------------------------------------|
| GET         | /api/author          | Retorna todos os autores da base de dados |
| POST        | /api/author          | Cria um novo registro de autor            |
| GET         | /api/author/:id      | Retorna um autor específico por ID        |
| PUT         | /api/author/:id      | Atualiza um registro de autor específico  |
| DELETE      | /api/author/:id      | Exclui um registro de autor específico    |

## Contribuições

Contribuições são sempre bem-vindas! Se você quiser contribuir com este projeto, basta seguir as orientações abaixo:

1. Faça um fork deste repositório
2. Crie uma nova branch para suas alterações (`git checkout -b my-new-feature`)
3. Faça suas alterações e adicione seus commits (`git commit -am 'Added some feature'`)
4. Envie para a branch criada anteriormente (`git push origin my-new-feature`)
5. Abra um Pull Request

Certifique-se de descrever suas alterações detalhadamente no corpo do pull request e incluir informações sobre como testar suas alterações.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
