var express = require('express');
var app = express();
var path = require('path');

// the public api is composed of sub apis
var api = express.Router({caseSensitive: true});
api.use('/echo', require('./api/echo'));

// set up root level routes
app.use('/api', api);
app.use('/', express.static(path.join(__dirname, '../../dist/')));

// the port defaults to 8080 but this may be changed by passing -p 1234 
// as command line arguments
var port = '8080';
process.argv.forEach(function(arg, index, argv){
  if (arg === '-p') {
    port = argv[index + 1];
  }
});

// if this server is run directly, listen to the found port
if (require.main === module) {
  console.log('Listening at http://localhost:' + port);
  app.listen(port);
}

// otherwise export it so it can be tested or modified 
else {
  module.exports = app;
}

