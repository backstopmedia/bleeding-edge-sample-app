//Server side code to start here
//expressjs / loopback / etc

require('node-jsx').install({harmony: true});
var fs = require("fs");
var express = require('express');
var React = require("react");
var app = express();

var port = process.env.PORT || 8080;

var router = express.Router();

//echo api route
app.use('/api/echo', require('./api/echo'));

//render the app server side
var clientApp = require("../client/app/app");
router.get('/', function(req, res) {
  //fetch the template
  var template = fs.readFileSync("./client/app.html", {encoding:'utf8'});
  //render the app
  var body = React.renderComponentToString(clientApp());
  //merge body into template
  res.send(template.replace(/<\/body>/, body + "</body>")); 
});

app.use('/', router);
app.use(express.static("./public"));

app.listen(port);
console.log('App started goto - http://0.0.0.0:' + port);