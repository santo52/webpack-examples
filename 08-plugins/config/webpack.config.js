const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const envConfig = process.env.NODE_ENV === 'production' ? require('./webpack.config.prod') : require('./webpack.config.dev');

module.exports = merge(commonConfig, envConfig);
