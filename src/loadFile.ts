import { readFileSync } from 'fs'
import { join, dirname } from 'path'

import { mergeTypeDefs } from '@graphql-tools/merge'
import type { DocumentNode } from 'graphql'

import { getImportPaths } from './get-import-paths'

/**
 * Put the path of the file to be imported, considering the root of the project i.e. the directory from where you invoked the node command
 * @example ./schemas/file.graphql
 * @param {string} pathFile
 * @return {DocumentNode} DocumentNode
 */
export const loadFile = (pathFile: string): DocumentNode => {
  const fileContent = readFileSync(join(process.cwd(), pathFile), 'utf8')

  const externalFilePaths = getImportPaths(fileContent)

  const contentExternalFiles = externalFilePaths.map(externalFilePath => readFileSync(
    join(process.cwd(), dirname(pathFile), externalFilePath),
    'utf8'
  ))

  return mergeTypeDefs([
    fileContent,
    ...contentExternalFiles
  ])
}
