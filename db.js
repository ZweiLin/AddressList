/**
 * Created by WIGER on 2017/6/3.
 */
var mysql=require('mysql');

var option={
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'addressList'
}

var DB={};

module.exports=DB;

//sql语句执行
DB.exec=function (sql, values, after) {
    var connection = mysql.createConnection(option);
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
        }
        console.log('connected as id ' + connection.threadId);

        connection.query(sql || '', values || [], function(err, rows) {
            after(err, rows);
        });
        //关闭数据库连接
        connection.end();
    });
    connection.on('error', function(err) {
        if (err.errno != 'ECONNRESET') {
            after("err01", false);
            throw err;
        } else {
            after("err02", false);
        }
    });
};

//事务连接
DB.getConnection=function(callback){
    var connection=mysql.createConnection(option);
    connection.connect(function(err){
        if(err){
            console.error('error connecting: ' + err.stack);
        }
        callback(err,connection);
    });
}