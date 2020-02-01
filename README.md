# graphql-import-files

## Install

```sh
npm i -S graphql-import-files
```

## Usage

### Loading a single file

For example, your files and folders look like this:

```
root
├──src
  ├──index.js
  ├──schema
    ├──schema.graphql
```
Use the function ``loadFile`` that will load a single file.

```js
const { ApolloServer } = require('apollo-server')
const { loadFile } = require('graphql-import-files')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs: loadFile('./schema/schema.graphql'),
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`)
})
```

### Loading multiple files

For example, your files and folders look like this:

```
root
├──src
  ├──index.js
  ├──schemas
    ├──query.graphql
    ├──user
      ├──user.gql
      ├──role.gql
    ├──product
      ├──product.graphql
```

Use the function ``loadFiles`` that will load multiple files.

```js
const { ApolloServer } = require('apollo-server')
const { loadFiles } = require('graphql-import-files')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs: loadFiles('**/schemas/**/*.{graphql,gql}'), // Use the glob pattern to find multiple files
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`)
})
```