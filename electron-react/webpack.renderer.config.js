const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/renderer/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      chunks: ['manifest', 'vendor', 'index'],
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      nodeModules: process.env.NODE_ENV !== 'production'
        ? path.resolve(__dirname, '../node_modules')
        : false
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              [
                "import",
                {
                  "libraryName": "antd",
                  "style": "css"
                }
              ],
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 将小于 1M 的图片通过base64打包到代码中
            // 将大于 1M 的图片通过file-loader路径的形式引入
            limit: 1000 * 1024,
            // 指定输出文件路径
            outputPath: 'images/',
            name: '[name].[hash:5].[ext]',
            publicPath: '', // 可以写cdn地址
          }
        }
      }
    ]
  },
  output: {

    filename: '[name].js',
    path: path.resolve('./dist/electron'),
    publicPath: "/",
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src/renderer'),
    },
    extensions: ['.js', '.jsx'],
    fallback: {
      path: require.resolve("path-browserify"),
      util: require.resolve("util/"),
      crypto: require.resolve("crypto-browserify"),
      assert: require.resolve("assert/"),
      os: require.resolve("os-browserify/browser"),
      stream: require.resolve("stream-browserify")
    }
  },
  node: {
    // fs: 'empty'
  },
  externals: {
    'electron': 'require("electron")'
  }
}