const path = require('path');

module.exports = {
  // ... other configuration options
  module: {
    rules: [
      {
        test: /\.js$/, // Match all JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'] // Explicitly set preset for clarity
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Allow importing JSX files without extensions
  }
};