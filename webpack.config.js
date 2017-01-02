module.exports = {
  entry: './src/react-check-prop-types.js',

  output: {
    filename: 'index.js',
    library: 'reactCheckPropTypes',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
