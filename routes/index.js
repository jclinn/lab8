var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var grid = {'showAlternative': false};
	projects.grid=false;
  	res.render('index', projects);
};

exports.viewGrid = function(req, res){
	var grid = {'showAlternative': true};
	projects.grid=true;
	res.render('index', projects);
};