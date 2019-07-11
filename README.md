# Controle de Produção

## Visão de negócio

O objetivo principal é disponibilizar webservices para administrar as operações dentro de um Centro de Produção. Neste centro são administrados matérias-prima, funcionários e produtos finais, sendo essenciais alguns relatórios com filtros específicos.

## Visão Técnica

Api baseada em NodeJS e disponibilizada em Docker.

## Execução

Para rodar este projeto você deve ter [NodeJS](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/pt-BR/) e [git](https://git-scm.com/) instalados;

### 1º Passo - Clonar projeto

1. Abra o terminal e acesse um  diretório de sua preferência.
2. Clone o projeto com o comando abaixo:

```
git clone https://github.com/ealbuquerque/production-control-api.git
```

### 2º Passo - Variáveis de ambiente

Crie um arquivo com o nome `.env` no diretório raiz da aplicação.

Template:
```
APP_HOST='localhost'
APP_PORT=5000

DB_DIALECT='postgres'
DB_HOST='localhost'
DB_NAME='production_control'
DB_PASSWORD='Abc_1234'
DB_PORT=5432
DB_USERNAME='postgres'

NODE_ENV='development'
```

### 3º Base de dados

Caso não tenha o Postgres instalado na sua máquina, é possível utilizar o [docker](https://www.docker.com/) para para subir o serviço atráves deste [docker-compose](docker-compose.db.yml).

Para rodar a base de dados via docker você deve ter o [docker](https://www.docker.com/) e o [docker-compose](https://docs.docker.com/compose/) instalados.

```
# subir serviço
docker-compose -f docker-compose.db.yml up -V -d

# parar serviço
docker-compose -f docker-compose.db.yml down -v
```

### 4º Passo - Baixar dependências

```bash
yarn install

# ou

npm install
```

### 5º Passo - Scripts de criação de base de dados

Criação de base de dados, migrations, seeders...

```bash
yarn db-init

# ou

npm run db-init
```

### 6º Passo - Iniciar a aplicação

#### Manualmente

```bash
yarn start

# ou

npm run start
```

#### Docker

Para rodar este projeto com o docker você deve ter o [docker](https://www.docker.com/) e o [docker-compose](https://docs.docker.com/compose/) instalados.

Este [docker-compose](docker-compose.yml) vai gerar a imagem da api (caso não exista) e subir os serviços da **base de dados** na porta `5432` e da **api** na porta `5000`.

```
# subir serviço
docker-compose up -d

# parar serviço
docker-compose down
```

## Testes

Para rodar os testes deve-se estar com a aplicação rodando e ai então rodar o comando abaixo:

```bash
yarn test

# ou

npm run test
```

## Insomnia / REST Client

Está disponível no projeto um [arquivo de configuração](Insomnia_2019-07-10.json) para ser importado no [Insomnia](https://insomnia.rest/) e fazer todas requisições na api.

## Documentação

Com a aplicação rodando, [acesse aqui](http://localhost:5000/docs).

## Issues para resolver

[Acesse aqui](https://github.com/ealbuquerque/production-control-api/issues)
