// start the node webserver on port 3040
var app = require("./server/server"),
  appServer = app.listen(3040),

  // run casperjs test suite in a child process
  spawn = require('child_process').spawn,
  casperJs = spawn('./node_modules/casperjs/bin/casperjs', ['test', 'test/functional']);

// pipe all data from casperjs to the main output
casperJs.stdout.on('data', function (data) {
  console.log(String(data));
});
casperJs.stderr.on('data', function (data) {
  console.log(String(data));
});

// when casperjs finishes, we should shutdown the node web server
casperJs.on('exit', function(){
  appServer.close();
});