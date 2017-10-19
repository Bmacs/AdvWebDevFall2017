var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Brendan', msg: "hello there" });
});

router.get('/form', function(req, res, next) {
    res.render('form', { title: 'Brendan', msg: "hello there" });
}).post('/form', function(req, res, next) {
    res.render('form', { title: req.body.email, msg: "hello there" });
});

module.exports = router;
