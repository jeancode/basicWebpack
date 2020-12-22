const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin =  require("mini-css-extract-plugin");
const webpack = require('webpack')



//recuerda instalar style-loader css-loader npm
module.exports = {

    entry:'./src/index.js',

    output:{
        path:__dirname+'/build',
        filename:'output.js'    
    },
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]

}