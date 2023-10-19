const path = require('path');

module.exports = {
  mode: "production", // or "development"
  entry: './src/coleman-index.js',
  output: {
    filename: 'wagtailreadinglevel.coleman.bundle.js',
    path: path.resolve(__dirname, 'wagtailreadinglevelcoleman/static')
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
