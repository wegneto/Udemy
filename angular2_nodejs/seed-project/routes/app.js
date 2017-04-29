var express = require('express');
var router = express.Router();
var User = require('../model/User');

router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName:  'Wilson',
        lastName: 'Guimaraes',
        password: '123456',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
