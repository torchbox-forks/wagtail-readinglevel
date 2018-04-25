const path = require('path');

module.exports = {
  entry: './src/flesch-index.js',
  output: {
    filename: 'wagtailreadinglevel.flesch.bundle.js',
    path: path.resolve(__dirname, 'wagtailreadinglevelflesch/static')
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
                        '@babel/preset-react'
                    ]
                }
            }
        }
    ]
  }
};