module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    eqeqeq: 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
