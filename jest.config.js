module.exports = {
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/tests/utils.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
