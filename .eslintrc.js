module.exports = {
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks', 'import', 'prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/require-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 0,
    'no-unused-expressions': 0,
    'no-case-declarations': 0,
    'no-unexpected-multiline': 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-async-promise-executor': 0,
    'no-continue': 0,
    'import/first': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/imports-first': 0,
    'import/prefer-default-export': 0,
    'func-names': 0,
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/no-unused-prop-types': [
      'error',
      { customValidators: [], skipShapeProps: true },
    ],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-props-no-spreading': 0,
    'global-require': 'error',
    camelcase: ['error', { allow: ['^UNSAFE_component'] }],
    'import/no-webpack-loader-syntax': 'error',
    'class-methods-use-this': 'error',
    'consistent-return': 'error',
    'react/prop-types': 'error',

    // Used in regexps. Maybe should be tested on Windows
    'no-useless-escape': 'warn',
    // ESLINT RULES
    // https://eslint.org/docs/rules/
    'no-useless-catch': 'warn',
    'no-prototype-builtins': 'off',
    'guard-for-in': 'error',
    'id-match': 'error',
    'max-classes-per-file': ['error', 1],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-irregular-whitespace': 'off',
    'no-fallthrough': 'error',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    radix: 'error',

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index'],
          'unknown',
        ],
      },
    ],

    // ESLINT-PLUGIN-REACT
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/display-name': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {
            char: '"',
            alternatives: ['&quot;'],
          },
          {
            char: '>',
            alternatives: ['&gt;'],
          },
          {
            char: "'",
            alternatives: ['&apos;'],
          },
          {
            char: '}',
            alternatives: ['&#125;'],
          },
          {
            char: '{',
            alternatives: ['&#123;'],
          },
        ],
      },
    ],
    'react/self-closing-comp': 'error',
  },
};
