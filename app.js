const express = require('express');
const app = express();

const PostRoutes = require('./api/routes/product');

app.use('/product',PostRoutes);

module.exports = app;