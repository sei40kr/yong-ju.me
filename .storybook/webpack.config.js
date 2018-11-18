const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../stories'),
    ],
    loaders: [
      require.resolve('awesome-typescript-loader'),
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    include: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../stories'),
    ],
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  });

  defaultConfig.plugins.push(new TSDocgenPlugin()); // optional
  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  return defaultConfig;
};
