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
