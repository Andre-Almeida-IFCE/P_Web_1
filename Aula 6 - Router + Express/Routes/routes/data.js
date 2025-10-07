var express = require('express');
var router = express.Router();

/* GET home page. */
const myLogger = function (req, res, next) {
  console.log('Request received:', req.method, req.url);
  next(); // Pass control to the next middleware or route handler
};

router.use(myLogger);

router.get('/', function(req, res, next) {
  res.send('<h1>Data page</h1>');
});

router.post('/', (req, res) => {
  const data = {
    time: new Date(),
    message: baseMessage = "Current server time"
  };

  res.json(data);
});


module.exports = router;
