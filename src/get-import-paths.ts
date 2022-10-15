/**
 * Checks for external files imported by the #import annotation in a file and returns the paths if any
 * @param {string} fileContent
 * @returns {string[] | []} The list of file paths with #import notation
 */
export const getImportPaths = (fileContent: string): string[] | [] =>
  fileContent
    .split(/\r?\n/)
    .filter((line) => line.match(/^#import\s/g))
    .map(line => line.match(/'.*'|".*"/g)!.toString().replace(/'|"/g, ''))
