const path = require('path');

module.exports = {
  mode: "production", // or "development"
  entry: './src/fog-index.js',
  output: {
    filename: 'wagtailreadinglevel.fog.bundle.js',
    path: path.resolve(__dirname, 'wagtailreadinglevelfog/static')
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
