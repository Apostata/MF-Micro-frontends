const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require('webpack').container

// const modules = ['Fonts', 'Cores']
// const remotes = Object.keys(FederatedModules).reduce((acu, mod)=>{
//     const modulo = mod.replace(/\_/, '')
//     return {...acu, [modulo]: `${modulo}@${FederatedModules[mod]}/remoteEntry.js`}
// },{})
// console.log(remotes)

const {NODE_ENV} = process.env
const dependencies = require("../package.json").dependencies;


const plugins=[
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns:[
            '**/*', //all files in dist/ folder
            path.join(process.cwd(), 'build/**/*') //clean build/ folder as well
        ]
    }),
    new HtmlWebpackPlugin({
        title:'MF-Container',
        filename: 'index.html',
        template:'./src/index.html',
    }),
    new ModuleFederationPlugin({
        name: "container",
        remotes: {
            Fonts: "Fonts@http://localhost:3001/remoteEntry.js",
            Colors: "Colors@http://localhost:3002/remoteEntry.js",
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