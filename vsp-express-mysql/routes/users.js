var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', (req, res, next) => {
    console.log(req.body);
    res.json(
	{'success': true}
    );
})

router.post('/info/:id', (req, res, next) => {
    console.log(req.params);
    console.log(req.body);
    res.json(
	{'success': true}
    );
})

router.post('/address/:id', (req, res, next) => {
    console.log(req.params);
    console.log(req.body);
    res.json(
	{'success': true}
    );
})


module.exports = router;

