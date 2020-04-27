## Criando o primeiro projeto em NodeJs

- **Comandos usados durante o projeto**
  - `mkdir nomedapasta`
  - `yarn init -y`
  - `code .` 

<kbd>1</kbd> Criar uma pasta `src` para colocar todos os arquivos do projeto (Código fonte)

<kbd>2</kbd> Criar um arquivo `index.js` arquivo principal, primeiro arquivo a ser executado

<kbd>3</kbd> Add a primeira dependência ao projeto (Express): `yarn add express`

```js 
index.js

  const express = require('express')
  const app = express()
  
  app.get('/', (req, res) => {
    return res.send('hello world')
  })

  app.listen(3333)
  
```

- No codígo acima vemos a importação do express 

<kbd>4</kbd> Rodar a aplicação: `node src/index.js`

- Add outras dependências
- `yarn add nodemon -D`. 
Atualizar, em desenvolvimento, atualizações no código.
Nesse caso temos que rodar o seguinte comando.
- `yarn nodemon src/index.js`

<kbd>5</kbd> Pra facilitar o processo de desenvolvimento podemos  adicionar scripts no package.json pra não ter que ficar rodando comando extensos no terminal

```json
 "main": "src/index.js",
 "scripts": {
    "dev": "nodemon"
  },
```
- Add emojis no linux <kbd>shift</kbd> + <kbd>ctrl</kbd> + <kbd>E</kbd>

### HTTP
- [x] **GET**: Buscar informação do backend
- [x] **POST**: Criar informação no backend
- [x] **PUT/PATCH**: Alterar informação no backend: Patch um parte especifica. Put todos os dados de um recusos
- [x] **DELETE**: Deletar uma informação no backend

- Recursos (Rotas + Métodos)

### Insomnia
- (Dracula Theme Insomnia) (https://draculatheme.com/insomnia/)

#### Tipos de Parametros
Usados para passar informções para o backend (formas que o frontend tem para se comunicar com o backend)
- [ ] **Query**: filtro e paginação 
  (localhost/rota?title=nome&subtitle=nome2) : `req.query para acessar`
- [ ] **Route**: atualizar recursos ou deletar
  (localhost/rota/2) `req.params para acessar`
- [ ] **Request Body**: conteudo na hora de criar ou atualizar (json)
  ({"projeto" : "Mama Mia"}) `req.body para acessar`
  
 Express não sabe de cara trabalhar com json então temos que add um middleware: antes das rotas
 `app.use(express.json())`
 
 **UUIDv4** criar localmente id aleatórias
 
 #### Middlewares
 - [x] Interceptador de requisições
      - Interromper totalemnte a requisição
      - Alterar dados da requisição
 - [x] Uso
    - Logs
    - Autenticação

