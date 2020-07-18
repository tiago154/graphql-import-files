const fs = require('fs')
const path = require('path')
const glob = require('fast-glob')
const { mergeTypeDefs } = require('@graphql-tools/merge')

/**
 * Loads multiple graphql files, use .graphql or .gql.
 * @param {string} matchFiles - The glob patterns uses to detect graphql files
 * @return {object} DocumentNode
 */
module.exports = matchFiles => {
  const files = glob.sync(matchFiles)

  const schema = files.map(file =>
    fs.readFileSync(path.join(process.cwd(), file), 'utf8')
  )

  return mergeTypeDefs(schema)
}
