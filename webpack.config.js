const path = require('path');

module.exports = {
  mode: "production", // or "development"
  entry: './src/automated-index.js',
  output: {
    filename: 'wagtailreadinglevel.bundle.js',
    path: path.resolve(__dirname, 'wagtailreadinglevel/static')
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
