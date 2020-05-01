# Boilerplate GraphQL Apollo with Factory Method

Boilerplate para futuros projetos usando GraphQL Apollo em Vue.js.

Esta arquitetura foi baseada no artigo [Vue API calls in a smart way](https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322) que propõe o uso do padrão de projeto Factory Method para chamadas API, a fim de esconder detalhes de implementação e expor apenas a interface pública para as chamadas. No artigo, é proposto o uso da biblioteca axios, mas para fins de estudos, implementei o uso de [GraphQL](https://graphql.org/).

Por meio de Injeção de Depedências, o Apollo Provider é passado para os repositories que fazem a manipulação direta das queries e mutations. Assim, garantindo que seja possível usar diferentes APIs para consumo, sendo necessário apenas a extração do client desejado.

```js
export default function({ defaultClient: apollo }) {
  return {
    get({ variables }) {
      return apollo.query({
        query: getGraphFile(GRAPH_QUERIES_PATH, "getCharacters"),
        variables
      });
    },
    
    ...
```

Chame o repositório que deseja usar através da Factory:
```js
import { repositoryFactory } from "@/repository/repositoryFactory.js";
const charactersRepository = repositoryFactory.get("characters");
```

E faça uma consulta:
```js
const character = await charactersRepository.getCharacter({
   variables: {
      charId: 2
   }
});
```

## Arquitetura

```
src
│   App.vue
│   main.js    
│
└─── graphql
│   └─── queries
|   |   |   getCharacters.gql
│   │   |   getCharacter.gql
│   │   |   getEpisodes.gql
│   │   |   getEpisode.gql
|   |
│   └─── mutations
│       │   ...
│   
└─── repository
|   |   index.js
|   |   repositoryFactory.js
|   └─── repositories
|       |   charactersRespository.js
|       |   episodesRespository.js
|
└─── utils
|   |   graphql.js
```

## Tecnologias
* vue-apollo
* graphql-tag

## Como baixar

É necessário ter no mínimo a versão 8 do [NodeJS](https://nodejs.org/en/download) instalado e consequentemente o NPM (que vem junto com o Node quando instalado). Neste projeto, optei pelo [Yarn](https://yarnpkg.com), mas fique a vontade para usar o que lhe for conveniente.

Clone este repositório (caso queira clonar por linha de comando necessitará do [git](https://git-scm.com) instalado)

```
git clone https://github.com/exploitmik/vue-boilerplate-graphql.git
```

Depois vá até a pasta clonada, por exemplo:

```
cd vue-boilerplate-graphql/
```

## Como rodar

Dentro da pasta, os seguintes comandos estarão disponíveis:

### Instalar todas as dependências para o projeto funcionar

```
yarn install
```

### Compilar e executar um servidor de desenvolvimento com hot-reloading

```
yarn run serve
```

### Compilar e minificar para produção

```
yarn run build
```
