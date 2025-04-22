import type { Linter } from 'eslint';

import { interopDefault } from '../util';

export async function typescript(): Promise<Linter.Config[]> {
  const [tsPlugin, tsParser] = await Promise.all([
    interopDefault(import('@typescript-eslint/eslint-plugin')),
    interopDefault(import('@typescript-eslint/parser')),
  ] as const);

  return [
    {
      files: ['**/*.?([cm])[jt]s?(x)'],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
        },
      },
      plugins: {
        '@typescript-eslint': {
          rules: tsPlugin.rules as Record<string, any>,
        },
      },

      rules: {
        ...tsPlugin.configs.recommended.rules,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
      },
    },
  ];
}
