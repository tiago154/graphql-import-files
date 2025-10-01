import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginJs from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      jest: jestPlugin,
      import: importPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      sourceType: 'module'
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs']
        },
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json'
        }
      }
    },
    rules: {
      ...importPlugin.configs.errors.rules,
      semi: ['error', 'never'],
      quotes: [
        'error',
        'single',
        {
          'avoidEscape': true
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'varsIgnorePattern': '^_',
          'argsIgnorePattern': '^_'
        }
      ],
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always'
        }
      ],
      'import/prefer-default-export': 'off'
    }
  }
]
