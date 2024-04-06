module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'indent': ['error', 2], // Enforce 2-space indentation
    'semi': ['error', 'always'], // Require semicolons at the end of statements
    'quotes': ['error', 'single'], // Use single quotes for strings
    'no-unused-vars': 'warn', // Warn about unused variables
    'no-console': 'warn', // Warn about console statements
  },
};
