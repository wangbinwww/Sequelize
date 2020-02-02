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

sequelize.findAndCountAll({
        where: {
            description: "王彬"
        },
        limit: 10,
        offset: 0,
        raw: true,
        attributes: ["id", "name", "title"] //  需要查询出的字段
    })
    .then(function (result) {
        // success
        console.log(result);
    })
    .catch(function (error) {
        // error
        console.log(error);
    });