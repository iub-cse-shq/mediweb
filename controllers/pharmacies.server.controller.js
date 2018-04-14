var mongoose = require('mongoose');
var Pharmacy = require('./../models/Pharmacy.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Pharmacy.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("ph list");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var pharmacy = new Pharmacy(req.body);
  pharmacy.user = req.user;
  pharmacy.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.pharmacy);
};


exports.delete = function(req, res) {
	var pharmacy = req.pharmacy;
	pharmacy.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(pharmacy);
		}
	});
};


module.exports.update = function(req, res) {
  var pharmacy = req.pharmacy;

  	pharmacy = _.extend(pharmacy, req.body);

  	pharmacy.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(pharmacy);
  		}
  	});
};

module.exports.find = function(req, res) {
	console.log(req.query);
  Pharmacy.find({area:req.query.area,}).populate("Pharmacy","name description contact address area").exec(function(err, data) {
    if (err) {
      return res.status(400).send({

                  message: errorHandler.getErrorMessage(err)
              });
    } else {
      console.log("Area func");

      
      res.status(200).send(data);
    }
    
    
  });
};

module.exports.listview=function(req,res)
{
  Pharmacy.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

    res.render('./../public/views/pharmacy/pharmacy.ejs',{
    user:req.user || null,
    pharmacies: data
  });
    }
  });
  
};