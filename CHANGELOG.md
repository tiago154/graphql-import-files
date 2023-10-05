### v1.3.0 / 2023-10-05

* Update all project dependencies
  | Package              | Old Version | New Version |
  |----------------------|-------------|-------------|
  | @graphql-tools/merge | ^8.3.14     | ^9.0.0      |
  | fast-glob            | ^3.2.12     | ^3.3.1      |
  | graphql              | ^16.6.0     | ^16.8.1     |

### v1.2.19 / 2023-01-08

* Update all project dependencies and fix vulnerabilities `json5  <1.0.2 || >=2.0.0 <2.2.2`
  | Package              | Old Version | New Version |
  |----------------------|-------------|-------------|
  | @graphql-tools/merge | ^8.3.6      | ^8.3.14     |

### v1.2.18 / 2022-10-14

* Added support for the `#import` annotation to the `loadFile` function. This was an open suggestion [here](https://github.com/tiago154/graphql-import-files/issues/16) that way we can add the reading of a file and if necessary include other files through the import annotation.

### v1.1.18 / 2022-10-01

* Change the return of the `loadFile` function to `DocumentNode`, to be compatible with the subgraph architecture offered by the `@apollo/subgraph - buildSubgraphSchema` package.
* Update all project dependencies
  | Package              | Old Version | New Version |
  |----------------------|-------------|-------------|
  | @graphql-tools/merge | ^8.2.1      | ^8.3.6      |
  | fast-glob            | ^3.2.11     | ^3.2.12     |
  | graphql              | ^16.3.0     | ^16.6.0     |
