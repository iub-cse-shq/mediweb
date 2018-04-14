var mongoose = require('mongoose');
var Doctor = require('./../models/Doctor.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Doctor.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("list called");

      res.status(200).send(data);
    }
  });
};

module.exports.createView = function(req, res) {
  res.render('./../public/views/doctors/addDoc.ejs', {
  		user: req.user || null,
  		request: req
  });

}

module.exports.create = function(req, res) {
  var doctor = new Doctor(req.body);
  doctor.user = req.user;
  doctor.save(function(err, data) {
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
  res.json(req.doctor);
};


exports.delete = function(req, res) {
	var doctor = req.doctor;
	doctor.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(doctor);
		}
	});
};


module.exports.update = function(req, res) {
  var doctor = req.doctor;

  	doctor = _.extend(doctor, req.body);

  	doctor.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(doctor);
  		}
  	});
};

exports.find = function(req, res, event) {
  console.log(req.query);
  Doctor.find({area:req.query.area,}).populate("Doctor","name description contact address").exec(function(err, data) {
    if (err) {
      return res.status(400).send({

                  message: errorHandler.getErrorMessage(err)
              });
    } else {
      console.log("api called");

      
      res.status(200).send(data);
    }
    
    
  });
};

module.exports.listview=function(req,res)
{
  Doctor.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

    res.render('./../public/views/doctors/doctor.ejs',{
    user:req.user || null,
    doctors: data
  });
    }
  });
  
};



