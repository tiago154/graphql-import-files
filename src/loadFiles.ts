import { readFileSync } from 'fs'
import { join } from 'path'

import glob from 'fast-glob'
import { mergeTypeDefs } from '@graphql-tools/merge'
import type { DocumentNode } from 'graphql'

/**
 * Loads multiple graphql files, use .graphql or .gql.
 * @param {string} matchFiles - The glob patterns uses to detect graphql files
 * @return {object} DocumentNode
 */
export const loadFiles = (matchFiles: string): DocumentNode => {
  const files = glob.sync(matchFiles)

  const schema = files.map(file =>
    readFileSync(join(process.cwd(), file), 'utf8')
  )

  return mergeTypeDefs(schema)
}
