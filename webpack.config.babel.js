/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import validate from 'webpack-validator';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import cssnext from 'postcss-cssnext';

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
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: [/node_modules/],
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: [/node_modules/],
      },
    ],
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
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.join('static', 'img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'image/svg+xml',
        },
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file',
      },
      {
        test: /\.woff2?(\?.*)?$/,
        loader: 'url',
        query: {
          prefix: 'font',
          limit: 10000,
        },
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'application/octet-stream',
        },
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
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
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
      failOnError: true,
    }),
  ],
  postcss: () => [
    cssnext,
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

// TODO: add production config

let config;

config = merge(commonConfig, devConfig);

export default validate(config, {
  quiet: true,
});
