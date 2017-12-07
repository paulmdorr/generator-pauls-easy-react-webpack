const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, './public/build')
const APP_DIR = path.resolve(__dirname, './src/')

const pathsToClean = [
  'build/*.*'
]

const cleanOptions = {
  root:     BUILD_DIR,
  verbose:  true,
  dry:      false
}

const config = {
  entry: APP_DIR + '/scenes/App/App.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '/public/build',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel-loader'
      },
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  ]
}

module.exports = config
