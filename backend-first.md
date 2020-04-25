## Criando o primeiro projeto em NodeJs
### **Comandos usados durante o projeto**
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
