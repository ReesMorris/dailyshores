import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import reactHooks from 'eslint-plugin-react-hooks';
import panda from '@pandacss/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import zod from 'eslint-plugin-zod';
import tsdoc from 'eslint-plugin-tsdoc';

export default [
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  sonarjs.configs.recommended,
  react.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  unicorn.configs['flat/recommended'],
  promise.configs['flat/recommended'],
  prettier, // prettier must be the last config

  {
    plugins: {
      '@pandacss': panda,
      react: react,
      tsdoc: tsdoc,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
      zod: zod
    },
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['eslint.config.mjs', '**/*.d.ts', 'styled-system', '.next/*'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: { ...globals.browser }
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: true,
        node: true
      }
    },
    rules: {
      // Rules which have not properly mapped to ESLint 9
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,

      // TypeScript
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',

      // Next
      '@next/next/no-duplicate-head': 'off',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: true,
          noSortAlphabetically: true
        }
      ],
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],

      // React Hooks
      'react-hooks/exhaustive-deps': 'warn',

      // JSX Accessibility
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ],

      // TSDoc
      'tsdoc/syntax': 'warn',

      // Promise
      'promise/always-return': 'off',

      // Import
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': ['error', { ignore: ['^geist/'] }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ]
        }
      ],

      // Unicorn
      'unicorn/filename-case': ['error', { cases: { kebabCase: true } }],
      'unicorn/catch-error-name': ['error', { name: 'err' }],
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/new-for-builtins': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/no-null': 'off',

      // SonarJS
      'sonarjs/todo-tag': 'off',
      'sonarjs/cognitive-complexity': ['error', 15],
      'sonarjs/no-unstable-nested-components': 'off',
      'sonarjs/no-os-command-from-path': 'off',
      'sonarjs/use-type-alias': 'off',
      'sonarjs/no-selector-parameter': 'off',
      'sonarjs/no-misused-promises': ['error', { checksVoidReturn: false }],

      // Prettier
      'prettier/prettier': 'error',

      // General
      curly: 'error',
      'no-empty': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-param-reassign': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always']
    }
  }
];
