const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require('webpack').container
const deps = require("../package.json").dependencies;

const {NODE_ENV} = process.env

const plugins=[
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns:[
            '**/*', //all files in dist/ folder
            path.join(process.cwd(), 'build/**/*') //clean build/ folder as well
        ]
    }),
    new HtmlWebpackPlugin({
        title:'Restaurants',
        filename: 'index.html',
        template:'./src/index.html',
    }),
    new ModuleFederationPlugin({
        name: "RApp",
        filename: "remoteEntry.js",
        
        exposes: {
            "./routes": "./src/routes/routes",
        },
        shared: {
            ...deps,
            react: {
            eager: true,
            singleton: true,
            requiredVersion: deps.react,
            },
            "react-dom": {
            eager: true,
            singleton: true,
            requiredVersion: deps["react-dom"],
            },
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