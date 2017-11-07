var express = require('express');
var router = express.Router();
var ctrlHome = require('./employee.controller');


router.get('/employees', ctrlHome.readAllEmployees);
router.get('/employees/:id', ctrlHome.readOneEmployee);
router.post('/employees', ctrlHome.createEmployee); // ? makes the route optional
router.put('/employees/:id', ctrlHome.updateEmployee);
router.delete('/employees/:id', ctrlHome.deleteEmployee);

module.exports = router;
