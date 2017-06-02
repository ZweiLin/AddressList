# AddressList
使用nodejs的express框架和mysql实现的通讯录系统

### 数据库结构详解
*数据库使用mysql编写
*数据库中有两个基本表，用户表users和联系人表contacts,建表代码如下

 ####用户表users
    CREATE TABLE users(
    username VARCHAR(15) PRIMARY KEY,
    password VARCHAR(16)
    );

 ####联系人表contacts
 CREATE TABLE contacts(
 id INT(5) PRIMARY KEY AUTO_INCREMENT,
 user VARCHAR(15) ,
 name VARCHAR(15) NOT NULL,
 telephone VARCHAR(15),
 mobile VARCHAR(15),
 company VARCHAR(15),
 post VARCHAR(15),
 FOREIGN KEY (user) REFERENCES users(username) ON DELETE CASCADE
 );
