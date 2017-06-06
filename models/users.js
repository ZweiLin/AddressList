/**
 * Created by WIGER on 2017/5/23.
 */

var db=require("../db");

//登录用户类
function User() {
    this.username;
    this.pwd;
}

module.exports=User;

User.currentUser=new User();

//新用户注册
User.register=function (username,pwd,callback) {
    var sql="INSERT INTO users VALUES('"+username+"','"+pwd+"')";
    db.exec(sql,'',function(err,rows){
        if(err){
            return callback(err);
        }
        callback(err,rows);
    });
};

//用户登录
User.login=function (username,pwd,callback) {
    var sql="SELECT username FROM users WHERE username='"+username+"' AND password='"+pwd+"'";
    db.exec(sql,'',function(err,rows){
        if(err){
            return callback(err);
        }
        callback(err,rows);
    });
};
