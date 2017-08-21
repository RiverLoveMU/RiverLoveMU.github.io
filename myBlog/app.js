var express = require('express');
var swig = require('swig');
var bodyParser = require('body-parser');
var mongooose = require('mongoose');
var myModel = require('./model/myModel');
var app = express();
var msgData = {
    code:1,
    msg:''
}
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
app.use(bodyParser.urlencoded({extended:true}));
swig.setDefaults({cache:false});
app.listen(8081);
app.get('/add',function (req,res) {
    res.render('blog-new');
})
app.post('/add/do',function (req,res) {
    var mytit = req.body.tit;
    console.log(mytit);
    new myModel({
        tit:req.body.tit,
        author:req.body.author,
        tags:req.body.tags,
        content:req.body.content,
        time:req.body.time
    }).save().then(function (result) {
        msgData.code = 0;
        msgData.msg = 'good job';
        res.send(msgData);
    })
})
app.get('/manage',function (req,res) {
    myModel.find().then(function (data) {
        res.render('blog-table',{
            alistData:data
        });
    })
})
app.post('/admin/del',function (req,res) {
    var getId = req.body.id;
    console.log(getId);
    myModel.remove({_id:getId}).then(function () {
        msgData.code=3;
        res.send(msgData);
    })
})
app.get('/edit',function (req,res) {
    myModel.find({_id:req.query.id}).then(function (result) {
        res.render('blog-edit',{
            editItem:result
        });
    })
})
app.use('/public',express.static(__dirname+'/public'));
mongooose.connect('mongodb://172.18.61.150:3000',function (err) {
    if (err){
        console.log('fail');
    }else {
        console.log('successs');
    }
})