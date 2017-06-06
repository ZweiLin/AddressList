/**
 * Created by WIGER on 2017/6/3.
 */
var express = require('express');
var Contact= require('../models/contacts');

var router = express.Router();

/* GET addressList page. */
router.get('/', function(req, res, next) {
    var location='';
    if(req.session.user){
        location='addressList';
    }else {
        location='index';
    }
    res.render(location, {
        title: '微通讯录',
        currentUser:req.session.user||'未登录',
        location:'login',
        message: '游客，请先进行登录操作',
    });
});
router.get('/findAllContacts',function (req, res, next) {
    var username=req.session.user;
    // res.render('result',{
    //     title:'result',
    //     result:'OK'
    // });
    Contact.findAllContacts(username,function (err,result) {
        if(err){
            return next(err);
        }
       console.log(result);
        res.render('result',{
            title:'result',
            result:result
        });
        // res.redirect.url='/result';
    });
});
router.post('/findContactsByName',function (req, res, next) {
    var username=req.session.user;
    var name=req.body['filter'];
    // res.render('result',{
    //     title:'result',
    //     result:'OK'
    // });
    Contact.findContactsByName(username,name,function (err,result) {
        if(err){
            return next(err);
        }
        console.log(username);
        console.log(name);
        console.log(result);
        res.render('result',{
            title:'result',
            result:result
        });
        // res.redirect.url='/result';
    });
});
router.get('findContactsByTelephone',function (req, res, next) {

});
router.get('findContactsByMobile',function (req, res, next) {

});

module.exports=router;