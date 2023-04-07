# Quick Start

```sh
npm install
npm run dev
```

## 의존성 설치

```sh
npm install react react-dom
npm install -D @types/react @types/react-dom typescript ts-loader webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript html-webpack-plugin clean-webpack-plugin
npx tsc --init
```

## package.json

```json
{
  "name": "tsx",
  "version": "1.0.0",
  "description": "",
  "main": ".prettierrc.js",
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
    "@babel/core": "^7.21.4",
    "@babel/preset-env": "^7.21.4",
    "@babel/preset-react": "^7.18.6",
    "@babel/preset-typescript": "^7.21.4",
    "@types/react": "^18.0.33",
    "@types/react-dom": "^18.0.11",
    "babel-loader": "^9.1.2",
    "clean-webpack-plugin": "^4.0.0",
    "fork-ts-checker-webpack-plugin": "^8.0.0",
    "html-webpack-plugin": "^5.5.0",
    "ts-loader": "^9.4.2",
    "typescript": "^5.0.3",
    "webpack": "^5.78.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.13.2"
  }
}
```

## babel.config.js

```js
module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-typescript',
  ],
};
```

## webpack.config.js

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[contenthash].bundle.js',
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, '../public'),
    port: 3000,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],
};
```
