//Server side code to start here
//expressjs

var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

//echo api route
app.use('/api/echo', require('./api/echo'));

//return static assets
app.use(express.static('./public'));

//render the app server side
app.use('/', require('./render/render'));

app.listen(port);

console.log('App started goto - http://0.0.0.0:' + port);
