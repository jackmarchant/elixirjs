module.exports = {
  moduleFileExtensions: ['js', 'json'],
  testPathIgnorePatterns: ['/(node_modules|lib)/'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js)$',
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
