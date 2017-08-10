var port = process.env.PORT || 3000;

require('http')
  .createServer(require('./app'))
  .listen(port, () => console.log(`listening on port ${port}`));
