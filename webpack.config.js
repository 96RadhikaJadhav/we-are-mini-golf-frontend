module.exports = {
  module: {
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          // you can also read from a file, e.g. `variables.scss`
          // use `prependData` here if sass-loader version = 8, or
          // `data` if sass-loader version < 8
        }
      }
    ]
  }
};
