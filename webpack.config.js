const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html><html><head>
          <meta charset="utf-8"/>
          <title>Tax Calculator</title>
          <link rel="icon" href="favicon.ico"/>
        </head><body>
          <h1>Tax Calculator</h1>
          <label for="income">Income:</label>
          <input id="income" type="number"/>
          <button onclick="calculateTax()">Calculate</button>
          <p id="result"></p>
        </body></html>`
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public/favicon.ico', to: 'favicon.ico' }]
    })
  ]
};
