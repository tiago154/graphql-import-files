import { readFileSync } from 'fs'
import { join } from 'path'

/**
 * Place the path of the file to be imported, considering the root of the project.
 * @example ./schemas/file.graphql
 * @param {string} pathFile
 * @return {string} String of a scheme
 */
export const loadFile = (pathFile: string) : string =>
  readFileSync(join(process.cwd(), pathFile), 'utf8')
