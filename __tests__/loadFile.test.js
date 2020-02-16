const { loadFile } = require('../src')

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
        expect(error.code).toBe('ENOENT')
      }
    })
  })
})