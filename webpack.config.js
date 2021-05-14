const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPWAManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new WebpackPWAManifest({
      name: 'Petgram - An Instagram for pets',
      short_name: 'Petgram 🐶',
      description: `Web App to explore the most awesome pets' pictures, like and save them!`,
      background_color: '#fff',
      theme_color: '#e3ab45',
      icons: [
        {
          src: 'https://cdn.iconscout.com/icon/free/png-512/pets-3-1131152.png',
          sizes: [96, 128, 144, 192, 256, 384, 512],
          purpose: 'any maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
      ],
      mode: 'production',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
  },
  devServer: {
    historyApiFallback: true,
  },
};
