var express = require('express');
var path = require('path');

var app = express();

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


module.exports = app;
