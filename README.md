# Microfrontends
Um exemplo básico de arquiterura de micro frontends utilizando o plugin Module Federation do Webpack 5
**para tratamento de erro caso não seja carregado algum micro-frontend no container, é necessário ter o webapck 5.15+**

## Apps
A poc consiste em 3 aplicações apartadas em React.

### Container 
A aplicação que une as demais e possui sua propria store e usa os reducers das demais aplicações
#### instalação
`npm i `
#### Rodando Local
`npm start` - porta 3000

### Fonts
Uma aplicação simples de troca de cores com sua própria store

#### instalação
`npm i `
#### Rodando Local
`npm start` - porta 3001

### Cores
Uma aplicação simples de troca de cores com sua própria store
#### instalação
`npm i `
#### Rodando Local
`npm start` - porta 3002

