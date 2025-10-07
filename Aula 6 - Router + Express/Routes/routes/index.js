var express = require('express');
var router = express.Router();

/* GET home page. */
const myLogger = function (req, res, next) {
  console.log('Request received:', req.method, req.url);
  next(); // Pass control to the next middleware or route handler
};

router.use(myLogger);

router.get('/', function(req, res, next) {
  res.send('<h1>Index page</h1>');
});



module.exports = router;
