const path = require('path');

module.exports ={
    contentBase: path.resolve(__dirname, './dist'),
    index:'index.html',
    port:3000,
    hot:true,
    historyApiFallback:true
    // writeToDisk: true 
}