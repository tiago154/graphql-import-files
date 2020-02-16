const fs = require('fs')
const path = require('path')
const glob = require('glob')
const { mergeTypeDefs } = require('@graphql-toolkit/schema-merging')


/**
 * Loads multiple graphql files, use .graphql or .gql.
 * @param {string} matchFiles - The glob patterns uses to detect graphql files
 * @return {DocumentNode} DocumentNode
 */
module.exports = matchFiles => {
  const files = glob.sync(matchFiles)

  const schema = files.map(file =>
    fs.readFileSync(path.join(process.cwd(), file), 'utf8')
  )

  return mergeTypeDefs(schema)
}