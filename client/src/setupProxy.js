const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://powerful-savannah-28155.herokuapp.com',
            changeOrigin: true,
        })
    );
};