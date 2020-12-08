const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require('webpack').container

const {NODE_ENV} = process.env
const deps = require("../package.json").dependencies;


const plugins=[
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns:[
            '**/*', //all files in dist/ folder
            path.join(process.cwd(), 'build/**/*') //clean build/ folder as well
        ]
    }),
    new HtmlWebpackPlugin({
        title:'Container',
        filename: 'index.html',
        template:'./src/index.html',
    }),
    new ModuleFederationPlugin({
        name: "container",
        filename: "remoteEntry.js",
        remotes: {
            RApp: "RApp@http://localhost:3001/remoteEntry.js",
            OApp: "OApp@http://localhost:3002/remoteEntry.js",
        },
        
    })
]

if(NODE_ENV === 'production'){
    plugins.push(
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    )    
}

module.exports = plugins