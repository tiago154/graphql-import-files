module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.ts'
  ],
  testMatch: [
    '**/__tests__/**/*.test.ts'
  ],
  verbose: true
}
