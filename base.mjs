import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { globalIgnores } from 'eslint/config';

export default [
  {
    extends: ['js/recommended'],
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  stylistic.configs.recommended,
  eslintPluginPrettierRecommended,
  perfectionist.configs['recommended-natural'],
  {
    rules: {
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: '*',
          prev: ['const', 'let', 'var', 'import'],
        },
        {
          blankLine: 'always',
          next: ['if', 'for', 'while', 'switch', 'try', 'return', 'export'],
          prev: '*',
        },
        {
          blankLine: 'any',
          next: ['import'],
          prev: ['import'],
        },
        {
          blankLine: 'any',
          next: ['export'],
          prev: ['export'],
        },
      ],
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: '^on.',
              groupName: 'callback',
            },
          ],
          groups: ['unknown', 'callback'],
        },
      ],
    },
  },
  globalIgnores(['build', 'coverage']),
];
