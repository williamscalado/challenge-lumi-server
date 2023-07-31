Para iniciar clone o repositório e siga os passos abaixo:

## Iniciando
Para iniciar a API será necessário o docker para subir o Banco de dados na sua maquina.

# Iniciando o Banco de Dados

```bash
docker-compose up -d
```

Após o banco inicial vamos ao segundo passo 


```bash
npm install
# or
pnpm install 
```

Finalizando a instalação dos pacotes necessários vamos inicializar e criar as tabelas do banco 

```bash
npm run start-db
# or
pnpm run start-db
```

Dando sucesso...

```bash
npm run dev
# or
pnpm run dev
```

API  [http://localhost:8000](http://localhost:8000)
