/**
 * Created by WIGER on 2017/5/23.
 */
var db=require('../db');

// 联系人 Contact类
function Contact() {
    this.name;      //姓名
    this.telephone; //固定电话
    this.mobile;    //手机
    this.company;   //公司
    this.post;      //职务
}

module.exports=Contact;

//查找所有联系人
Contact.findAllContacts=function (username,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE user= '"+username+"';";
    db.exec(sql,'',function(err,rows){
        if(err){
            return callback(err);
        }
        callback(err,rows);
    });
};

//添加联系人
Contact.addContact=function (user,name,telephone,mobile,company,post,callback) {
    var sql="INSERT INTO contacts VALUES('"+user+"','"+name+"','"+telephone+"','"+mobile+"','"+company+"','"+post+")";
    db.exec(sql,'',function(err,rows){
        if(err){
            return callback(err);
        }
        callback(err,rows);
    });
};

//根据姓名查找联系人
Contact.findContactsByName=function (username,name,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE name LIKE '"+name+"%' and user='"+username+"';";
    db.exec(sql,'',function(err,rows){
        if(err){
            return callback(err);
        }
        callback(err,rows);
    });
};

//根据固定电话查找联系人
Contact.findContactsByTelephone=function (username,telephone,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE telephone LIKE '"+telephone+"' and user='"+username+"';";
    db.exec(sql,'',function(err,rows){
        if(err){
            return callback(err);
        }
        callback(err,rows);
    });
};

//根据手机号查找联系人
Contact.findContactsByMobile=function (username,mobile,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE mobile LIKE '"+mobile+"' and user='"+username+"';";;
    db.exec(sql,'',function(err,rows){
        if(err){
            return callback(err);
        }
        callback(err,rows);
    });
};

//根据公司查找联系人
Contact.findContactsByCompany=function (username,company,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE company LIKE '"+company+"' and user='"+username+"';";
    db.exec(sql,'',function(err,rows){
        if(err){
            return callback(err);
        }
        callback(err,rows);
    });
};

//根据职务查找联系人
Contact.findContactsByPost=function (username,post,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE post LIKE '"+post+"' and user='"+username+"';";
    db.exec(sql,'',function(err,rows){
        if(err){
            return callback(err);
        }
        callback(err,rows);
    });
};
