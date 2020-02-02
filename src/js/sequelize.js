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
//方法1:单独传递参数
const sequelize = new Sequelize('TestDB', 'sa', 'Icon2019', mssqlConfig);
var qtt = {}; //表数据
qtt.Name = 'sql';
qtt.PassWord = '7788';
console.log(qtt);


const TableStructure = {
    name: Sequelize.STRING,
    password: Sequelize.TEXT
}

const AaronTest = sequelize.define('project3', TableStructure, {
    timestamps: false,
});
AaronTest.sync();


sequelize
    .authenticate()
    .then(() => {
        console.log('连接成功建立.');
    })
    .catch(err => {
        console.error('无法连接到数据库:', err);
    });