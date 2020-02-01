const fs = require('fs')
const path = require('path')
const glob = require('glob')

/**
 * Place the path of the file to be imported, considering the root of the project.
 * @example ./schemas/file.graphql
 * @param {string} pathFile
 * @return {string} String of a scheme
 */
const loadFile = pathFile =>
    fs.readFileSync(path.join(process.cwd(), pathFile), 'utf8')

/**
 * Loads multiple graphql files, use .graphql or .gql.
 * @param {string} matchFiles - The glob patterns uses to detect graphql files
 * @return { Array<string>} List of strings converted from various schemes
 */
const loadFiles = matchFiles =>
    glob.sync(matchFiles)
        .map(file =>
            fs.readFileSync(path.join(process.cwd(), file), 'utf8')
        )

module.exports = { loadFile, loadFiles }
