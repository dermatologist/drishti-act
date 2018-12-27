// vue.config.js
module.exports = {
    // options...
    baseUrl: process.env.environment === 'development' ? '/' : '/act/'
};
