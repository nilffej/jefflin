module.exports = {
    semi: true,
    tabWidth: 4,
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'none',
    jsxBracketSameLine: true,
    quoteProps: 'consistent',
    endOfLine: 'auto',
    importOrder: ['^components/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')]
};
