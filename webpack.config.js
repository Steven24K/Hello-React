const path = require('path');
const webpack = require("webpack");

//TODO: Setup express server https://webpack.js.org/guides/development/

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    filename: 'main.js',
    publicPath: "/dist/",
    path: path.resolve(__dirname, 'dist')
  },

  resolve: { 
    extensions: ["*", ".js", ".jsx"] 
  },

  module: {
    rules: [

      { 
        test: /\.js|.jsx$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }

    ]
  },
  
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    //TODO: enable the us of local IP
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};