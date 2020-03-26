const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SriPlugin = require('webpack-subresource-integrity');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/**
 * @typedef {Object} Env
 * @property {Boolean} development Whether we are running in a dev environment.
 * @property {Boolean} production Whether we are running in a prod environment.
 * @property {Boolean} analyze Whether to perform bundle size analysis.
 */

/** @param {Env} env Current environment.
 *  @returns {webpack.Configuration} */
exports.default = (env) => ({
  context: __dirname,
  entry: ['./src/index.js'],
  devtool: env.development ? 'eval-source-map' : false,
  devServer: {
    port: 1234,
    hot: true
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
            }
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              hmr: env.development
            }
          }, {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(mp3|mp4|ogg|opus|wav|png)$/i,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.html'
    }),
    new ForkTsCheckerWebpackPlugin({
        workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE
    }),
    new MiniCssExtractPlugin(),
    ...(env.production
      ? [
        new CompressionPlugin({
          threshold: 8192
        }),
        new SriPlugin({
          hashFuncNames: ['sha384', 'sha512']
        })
      ]
      : []),
    ...(env.analyze
      ? [
        new BundleAnalyzerPlugin()
      ]
      : []),
    ...(env.development
      ? [
        new webpack.HotModuleReplacementPlugin()
      ]
      : [])
  ],
  resolve: {
    extensions: ['.js', '.ts'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  }
});
