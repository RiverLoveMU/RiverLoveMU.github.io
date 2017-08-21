/**
 * Created by Administrator on 2017/7/31 0031.
 */
var express=require('express');
var app=express();
app.listen(8081);

// swig模板引擎的使用步骤：
// 1,引入swig模块
var swig=require('swig');
// 2，配置swig模板引擎
//   （1）定义当前应用，到底用的是哪个模板引擎
app.engine('html',swig.renderFile);
// (2)设置模板的存取目录
// 第一个参数是关键字（固定写法），第二个参数就是你放模板的目录
app.set('views','./views');
// （3）注册模板引擎（发动引擎）
app.set('view engine','html');

// listData的引入与使用
var Data=require('./data/listData');
// console.log(Data);
console.log(__dirname);
app.get('/list',function (req,res) {
    // res.send('this is article List');
    // console.log()
    // res.sendFile(__dirname+'/views/list.html');
    res.render('listData',{
        sendD:Data
    });
});

app.get('/detail',function (req,res) {
    // res.send('this is article Detail');
    // console.log(req.query.id);
    var listId=req.query.id;
    res.render('detailData',{
        detailD:Data[listId-1]
    });
});

app.use('/public',express.static(__dirname+'/public'));
//当前端以 /public目录进行请求的时候，
// 上面这句话会把请求的路径重新规划，规划后的结构http://172.18.61.215:8081/public