module.exports = function(app){

 var others = require('./../controllers/others.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

app.route('/others/about').get(others.about);
app.route('/others/faq').get(others.faq);


}
