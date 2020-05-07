## Criando meu primeiro projeto usando React
1) `yarn init -y`
2) criar as pastas `src e public`
3) instalar **react** e **react-dom**

<kbd> 1 </kbd> Precisamos fazer com que o browser entenda o codigo javascript mais moderno
- [x] Adiconar o **Babel**: Coverter (transpilar) código React pra código que o browser entenda.
- [x] Adicionar **Webpack**: para cada tipo dearquivo (.js .css .png) eu vou converter de uma maneira diferente.
- Loaders: usados pelo webpack pra cada tipo de conversão

4) instalar bibliotecas para configurar babel e webpack
`yarn add @babel/core @babel/preset-env @babel/preset-react webpack w
ebpack-cli`

5) criar o arquivo de configuração do babel: `babel.config.js`
- Esse arquivo vai exportar um obejto com varias configurações 
- [x] Add presets que são configurações de terceiros que podemos usar na nossa aplicação. **preset-env**(converte javascript para cada ambiente, apenas o que o browser ainda não entende, se tiver no node, vai fazer baseado no que o node ainda não entende). **preset-react** add as funcionalidades do reaact para converter pro browser entender
```js
  module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ]
  }
 ```
 - [x] Add `yarn add @babel/cli` o babel-cli permite usar o comando abaixo pra fazer a conversão
 `yarn babel src/index.js --out-file public/bundle.js`
 
 **Webpack**
 Automatiza o processo de intendificar o arquivo que precisa ser processado e ativa o loader para cada caso.
 - `yarn add babel-loader`
 
 6) Criar o arquivo `webpack.config.js`

```js
  const path = require('path')

  module.exports ={
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output:{
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    }
  }

```

Basicamente esse arquivo está definindo o arquivo de entrada, dizendo qual vai ser o arquivo que a saida vai ser salva e definindo as regras para cada caso e definindo quais loaders vão ser ativados para cada regra.
- [x] Conversão: `yarn webpack --mode development  `

---


- `yarn add webpack-dev-server -D`

- Adicionando a biblioteca acima add no webpack.config.js o seguinte trecho de código, 

```js
 devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  
 ```
 
 Pra rodar o webpack que vai pegar as alterações de código e gerar o bundle.js toda vez que salvar um arquivo
- [x] Conversão em modo reload: `yarn webpack-dev-server --mode development`

**Adicionando novos loaders para manipular style**
`yarn add style-loader css-loader`

Dentro do `webpack.config.js` add:

```js
....
 module: {
      rules: [
      ....
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use:[
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ]
      }]
      
.....
```

**Adcionando loaders para manipular arquivos**
`yarn add file-loader`


Dentro do `webpack.config.js` add:


```
  {
    test: /\.*\.(gif|png|jpe?g)$/i,
    use: {
      loader: 'file-loader',
    }
  },

```


