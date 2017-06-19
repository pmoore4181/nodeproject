var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello World!");
});

app.get('/routing', function(req, res){
    res.send("Howdy Routing World!");
});

var port = process.env.PORT;
app.listen(port, function(err){
    console.log('the server is running on port: ' + port);
});