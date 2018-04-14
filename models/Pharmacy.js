var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PharmacySchema = {

  name: {
    type: String,
    trim: true,
    required: 'Name required'
  },

  description: {
    type: String,
    default: '',
    trim: true,

  },
  
    contact: {
    type: Number,
    trim: true,
    required: 'Contact required'
  },
  
    address: {
    type: String,
    trim: true,
    default :'', 
    required: 'Address required'
  },
  
  area: {
    type: String,
    trim: true,
    default :'', 
    required: 'Area required'
  },
  
  
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Pharmacy = mongoose.model('Pharmacy', PharmacySchema, 'pharmacy');
module.exports = Pharmacy;