module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { browsers: 'last 5 versions ' },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    [
      '@babel/preset-typescript',
      {
        onlyRemoveTypeImports: true,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
}
