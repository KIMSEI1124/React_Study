# Quick Start

```sh
npm install
npm run dev
```

## 의존성 설치

```sh
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/preset-env @babel/preset-react html-webpack-plugin html-loader
```

## package.json

```json
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.21.4",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^9.1.2",
    "html-loader": "^4.2.0",
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.78.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.13.2"
  }
}
```

## webpack.config.js

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};
```
