
/*
 * GET home page.
 */

var mongoose = require('mongoose')
  , Laptop = mongoose.model('Laptop');


exports.index = function(req, res) {
  res.render('index', {title: 'Homepage'});