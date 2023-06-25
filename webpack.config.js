var path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/Tdrc.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), 
    libraryTarget: "umd",
    library: "Tdrc"
  }, 
  watch:true
};