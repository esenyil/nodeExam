const path = require('path'); //comes with webpack

//this object is a option object of how you want webpack to work
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'), //__dirname is our absolute url - the root folder
        filename: 'bundle.js'
    }
}