var Employee = require('./employee.model');
var debug = require('debug')('demo:employee');

function sendJSONresponse(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.readAllEmployees = function(req, res) {

	debug('Getting all reviews');
	Employee
		.find()
		.exec()
		.then(function(results){
			sendJSONresponse(res, 200, results);
		})
		.catch(function(err){
			sendJSONresponse(res, 404, err);
		});

};

module.exports.readOneEmployee = function(req, res) {

	if (req.params && req.params.id) {
		debug('Getting single review with id =', req.params.id );

		Employee
			.findById(req.params.id)
			.exec()
			.then(function(results){
				sendJSONresponse(res, 200, results);
			}).catch(function(err){
			sendJSONresponse(res, 404, {
				"message": "id not found"
			});
		});

	} else {
		sendJSONresponse(res, 404, {
			"message": "id not found"
		});
	}
};

/*   POST a new review
 *   /api/v1/reviews
 */
module.exports.createEmployee = function(req, res) {

	debug('Creating a review with data ', req.body);

	Employee.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		department: req.body.department,
		startDate: req.body.startDate,
		jobTitle: req.body.jobTitle,
		salary: req.body.salary
	})
		.then(function(dataSaved){
			debug(dataSaved);
			sendJSONresponse(res, 201, dataSaved);
		})
		.catch(function(err){
			debug(err);
			sendJSONresponse(res, 400, err);
		});

};

module.exports.updateEmployee = function(req, res) {

	if ( !req.params.id ) {
		sendJSONresponse(res, 404, {
			"message": "Not found, id is required"
		});
		return;
	}

	Employee
		.findById(req.params.id)
		.exec()
		.then(function(reviewData) {
			reviewData.firstName = req.body.firstName;
			reviewData.lastName = req.body.lastName;
			reviewData.department = req.body.department;
			reviewData.startDate = req.body.startDate;
			reviewData.jobTitle = req.body.jobTitle;
			reviewData.salary = req.body.salary;

			return reviewData.save();
		})
		.then(function(data){
			sendJSONresponse(res, 200, data);
		})
		.catch(function(err){
			sendJSONresponse(res, 400, err);
		});

};

module.exports.deleteEmployee = function(req, res) {
	if ( !req.params.id ) {
		sendJSONresponse(res, 404, {
			"message": "Not found, id is required"
		});
		return;
	}

	Employee
		.findByIdAndRemove(req.params.id)
		.exec()
		.then(function(data){
			debug("Review id " + req.params.id + " deleted");
			debug(data);
			sendJSONresponse(res, 204, null);
		})
		.catch(function(err){
			sendJSONresponse(res, 404, err);
		});

};