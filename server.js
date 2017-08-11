var express = require('express');
var app = express();
require('babel-polyfill')


app.use(express.static(__dirname ));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
