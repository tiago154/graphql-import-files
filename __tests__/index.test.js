const { loadFile, loadFiles } = require('../src/index')

describe('loadFile', () => {
  describe('success', () => {
    it('should valid schema', () => {
      const schema = loadFile('./__tests__/mocks/file/user.test.graphql')

      expect(schema).toMatchSnapshot()
    })
  })

  describe('failure', () => {
    it('should an error when not finding the file', () => {
      try {
        loadFile('./__tests__/mocks/file/error.graphql')
      } catch (error) {
        expect(error.message).toContain('__tests__\\mocks\\file\\error.graphql')
        expect(error.code).toBe('ENOENT')
      }
    })
  })
})

describe('loadFiles', () => {
  describe('success', () => {
    it('should valid schema with many file', () => {
      const gropPattern = '**/__tests__/mocks/multifiles/**/*.{graphql,gql}'
      const schema = loadFiles(gropPattern)

      expect(schema).toMatchSnapshot()
    })
  })

  describe('failure', () => {
    it('should returns an empty array when no file is founds', () => {
      const gropPattern = '**/__tests__/mocks/multifiles/**/*.{error,fail}'
      const schema = loadFiles(gropPattern)

      expect(schema).toEqual([])
    })
  })
})