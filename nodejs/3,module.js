//1，引入核心代码块
var http = require('http');
//2，通过http模块下的createServer方法开启一个服务
var server = http.createServer();
//3，如果服务器正常开启了，会被listening事件监听到
server.on('listening',function () {
    console.log('start');
});
//4，用户请求了这个服务，会被request事件监听到
server.on('request',function (req,res) { //req是发送过来的请求，res是发出去的请求
    res.write('welcome');
    res.end();
})
//5，开启服务
server.listen(8080,'172.18.61.150');
app.use('/public',express.static(__dirname+'/public'));