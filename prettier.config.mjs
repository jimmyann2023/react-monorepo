/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

export default {
  arrowParens: 'always',
  endOfLine: 'auto',
  jsxSingleQuote: false,
  overrides: [
    {
      files: ['*.json5'],
      options: {
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100,
  proseWrap: 'never',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  useTabs: false,
};
