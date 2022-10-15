<div align="center">

[![npm](https://img.shields.io/npm/dy/graphql-import-files?color=%2303a1fc&style=for-the-badge)](https://npm-stat.com/charts.html?package=graphql-import-files)

</div>

<div align="center">

[![Build Status](https://travis-ci.com/tiago154/graphql-import-files.svg?branch=master)](https://travis-ci.com/tiago154/graphql-import-files)
[![Coverage Status](https://coveralls.io/repos/github/tiago154/graphql-import-files/badge.svg)](https://coveralls.io/github/tiago154/graphql-import-files)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/tiago154/graphql-import-files)
[![Npm Version](https://img.shields.io/npm/v/graphql-import-files.svg)](https://www.npmjs.com/package/graphql-import-files)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/tiago154/graphql-import-files)

</div>

# graphql-import-files
Light and easy package that will load .graphql files and use them with syntax highlighting.

## Install

```sh
npm i -S graphql-import-files
```

## Usage:

## Loading a single file

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
// index.js
const { ApolloServer } = require('apollo-server')
const { loadFile } = require('graphql-import-files')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs: loadFile('./schema/schema.graphql'), // Always consider the path at the root of the project
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`)
})
```

**The `loadFile` function supports the `#import` annotation and this will allow you to load other files as if it were the import in a js file.**

```
root
├──src
  ├──index.js
  ├──schema
    ├──schema.graphql
    ├──user
      ├──user.graphql
    ├──location
      ├──location.graphql
```

./src/schema/schema.graphql
```graphql
#import './user/user.graphql'
#import './location/location.graphql'

type Query {
  user(id: ID!): User
  location(id: ID!): Location
}
```

./src/schema/user/user.graphql
```graphql
type User {
  id: ID!
  name: String!
}
```

./src/schema/location/location.graphql
```graphql
type Location {
  id: ID!
  name: String!
}
```

```js
// index.js
// ...
const { loadFile } = require('graphql-import-files')

const server = new ApolloServer({
  typeDefs: loadFile('./schema/schema.graphql'), // Always consider the path at the root of the project
  resolvers
})
// ...
```

## Loading multiple files

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
// index.js
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
