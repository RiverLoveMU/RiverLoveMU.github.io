var express = require('express');
var app = express();
app.listen(8080);
app.get('/list',function (req,res) {
    res.send('welcome');
})
app.get('/detail',function (req,res) {
    res.sendFile(__dirname + '/blog/bootstrap.html');
})
app.use('/public',express.static(__dirname+'/public'));