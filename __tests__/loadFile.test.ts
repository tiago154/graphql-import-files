import { loadFile } from '../src'

describe('loadFile', () => {
  describe('when the file path is valid', () => {
    it('should return a valid schema', () => {
      const schema = loadFile('./__tests__/mocks/file/user.test.graphql')

      expect(schema).toMatchSnapshot()
    })
  })

  describe('when file path is valid and has file import annotation', () => {
    it('should valid schema', () => {
      const schema = loadFile('./__tests__/mocks/with-import/root.test.graphql')

      expect(schema).toMatchSnapshot()
    })
  })

  describe('when file path does not exist', () => {
    it('should an error when not finding the file', () => {
      expect(() => loadFile('./__tests__/mocks/file/error.graphql')).toThrow()
    })
  })
})
