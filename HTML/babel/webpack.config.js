const path = require('path');
module.exports = {
    entry: 'entry: ./src/app.js',
    mode: 'development', // development or production
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    }
};