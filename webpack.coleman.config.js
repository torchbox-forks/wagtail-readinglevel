const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/coleman-index.js'),
  output: {
    path: path.resolve(__dirname, 'wagtailreadinglevelcoleman/static'),
    filename: 'wagtailreadinglevel.coleman.bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                    ]
                }
            }
        }
    ]
  }
};
