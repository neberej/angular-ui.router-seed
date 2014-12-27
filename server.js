var express = require('express');
var app     = express();

app.use('/', express.static(__dirname + '/'))

app.get('/data',function(req,res){
  res.send({"id": "5454545"});
});

app.get('*',function(req,res){
  res.sendfile('src/index.html');
});



app.listen(9000, function() {
    console.log("Listening on 9000");
});