var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users.js');
var ctrlAuth = require('../controllers/authentification.js');

router.get('/users', function(req, res, next) {
  ctrlUsers.usersReadAll(req,res);
});

router.put('/users/:userid', function(req, res, next) {
  ctrlUsers.usersUpdateOne(req,res);
});

router.delete('/users/:userid', function(req, res, next) {
  ctrlUsers.usersDeleteOne(req, res);
});

router.post('/register', function(req, res, next) {
  ctrlAuth.register(req, res);
});

router.post('/login', function(req, res, next) {
  ctrlAuth.login(req, res);
});

router.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load our public/index.html file
});

module.exports = router;