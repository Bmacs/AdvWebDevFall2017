var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Lab 3' });
}).post('/', function(req, res, next) {
    res.render('index', {
        title: 'Request ',
        input: req.body.drop
    });
});


module.exports = router;
