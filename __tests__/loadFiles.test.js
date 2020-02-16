const { loadFiles } = require('../src')
const { buildSchemaFromTypeDefinitions } = require('apollo-server')

describe('loadFiles', () => {
  describe('success', () => {
    it('should valid schema with many file', () => {
      const gropPattern = '**/__tests__/mocks/multifiles/**/*.{graphql,gql}'
      const schema = loadFiles(gropPattern)

      const schemaBuild = buildSchemaFromTypeDefinitions(schema)

      expect(schemaBuild).toMatchSnapshot()
    })

    it('should build the schema even with files with separate queries', () => {
      const gropPattern = '**/__tests__/mocks/separate-queries/*.graphql'
      const schema = loadFiles(gropPattern)

      const schemaBuild = buildSchemaFromTypeDefinitions(schema)

      expect(schemaBuild).toMatchSnapshot()
    })
  })

  describe('failure', () => {
    it('should returns an object with definitions empty when no file is founds', () => {
      const gropPattern = '**/__tests__/mocks/multifiles/**/*.{error,fail}'
      const schema = loadFiles(gropPattern)

      expect(schema).toEqual({ definitions: [], kind: 'Document' })
    })
  })
})