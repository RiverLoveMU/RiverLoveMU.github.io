var mongoose = require('mongoose');
var schema = mongoose.Schema;
var artSchema=new schema({
		    tit:String,
		    author:String,
		    time:String,
		    detail:String
		});
module.exports=artSchema;