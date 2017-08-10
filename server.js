var express = require('express');
var path = require('path');

var app = express();

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, console.log(`Port ${port} is a beautiful port`));

