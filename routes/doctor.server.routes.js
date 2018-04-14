module.exports = function(app){

 var doctors = require('./../controllers/doctors.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/doctors')
	.get(doctors.list)
	.post(users.requiresLogin, doctors.create);
	
	app.route('/api/doctors/find')
	.get(doctors.find)
	.post(users.requiresLogin, doctors.create);

  app.route('/api/doctors/:doctorId')
	.get(doctors.read)
  .delete(users.requiresLogin, doctors.delete);

	app.route('/api/doctors/edit/:doctorId')
	.get(doctors.read)
	.put(users.requiresLogin, doctors.update);

/*
app.param('doctorId', doctors.doctorByID);
*/
app.route('/doctors/all').get(doctors.listview);

app.route('/doctors/add').get(doctors.createView);


}
