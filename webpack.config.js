const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const sourcePath = path.resolve('./src');
const buildPath = path.resolve('./public');

const env = process.env.NODE_ENV || 'development';

const isDev = (x, alt = null) => env === 'development' ? x : alt;
const isProd = (x, alt = null) => env === 'production' ? x : alt;

const noNulls = x => x;

const entry = [
  'babel-polyfill',
  isDev('react-hot-loader/patch'),
  isDev('webpack-dev-server/client?http://localhost:8080'),
  isDev('webpack/hot/only-dev-server'),
  'index'
].filter(noNulls);

const output = {
  filename: 'bundle.js',
  path: buildPath,
  publicPath: '/'
};

const plugins = [
  new webpack.NamedModulesPlugin(),
  isDev(new webpack.HotModuleReplacementPlugin()),
  isDev(new webpack.NoEmitOnErrorsPlugin()),
  isDev(new WebpackNotifierPlugin()),
  isProd(new UglifyJSPlugin()),
  new ExtractTextPlugin({filename: '[name].bundle.css', disable: env === 'development'}),
  new HtmlWebpackPlugin({
    template: 'index.html'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(env)
    }
  })
].filter(noNulls);

const rules = [
  {
    test: /\.js$/,
    include: sourcePath,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: "css-loader"
        }
      ]
    })
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ]
    })
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader'
    ]
  }
];

module.exports = {
  devtool: isProd('source-map', 'inline-source-map'),
  context: sourcePath,
  entry,
  output,
  resolve: {
    modules: ['node_modules', sourcePath],
    extensions: ['.js'],
  },
  module: {
    rules,
  },
  plugins,
  devServer: {
    compress: true,
    hot: true,
    inline: true,
    host: 'localhost',
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    }
  }
};
