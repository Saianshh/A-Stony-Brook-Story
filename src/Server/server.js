var express = require('express');
var http = require('http'); 
var app = express();
var server = http.createServer(app);
app.use(express.static('public'));

server.listen(7000, function () {
  console.log('Server listening on port 3000');
});

