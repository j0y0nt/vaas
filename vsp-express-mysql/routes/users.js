var express = require('express');
var router = express.Router();
var db = require('../service/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth', (req, res, next) => {
    try {
	db.isAuthorized(req.body, res);
    } catch( err) {
	console.log(err);
    }
})

router.post('/register', (req, res, next) => {
    try {
	db.registerUser(req.body, res);
    } catch( err) {
	console.log(err);
    }
})

router.get('/info/:userId', (req, res, next) => {
    try {
	db.getUserInfo(Number(req.params.userId), res);
    } catch(err) {
	console.log('Error while saving user info: ' + err);
    }
})

router.put('/info/:userId', (req, res, next) => {
    try {
	db.updateUserInfo(req.body, res);
	db.getUserInfo(Number(req.params.userId), res);
    } catch(err) {
	console.log('Error while saving user info: ' + err);
    }
})


router.post('/info/', (req, res, next) => {
    try {
	db.saveUserInfo(req.body, res);
    } catch(err) {
	console.log('Error while saving user info: ' + err);
    }
})

router.post('/address/:id', (req, res, next) => {
    console.log(req.params);
    console.log(req.body);
    res.json(
	{'success': true}
    );
})


module.exports = router;

