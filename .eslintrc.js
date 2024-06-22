module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'always'],
    curly: ['error', 'multi-line'],
    radix: ['error', 'as-needed'],
    eqeqeq: 0,
    quotes: 0,
    camelcase: 0,
    'comma-dangle': ['error', 'never'],
    'consistent-this': [2, 'self'],
    'import/order': 0,
    'import/no-unresolved': 0,
    'no-plusplus': 0,
    'no-use-before-define': 0,
    'global-require': 0,
    'dot-notation': 0,
    'prefer-destructuring': 0,
    'prefer-template': 0,
    'consistent-return': 0,
    'func-names': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-param-reassign': 0,
    'no-restricted-globals': 0,
    'no-return-await': 0,
    'object-curly-newline': 0,
    'class-methods-use-this': 0,
    'max-len': 0,
    'prefer-rest-params': 0,
    'no-nested-ternary': 0,
    'no-await-in-loop': 0,
    'no-continue': 0,
    'no-lonely-if': 0,
    'no-new': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.spec.js', './index.js'] }]
  },
  globals: {
    arguments: 'readonly',
    FormData: 'readonly'
  }
};
