module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-lines-per-function': ['error', 40],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'eol-last': 'off',
  },
};
