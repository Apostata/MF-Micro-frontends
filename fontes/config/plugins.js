const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require('webpack').container
const dependencies = require("../package.json").dependencies;
const {NODE_ENV} = process.env

const plugins=[
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns:[
            '**/*', //all files in dist/ folder
            path.join(process.cwd(), 'build/**/*') //clean build/ folder as well
        ]
    }),
    new HtmlWebpackPlugin({
        title:'Fonts',
        filename: 'index.html',
        template:'./src/index.html',
    }),
    new ModuleFederationPlugin({
        name: "Fonts",
        filename: "remoteEntry.js",
        
        exposes: {
            "./routes": "./src/routes/routes",
            "./reducers":"./src/store/reducers"
        },
        shared: {
            ...dependencies,
            "react-router-dom": {
                requiredVersion: dependencies['react-router-dom'],
                singleton: true,
            },
            "react-dom": {
                requiredVersion: dependencies['react-dom'],
                singleton: true,
            },
            react: {
                requiredVersion: dependencies['react'],
                singleton: true,
            },
        }
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