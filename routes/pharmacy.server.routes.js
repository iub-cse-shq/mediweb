module.exports = function(app){

 var pharmacies = require('./../controllers/pharmacies.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/pharmacies')
	.get(pharmacies.list)
	.post(users.requiresLogin, pharmacies.create);
	
	app.route('/api/pharmacies/find')
	.get(pharmacies.find)
	.post(users.requiresLogin, pharmacies.create);

  app.route('/api/pharmacies/:pharmacyId')
	.get(pharmacies.read)
  .delete(users.requiresLogin, pharmacies.delete);

	app.route('/api/pharmacies/edit/:pharmacyId')
	.get(pharmacies.read)
	.put(users.requiresLogin, pharmacies.update);

/*
app.param('pharmacyId', pharmacies.pharmacyByID);
*/
app.route('/pharmacies/all').get(pharmacies.listview);
}
