var swig = require('swig');
var express = require('express');
var app = express();
var data = require('./data/listData.js');
app.listen(8078);
app.engine('html',swig.renderFile);
app.set('views','./blog');
app.set('view engine','html');
app.get('/list',function (req,res) {
    res.render('listData',{
        sendD:data
    })
})
app.get('/detail',function (req,res) {
    var listId=req.query.id;
    res.render('detailData',{
        detailD:data[listId-1]
    })
})
app.use('/public',express.static(__dirname+'/public'));