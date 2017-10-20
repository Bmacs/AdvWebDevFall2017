var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The index page' });
});

router.get('/form', function(req, res, next) {
    res.render('form', { title: 'Brendan', msg: "hello there" });
}).post('/form', function(req, res, next) {
        res.render('results', {
            title: 'Results',
            name: req.body.name,
            email: req.body.email,
            comments: req.body.comments
        });
});

router.get('/results', function(req, res, next) {
    res.render('results', {title: 'Results Page'});
});



router.get('/about', function(req, res, next) {
    res.render('about', { title: 'The about page' });
});

module.exports = router;
