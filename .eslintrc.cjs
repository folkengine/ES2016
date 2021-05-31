module.exports = {
  env: {
    browser: true,
    'es6': true
  },
  extends: [
    'plugin:compat/recommended',
    'plugin:mocha/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "space-before-function-paren": "off"
  },
  'plugins': [
    "mocha"
  ],
};
