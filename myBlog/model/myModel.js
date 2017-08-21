var mongoose = require('mongoose');
var mySchema = require('../schemas/mySchema');
var myModel = mongoose.model('myModel',mySchema);
module.exports = myModel;