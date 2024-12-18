// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// @ts-ignore
export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
  rules: {
    'camelcase': 2,
    'indent': [2, 2],
    'semi': [2, 'never'],
    'quotes': ['error', 'single'],
    'no-debugger': 2,
    'no-empty': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    // 'comma-dangle': [2, {
    //   // arrays: 'never',
    //   // objects: 'never',
    //   // imports: 'never',
    //   // exports: 'never',
    //   // functions: 'never',
    // }],
    'spaced-comment': ['error', 'always'],
  },
})
