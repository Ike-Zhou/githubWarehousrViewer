module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/static-property-placement': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-shadow': 0,
  },
}
