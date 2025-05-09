import { parsers as tailwindPluginParsers } from 'sort-classes';
import pluginSortImports from 'tidy-imports';

/**
 * @refs  https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1195411734
 */
/** @type {import("prettier").Parser}  */
const bothParser = {
  ...tailwindPluginParsers.typescript,
  preprocess: pluginSortImports.parsers.typescript.preprocess,
};

/** @type {import("prettier").Plugin}  */
const mixedPlugin = {
  parsers: {
    typescript: bothParser,
  },
  options: {
    ...pluginSortImports.options,
  },
};

export default {
  plugins: [mixedPlugin],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 140,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
