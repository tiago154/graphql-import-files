import { readFileSync } from 'fs'
import { join } from 'path'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { DocumentNode } from 'graphql'

/**
 * Place the path of the file to be imported, considering the root of the project.
 * @example ./schemas/file.graphql
 * @param {string} pathFile
 * @return {DocumentNode} DocumentNode
 */
export const loadFile = (pathFile: string) : DocumentNode =>
  mergeTypeDefs(readFileSync(join(process.cwd(), pathFile), 'utf8'))
