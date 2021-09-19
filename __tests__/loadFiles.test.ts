import { loadFiles } from '../src'

describe('loadFiles', () => {
  describe('success', () => {
    it('should valid schema with many file', () => {
      const globPattern = '**/__tests__/mocks/multifiles/**/*.{graphql,gql}'
      const schema = loadFiles(globPattern)

      expect(schema).toMatchSnapshot()
    })

    it('should build the schema even with files with separate queries', () => {
      const globPattern = '**/__tests__/mocks/separate-queries/*.graphql'
      const schema = loadFiles(globPattern)

      expect(schema).toMatchSnapshot()
    })
  })

  describe('failure', () => {
    it('should returns an object with definitions empty when no file is founds', () => {
      const glopPattern = '**/__tests__/mocks/multifiles/**/*.{error,fail}'
      const schema = loadFiles(glopPattern)

      expect(schema).toEqual({ definitions: [], kind: 'Document' })
    })
  })
})
