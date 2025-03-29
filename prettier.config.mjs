export default {
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'none',
  semi: true,
  printWidth: 80,
  arrowParens: 'avoid',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/api/(.*)$',
    '^@/app/(.*)$',
    '^@/pages/(.*)$',
    '^@/widgets/(.*)$',
    '^@/shared/(.*)$',
    '^@/entities/(.*)$',
    '^@/features/(.*)$',
    '^../(.*)$',
    '^./(.*)$',
    '(.scss)'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports']
};
