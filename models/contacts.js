/**
 * Created by WIGER on 2017/5/23.
 */

// 联系人 Contact类
function Contact() {
    this.name;      //姓名
    this.telephone; //固定电话
    this.mobile;    //手机
    this.company;   //公司
    this.post;      //职务
}

module.exports=Contact;

Contact.prototype.save=function () {
    var sql="";
}

//根据姓名查找联系人
Contact.findContactsByName=function (name,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE name LIKE '%"+name+"'%;";

};

//根据固定电话查找联系人
Contact.findContactsByTelephone=function (telephone,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE telephone LIKE '%"+telephone+"'%;";
};

//根据手机号查找联系人
Contact.findContactsByMobile=function (mobile,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE mobile LIKE '%"+mobile+"'%;";
};

//根据公司查找联系人
Contact.findContactsByCompany=function (company,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE company LIKE '%"+company+"'%;";
};

//根据职务查找联系人
Contact.findContactsByPost=function (post,callback) {
    var sql="SELECT name,telephone,mobile,company,post FROM contacts WHERE post LIKE '%"+post+"'%;";
};
