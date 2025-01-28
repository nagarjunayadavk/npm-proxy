const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
app.use('*', createProxyMiddleware({target: 'traget_url', changeOrigin: true}));

app.listen(5001, function (req, res) {
    console.log("req", req);
    console.log("res", res);
    console.log("Server is running at port 5001");
});
