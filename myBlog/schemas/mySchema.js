var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mySchema = new schema({
    tit:String,
    author:String,
    tags:String,
    content:String,
    time:String
})
module.exports=mySchema;
