const path = require('path');

module.exports = {
  mode: "production", // or "development"
  entry: './src/smog-index.js',
  output: {
    filename: 'wagtailreadinglevel.smog.bundle.js',
    path: path.resolve(__dirname, 'wagtailreadinglevelsmog/static')
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
