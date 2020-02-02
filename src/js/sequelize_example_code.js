const Sequelize = require('sequelize');
const mssqlConfig = {
    host: 'localhost', //  接数据库的主机
    port: '1433', //  接数据库的端口
    protocol: 'tcp', //  连接数据库使用的协议
    dialect: 'mssql', //  使用mysql
    pool: {
        max: 5, //  最大连接数量
        min: 0, //  最小连接数量
        acquire: 30000,
        idle: 10000 //  连接空置时间（毫秒），超时后将释放连接
    },
    retry: { //  设置自动查询时的重试标志
        max: 3 //  设置重试次数
    },
    omitNull: false, //  null 是否通过SQL语句查询
    timezone: '+08:00' //  解决时差 - 默认存储时间存在8小时误差
};

//----------------------
//创建链接池
const sequelize = new Sequelize('TestDB', 'sa', 'Icon2019', mssqlConfig);

//----------------------
//定义模型数据
var qtt = {};
qtt.Name = 'sql';
qtt.PassWord = '7788';
console.log(qtt);

//----------------------
//定义project3模型结构
const TableStructure = {
    name: Sequelize.STRING,
    password: Sequelize.TEXT
}

//----------------------
//创建模型(表)
const AaronTest = sequelize.define('project3', TableStructure, {
    timestamps: false,
});
//将project3同步到数据库
AaronTest.sync();
//----------------------

//方法 2  js 引入一个模型并创建
const AaronTest2 = sequelize.import('../model/Table1.js');
AaronTest2.sync();

sequelize
    .authenticate()
    .then(() => {
        console.log('连接成功建立.');
    })
    .catch(err => {
        console.error('无法连接到数据库:', err);
    });

//----------------------