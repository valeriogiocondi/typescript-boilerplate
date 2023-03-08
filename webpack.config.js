
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "entry": {
    "bundle": path.resolve(__dirname, './src/index.ts')
  },
  "output": {
    "path": path.resolve(__dirname, './dist'),
    "filename": "bundle.js",
    "publicPath": "/"
  },
  "cache": false,
  "devServer": {
    "static": {
      "directory": path.resolve(__dirname, './dist')
    },
    "open": true,
    "hot": true,
    "compress": true,
    "historyApiFallback": true,
    "port": 3030
  },
  "mode": "development",
  "module": {
    "rules": [
      {
        "test": /\.(ts|js)x?$/,
        "exclude": /node_modules/,
        "loader": "babel-loader"
      },
      {
        "test": /\.less$/i,
        "use": [
          {
            "loader": "style-loader"
          },
          {
            "loader": "css-loader"
          },
          {
            "loader": "less-loader",
            "options": {
              "lessOptions": {
                "strictMath": true
              }
            }
          }
        ]
      }
    ]
  },
  "plugins": [
    new HtmlWebpackPlugin({ hash: true, title: 'Basic Typescript Template', template: path.resolve(__dirname, './src/index.html') })
  ],
  "resolve": {
    "extensions": [
      ".js",
      ".jsx",
      ".ts",
      ".tsx"
    ]
  }
} ;
