const path = require('path')
//entry point-->output point
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread"]
          }
        }
      }, {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback:true,
    contentBase: path.join(__dirname, 'public')
  }
}