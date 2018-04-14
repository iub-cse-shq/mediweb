// initial dummy data for articles and user

var mongoose = require('mongoose');
var Home = require("./models/Home.js")
var Doctor = require('./models/Doctor.js');
var User = require('./models/User.js');
var Pharmacy = require('./models/Pharmacy.js');

mongoose.connection.dropDatabase(error => {
  console.log('Database not dropped');
  //process.exit(0);
});

var user = {
    email: 'abc@def.com',
    password: '12345678',
    firstName: 'TD',
    lastName: 'BD',
    username: 'TD-BD',
    provider: 'local'
};
user = new User(user);
user.save();

var initial = [{
    name: "Khandaker Ezazul Haque",
    description: "Internal Medicine",
    contact: "911",
    address: "To be updated",
    area: "Mouchak",
    user:user
  },

  {
    name: "Tanvir Kabir",
    description: "Dentist ",
    contact: "911",
    address: "To be updated",
    area: "Bashundhara",
    user:user

  },
  
  {
    name: "Rashid Ahmed",
    description: "General Medicine ",
    contact: "911",
    address: "To be updated",
    area: "Bashundhara",
    user:user

  },
  
  {
    name: "Arif Ahmed",
    description: "Dermitologist ",
    contact: "911",
    address: "To be updated",
    area: "Motijheel",
    user:user

  },

  {
    name: "Ashfaq Aziz",
    description: "Kobiraji ",
    contact: "911",
    address: "To be updated",
    area: "Shantinagar",
    user:user

  }
]

var secondary = [{
    name: "New View Pharma",
    description: "Local Medicine Reseller",
    contact: "01756475684",
    address: "Bla Bla Bla",
    area: "Shantinagar",
    user:user
  },

  {
    name: "Lex Pharmacy",
    description: "Proving all type of medicines",
    contact: "01755824467",
    address: "I don't know",
    area: "Malibagh",
    user:user

  },
  
    {
    name: "Lex Pharmacy",
    description: "Proving all type of medicines",
    contact: "01755824467",
    address: "To be decided",
    area: "Malibagh",
    user:user

  },
  
    {
    name: "North End Pharmacy",
    description: "Cheap whole medicine reseller",
    contact: "01757464460",
    address: "Uttara",
    area: "Uttara",
    user:user

  },
  
   {
    name: "Kakrail Medicines",
    description: "All type of local and foreign medicine available",
    contact: "0794950985",
    address: "Kakrail",
    area: "Kakrail",
    user:user

  }
]


initial.forEach(function(Home) {
    var first = new Doctor(Home);
    first.save(function(err,data){
      if(err){
        throw err;
      }
      else{
      }
    });
});

secondary.forEach(function(Home) {
    var first = new Pharmacy(Home);
    first.save(function(err,data){
      if(err){
        throw err;
      }
      else{
      }
    });
});
