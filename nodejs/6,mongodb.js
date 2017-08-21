var mongoose = require('mongoose');
var express = require('express');
var swig = require('swig');
var bodyParser = require('body-parser');
var artModel=require('./models/artModel');
var app = express();
var msgData = {
    code:1,
    msg:''
}

app.listen(8077);
app.engine('html',swig.renderFile);
app.set('views','./blog');
app.set('view engine','html');
app.use(bodyParser.urlencoded({extended:true}));
swig.setDefaults({cache:false});
app.get('/admin',function (req,res) {
    res.render('public');
})
app.post('/admin/get',function (req,res) {
    new artModel({
        tit:req.body.title,
        author:req.body.author,
        time:req.body.time,
        detail:req.body.content
    }).save().then(function (result) {
        res.send('good job')
    })
})
app.get('/admin/edit',function (req,res){
    var pageIndex = req.query.page;
    var skipPage = (pageIndex-1)*5;
    artModel.count().then(function (allNum) {
        artModel.find().limit(5).skip(skipPage).then(function (data) {
            var pageNumber = Math.ceil(allNum/5);
            var tab = [];
            for (i=1;i<=pageNumber;i++){
                tab.push(i);
            }
            console.log(tab);
            res.render('list',{
                alistData:data,
                listTab: tab
            });
        })
    })
})
app.get('/admin/del',function (req,res) {
    artModel.remove({_id:req.query.id}).then(function (result) {
        msgData.msg = 'delete done';
        msgData.code = 0;
        res.send(msgData);
    })
})
app.post('/admin/search',function (req,res) {
    var sText = req.body.st;
    var reg = new RegExp(sText);
    artModel.find({author:reg}).then(function (result) {
        res.send(result);
    })
})
app.get('/admin/change',function (req,res) {
    var getId = req.query.id;
    artModel.find({_id:getId}).then(function (result) {
        res.render('edit',{
            change:result
        })
    })

})
app.post('/admin/save',function (req,res) {
    var getId = req.body.id;
    console.log(getId);
    artModel.update({_id:getId},{
        author:req.body.author,
        tit:req.body.title,
        time:req.body.time,
        detail:req.body.content
    }).then(function (result) {
        msgData.code=0;
        res.send(msgData)
    })
})
mongoose.connect('mongodb://172.18.61.150:3000',function (err) {
    if (err){
        console.log('fail');
    }else {
        console.log('successs');
    }
})
app.use('/public',express.static(__dirname+'/public'));