var express = require('express');
var Contact= require('../models/contacts');
var Users= require('../models/users');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: '通讯录系统',
      currentUser:req.session.user||'未登录',
      location:'/home',
      message:''
  });
});
//获取主页
router.get('/home', function(req, res) {
    // var sess=req.session;
    // var loginUser=sess.user;
    if(!req.session.user){
        req.session.error="请先登录";
        //res.redirect("/login");
    }
    else {
        console.log("当前用户："+req.session.user);
    }
    res.render('home', {
        title: '微通讯录系统',
        currentUser: req.session.user||'游客'
    });
});
//获取登录页
router.get('/login', function(req, res, next) {
    res.render('login', { title: '登录页',username:'未登录' });
});
//获取注册页
router.get('/register', function(req, res, next) {
    res.render('register', { title: '注册页' });
});
//获取关于页
router.get('/about',function (req, res, next) {
    res.render('about', {
        title: '关于通讯录系统',
        developer: '14级软件二班-林泽伟-3114006220',
        git: 'https://github.com/ZweiLin/AddressList'
    });
});

//提交登陆请求
router.post('/login',function (req, res, next) {
    var username=req.body['username'];
    var pwd=req.body['password'];

    Users.login(username,pwd,function (err,rows) {
       if(err){
           return next(err);
       }
       console.log(rows);
        if(rows!=''){
           Users.currentUser.username=username;
            Users.currentUser.password=pwd;
            req.session.user=username;
            console.log(req.session.user+"已登录！！");
            res.redirect("/");
        }
        else{
            console.log("登录失败...");
        }
    });
});
//提交登出请求
router.post('/logout',function (req, res, next) {
    console.log(req.session.user+"已登出!!");
    req.session.user=null;
    req.session.error=null;
    res.redirect('/');
});
//提交注册请求
router.post('/register',function (req, res, next) {
    var username=req.body['username'];
    var pwd=req.body['password'];

    Users.register(username,pwd,function (err, result) {
        if(err){
            return next(err);
        }
        if(result){
            console.log("新用户"+username+"注册成功！！");
            res.redirect("/login");
            //res.render('login', { title: '登录页',username:'未登录' });
        }else {
            console.log("注册失败");
            res.render('register',{ message:"注册失败"});
        }
    })
});

module.exports = router;
