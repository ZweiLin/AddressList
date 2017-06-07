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
    });
});
router.post('/findContactsByTelephone',function (req, res, next) {
    var username=req.session.user;
    var telephone=req.body['filter'];

    Contact.findContactsByTelephone(username,telephone,function (err,result) {
        if(err){
            return next(err);
        }
        console.log(username);
        console.log(telephone);
        console.log(result);
        res.render('result',{
            title:'result',
            result:result
        });
    });
});
router.post('/findContactsByMobile',function (req, res, next) {
    var username=req.session.user;
    var mobile=req.body['filter'];

    Contact.findContactsByMobile(username,mobile,function (err,result) {
        if(err){
            return next(err);
        }
        console.log(username);
        console.log(mobile);
        console.log(result);
        res.render('result',{
            title:'result',
            result:result
        });
    });
});
router.post('/findContactsByCompany',function (req, res, next) {
    var username=req.session.user;
    var company=req.body['filter'];

    Contact.findContactsByCompany(username,company,function (err,result) {
        if(err){
            return next(err);
        }
        console.log(username);
        console.log(company);
        console.log(result);
        res.render('result',{
            title:'result',
            result:result
        });
    });
});
router.post('/findContactsByPost',function (req, res, next) {
    var username=req.session.user;
    var post=req.body['filter'];

    Contact.findContactsByPost(username,post,function (err,result) {
        if(err){
            return next(err);
        }
        console.log(username);
        console.log(post);
        console.log(result);
        res.render('result',{
            title:'result',
            result:result
        });
    });
});

router.post('/addContact',function (req, res,next) {
    var username=req.session.user;
    var name=req.body['name'];
    var telephone=req.body['telephone'];
    var mobile=req.body['mobile'];
    var company=req.body['company'];
    var post=req.body['post'];
    console.log(username+"试图添加联系人：("+name+","+telephone+","+mobile+","+company+","+post+")");

    Contact.addContact(username,name,telephone,mobile,company,post,function (err,result) {
        if(err){
            return next(err);
        }
        console.log(username+"成功添加联系人：("+name+","+telephone+","+mobile+","+company+","+post+")");
        res.send("添加成功！！");
    });
});

router.post('/updateContact',function (req, res,next) {
    var username=req.session.user;
    var name=req.body['name'];
    var newName=req.body['newName'];
    var telephone=req.body['telephone'];
    var mobile=req.body['mobile'];
    var company=req.body['company'];
    var post=req.body['post'];
    console.log(username+"试图修改联系人"+name+"");

    Contact.updateContact(username,name,newName,telephone,mobile,company,post,function (err,result) {
        if(err){
            return next(err);
        }
        console.log(username+"成功修改联系人"+name+"为：("+newName+","+telephone+","+mobile+","+company+","+post+")");
        res.send("添加成功！！");
    });
});

router.post('/deleteContact',function (req, res, next) {
    var username=req.session.user;
    var name=req.body['name'];
    console.log(name);
    Contact.deleteContact(username,name,function (err,result) {
        if(err){
            return next(err);
        }
        console.log(username);
        console.log(result);
        res.send('删除成功');
    });
});

module.exports=router;