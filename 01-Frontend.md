## Conceitos básicos de React e Frontend
### O que é o Reaact?
- [x] Biblioteca de construção de interfaces
- [x] Construção de SPA (Single-Page-Aplication)

**Podemos chamar de framework?**
- [x] Sim, se pensarmos em todo ecossitema (web, eletron, mobile...)
- [x] Tudo fica dentro do Javascript
  - [x] **React** : Biblioteca do *React* pra construçao das interfaces e componentização
  - [x] **ReactJs**: Web Browser, lida com eletmentos da arvore de elementos do browser *ReactDom*
  - [x] **React-Native**: React + lida com elementos nativos *react-native*

### Vantagens
- [x] Organização devido a componatização
- [x] Divisão de responsabilidades: 
 - Back-end: Regra de negocio
 - Front-end: Interface
- [x] Uma API, múltiplos clientes
- [x] Programação declarativa 

- [x] **JSX**: permite escreve HTML dentro do javascript, isso permite que se crie elementos próprios

#### Imperativo x Declarativo
- Imperativo: diz o que vai acontecer e o que precisa pra acontecer, cada condição deve ser prevista e sua ação.
- Declarativo: mostrar isso pra mim, nessa condição. O react obrserva e verifica se precisa mudar ou não.

## Babel / Webpack
- [x] O browser não entende todo esse código, e agora? (BABEL: coverte o codigo de forma que o brosewr entenda)
- [x] Webpack:
- Criação do bundle; pega todo codigo escrito e gera um arquivo unico que vai ser consumido
- Live reload: webpack dev server 
- Ensina o Javascript importa css, imagens,.. (Loaders)

## Conceito de Componentização
- Separar o codigo em varios arquivos que podem ser reutilizados em diferentes partes do projet

## Conceito de Propriedade
- Informação que pode ser passada de um compoente pai para um componente filho

## Conceito de Estado e imutabilidade
- [x] __Estado__: Usado quando se quer guarda um informação que posteriormente pode vir a ser manipulada pelo componente.
- Não podemos usar o conceitos tradicional de armazenar as variaveis, porque o React não consegue entender quando deve renderizar, por isso usando o conceito de estado. Com isso temos disponiveil para ser renderizado a qualquer momento pela DOM.
- Guardar informações sobre o componente, dados que poderão ser atualizados de tempos em tempos

- [x] __Imutabilidade__: Não se deve alterar o valor de uma variavel diretamente, agente precisa copiar tudo de uma varivel pra outra com as devidas alterações.
ex:
```js
    setProjects([...projects, `Novo Projeto${Date.now()}` ])
```
