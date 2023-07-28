export default {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/styleMock.js',
  },
  testEnvironment: 'jsdom',
};
