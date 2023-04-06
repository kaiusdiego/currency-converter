const sbf_converter_path =
  '<rootDir>/../../../node_modules/sbf-converter/dist';

export default {
  displayName: {
    name: 'nestjs',
    color: 'magentaBright',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageProvider: 'v8',
  coverageDirectory: '../__coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    'sbf\\-converter/(.*)$': `${sbf_converter_path}/$1`,
    '#seedwork/(.*)$': `${sbf_converter_path}/@seedwork/$1`,

    '#currency/(.*)$': `${sbf_converter_path}/currency/$1`,
  },
  // setupFilesAfterEnv: ['../../@core/src/@seedwork/domain/tests/jest.ts'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
};
