const fs = require('fs')
const path = require('path')

/**
 * Place the path of the file to be imported, considering the root of the project.
 * @example ./schemas/file.graphql
 * @param {string} pathFile
 * @return {string} String of a scheme
 */
module.exports = pathFile =>
  fs.readFileSync(path.join(process.cwd(), pathFile), 'utf8')