var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The index page' });
});

router.get('/form', function(req, res, next) {
    res.render('form', { title: 'Brendan', msg: "hello there" });
}).post('/form', function(req, res, next) {
    res.render('form', { title: req.body.email, msg: "hello there" });
}).post('/form', function(req, res, next) {
    res.render('form', { title: req.body.name, msg: "hello there" });
}).post('/form', function(req, res, next) {
    res.render('form', { title: req.body.comment, msg: "hello there" });
});

router.get('/results', function(req, res, next) {
    res.render('results', { title: 'Results Page' });
}).get('/form', function(req, res, next) {
    res.render('form', { title: req.body.name });
}).get('/form', function(req, res, next) {
    res.render('form', { title: req.body.email });
}).get('/form', function(req, res, next) {
    res.render('form', { title: req.body.comment });
});


router.get('/about', function(req, res, next) {
    res.render('about', { title: 'The about page' });
});

module.exports = router;
