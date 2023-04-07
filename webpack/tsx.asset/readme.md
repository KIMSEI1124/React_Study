# Quick Start

```sh
npm install
npm run dev
```

## 의존성 설치

```sh
npm install react react-dom @emotion/css @emotion/react @emotion/styled emotion-reset
npm install -D @svgr/webpack @types/react @types/react-dom clean-webpack-plugin esbuild-loader file-loader fork-ts-checker-webpack-plugin html-webpack-plugin typescript webpack webpack-cli webpack-dev-server
npx tsc --init
```

## package.json

```json
{
  "name": "tsx",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.tsx",
  "scripts": {
    "dev": "webpack-dev-server --open",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@emotion/css": "^11.10.6",
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "emotion-reset": "^3.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@svgr/webpack": "^7.0.0",
    "@types/react": "^18.0.33",
    "@types/react-dom": "^18.0.11",
    "babel-loader": "^9.1.2",
    "clean-webpack-plugin": "^4.0.0",
    "esbuild-loader": "^3.0.1",
    "file-loader": "^6.2.0",
    "fork-ts-checker-webpack-plugin": "^8.0.0",
    "html-webpack-plugin": "^5.5.0",
    "typescript": "^5.0.3",
    "webpack": "^5.78.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.13.2"
  }
}
```

## webpack.config.js

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    static: path.resolve(__dirname, './public'),
    port: 3000,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
```
