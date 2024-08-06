# Tasks Back-End

Este é um projeto para gerenciamento de tarefas utilizando NestJS, TypeScript, TypeORM, PostgreSQL e Docker. A aplicação permite criar, ler, atualizar e excluir tarefas.

## Tecnologias Utilizadas

- **NestJS** 
- **TypeScript** 
- **TypeORM** 
- **Docker** 
- **PostgreSQL**

## Pré-requisitos

- Docker instalado em sua máquina.

## Configuração e Execução

### 1. Clonar o Repositório

```bash
git clone https://github.com/felipems1/tasks-backend.git
```

### 2. Navegue até o Diretório do Projeto

```bash
cd tasks-backend
```

### 3. Configure as Variáveis de Ambiente

Copie o arquivo env.example para criar seu arquivo de variáveis de ambiente:

```bash
.env.example -> .env
```

Edite o arquivo .env para adicionar suas variáveis de ambiente:

```bash
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
```

### 4. Construa e Execute a Aplicação com Docker
Utilize o comando abaixo para construir a imagem Docker e iniciar os containers:

```bash
docker-compose up -d
```

### 5. Acesse a Aplicação
A API estará disponível em http://localhost:3333

## Rotas da API

### Criar uma Tarefa

- URL: `http://localhost:3333/task`
- Método: `POST`
- Body: 
```bash
{
  "title": "jogar bola",
  "description": "todos os dias.",
  "deadline": "2024-01-01"
}
```

### Listar Todas as Tarefas

- URL: `http://localhost:3333/task`
- Método: `GET`
- Parâmetros Opcionais: `title` (string): Filtra as tarefas pelo título. Exemplo: `/task?title=exemplo`

### Obter uma Tarefa pelo ID

- URL: `http://localhost:3333/task/:id`
- Método: `GET`
- Resposta:
```bash
{
	"id": "251b81fb-1c9c-45b5-acbf-da81a607f15a",
	"title": "teste",
	"description": "teste",
	"deadline": "2024-01-01T00:00:00.000Z",
	"status": "COMPLETED"
}
```

### Atualizar uma Tarefa

- URL: `http://localhost:3333/task/:id`
- Método: `PUT`
- Body: 
```bash
{
  "title": "hello",
  "description": "teste",
  "status": "COMPLETED",
  "deadline": "2024-01-01"
}
```

### Excluir uma Tarefa

- URL: `http://localhost:3333/task/:id`
- Método: `DELETE`

<p align="center">Projeto feito com ❤️ por <a href="https://www.linkedin.com/in/felipems1/">Felipe Moises</a></p>