/**

See https://github.com/rackt/react-router/issues/57#issuecomment-51303155
for possible server side rendering strategy.

*/

require('node-jsx').install({harmony: true});

var fs = require("fs");
var React = require("react");
var App = require("../../client/app/app");
var router = require('express').Router({caseSensitive: true, strict: true});

//only read on startup
var template = fs.readFileSync(__dirname + "/../../client/app.html", {encoding:'utf8'});

function renderToHtml(route, callback){
  //render the app
  var body = React.renderComponentToString( App() );

  //merge body into template
  var html = template.replace(/<\/body>/, body + "</body>");
  
  process.nextTick(function(){
    callback(null, html);
  });
}

//wildcard route to pass to react client app
router.get('*', function(req, res) {
  renderToHtml(req.url, function(err, html){
    res.send(html);
  });
});

module.exports = router;