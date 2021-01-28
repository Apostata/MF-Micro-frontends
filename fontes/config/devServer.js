const path = require('path');

module.exports ={
    contentBase: path.join(__dirname, "../dist"),
    index:'index.html',
    port:3001,
    hot:true,
    historyApiFallback:true
    // writeToDisk: true 
}