const path = require('path');

module.exports = {
    mode: 'development',
    devtool: false,
    entry: './src/index.js',
    // entry: [
    //     './src/index.js',
    //     './src/functions.js',
    // ],
    // entry: {
    //     indexExample: './src/index.js',
    //     functionsExample: './src/functions.js',
    // },
    output: {
        filename: 'all.bundle.js', // custom output name
        // filename: '[name].bundle.js', // code splitting
        // filename: '[name].[hash].bundle.js', // code splitting
        // filename: '[name].[contenthash].bundle.js', // code splitting
        // clean: true, // clean bundle path
        // path: path.resolve(__dirname, 'build'), // change bundle path
    },
    // resolve: {
    //     alias: {
    //         'functions-module': path.resolve(__dirname, 'src/functions.js') // alias
    //     }
    // }
}