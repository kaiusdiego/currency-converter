/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */


export default {
  projects: [
    '<rootDir>/src/@core',
    '<rootDir>/src/nest',
    '<rootDir>/src/nest/test',
  ],
  coverageDirectory: '<rootDir>/__coverage',
};
