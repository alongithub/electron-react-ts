module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'alloy',
    'alloy/react',
  ],
  // globals: {
  //   __static: true,
  //   $: true
  // },
  plugins: [
    'html',
    'react',
  ],
  'rules': {
    'no-unused-vars': 1,

    'default-case-last': ['off'],
    'grouped-accessor-pairs': ['off'],
    'no-async-promise-executor': ['off'],
    'no-constructor-return': ['off'],
    'no-dupe-else-if': ['off'],
    'no-import-assign': ['off'],
    'no-loss-of-precision': ['off'],
    'no-misleading-character-class': ['off'],
    'no-promise-executor-return': ['off'],
    'no-setter-return': ['off'],
    'no-unreachable-loop': ['off'],
    'no-unsafe-optional-chaining': ['off'],
    'no-useless-backreference': ['off'],
    'no-useless-catch': ['off'],
    'prefer-object-spread': ['off'],
    'prefer-regex-literals': ['off'],

    //   'no-console': 0,
    //   // allow paren-less arrow functions
    //   'arrow-parens': 0,
    //   // allow async-await
    //   'generator-star-spacing': 0,
    //   // allow debugger during development
    //   'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //   'no-unused-vars': [
    //     'warn',
    //     {
    //       'vars': 'all',
    //       'args': 'none',
    //       'ignoreRestSiblings': true
    //     }
    //   ],
  }
}