var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '通讯录系统' });
});
router.get('/home', function(req, res, next) {
    res.render('home', { title: '通讯录主页' });
});
router.get('/login', function(req, res, next) {
    res.render('login', { title: '登录页' });
});
router.get('/register', function(req, res, next) {
    res.render('register', { title: '注册页' });
});

module.exports = router;
