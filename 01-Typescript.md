# Conceitos Basicos de Typescript
- [x] O que é? 
- Uma linguagem baseada em javascript que add tipagem 
  e acessar features mais recentes do javascript
  funciona como um babel de conversão

- Facilita desenvolvimento

- [x] O que é preciso pra iniciar um projeto em typescript

- IDE complete => instalar pacote de declaração de tipos ... (@types/express) `@types/nomearquivo`

Ex: `yarn add typescript @types/express -D `

 - [x] Pra rodar um projeto typescript
 - NodeJs não conhece arquivo **typescript**, então temos que traduzir pra **javascript** antes de executar.

Ao instalar a biblioteca typescript : `2) yarn tsc src/index.ts`
Mas antes precisamos iniciar o projeto com typescript `tsconfig`
- `1) yarn tsc --init` 
- `3) yarn tsc` gera todos os javascripts para cada arquivo typescript
- Para rodar agora, usamos o javascript gerado
`4) node src/index.js`
- Podemos modificar as configurações pafrões do tsconfig 
por exemplo: `"outDir": "./dist",/* Redirect output structure to the directory. */`

Para definir tipos:
1) valor padrão `name=''`
2) atribuição `name:string`
3) criar uma interface `interface user = { name: string}`
