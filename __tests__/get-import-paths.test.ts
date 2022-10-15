import { getImportPaths } from '../src/get-import-paths'
import { readFileSync } from 'fs'
import { join } from 'path'

describe('getImportPaths', () => {
  describe('when file has file import annotation', () => {
    it('should return the path of the files that were inserted by the annotation', () => {
      const expectedResult = ['./user/user.test.graphql', './location/location.test.graphql']

      const fileContent = readFileSync(
        join(process.cwd(), './__tests__/mocks/with-import/root.test.graphql'),
        'utf8'
      )

      const pathFiles = getImportPaths(fileContent)

      expect(pathFiles.length).toBe(2)
      expect(pathFiles).toEqual(expectedResult)
    })
  })

  describe('when file has no file import annotation', () => {
    it('should return an empty list', () => {
      const fileContent = readFileSync(
        join(process.cwd(), './__tests__/mocks/with-import/root-without-import.test.graphql'),
        'utf8'
      )

      const pathFiles = getImportPaths(fileContent)

      expect(pathFiles.length).toBe(0)
      expect(pathFiles).toEqual([])
    })
  })
})
