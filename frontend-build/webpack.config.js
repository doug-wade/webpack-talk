const path = require('path');
const fe = require('@indeed/frontend-build');

const computed = fe({
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
});

console.log(computed);
