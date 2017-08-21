var mongoose = require('mongoose');
var artSchema = require('../schemas/artSchema');
var artModel = mongoose.model('artModel',artSchema);
module.exports = artModel;

