module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js(x)?',
    '!src/**/stories.jsx',
    '!src/pages/**/*.jsx',
    '!src/styles/**/*.js',
    '!src/utils/apollo.js',
    '!src/utils/apolloCache.js',
    '!src/graphql/**/*.js',
    '!src/**/mock.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest/']
}
