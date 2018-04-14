var mongoose = require('mongoose');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');




module.exports.about=function(req,res)
{
  res.render('./../public/views/others/about.ejs',{
      user: req.user || null,
  		request: req
  });
  
};

module.exports.faq=function(req,res)
{
  res.render('./../public/views/others/faq.ejs',{
      user: req.user || null,
  		request: req
  });
  
};

