/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import validate from 'webpack-validator';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';

const PATHS = {
  app: path.resolve(__dirname, './src/main.js'),
  build: path.join(__dirname, 'build'),
  assets: path.join(__dirname, 'static'),
};

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.join('static', 'img/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlWebpackTemplate,
      title: 'Demo',
      appMountId: 'app',
      inject: false,
    }),
  ],
};

const devConfig = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
  ],
};

devConfig.watchOptions = {
  aggregateTimeout: 300,
  poll: 1000,
};

let config;

config = merge(commonConfig, devConfig);

export default validate(config, {
  quiet: true,
});
