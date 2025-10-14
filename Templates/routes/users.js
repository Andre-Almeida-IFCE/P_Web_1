var express = require('express');
var router = express.Router();

/* GET users listing. */
const myLogger = function (req, res, next) {
  console.log('Request received:', req.method, req.url);
  next(); // Pass control to the next middleware or route handler
};

router.use(myLogger);

router.get('/', function(req, res, next) {
  res.redirect('/users/signup');
});

router.get('/signin', function(req, res, next) {
 res.render('users.ejs');;
});

router.get('/signup', function(req, res, next) {
 res.render('users.ejs');
});

router.get('/:userid', function(req, res, next) {
  var userid = req.params.userid;
  res.send(`<h1> bem vindo ${userid} !</h1>`);
});

module.exports = router;
