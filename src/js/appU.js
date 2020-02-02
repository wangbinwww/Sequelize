//app2.js

//第一步 建立与数据库链接
//*链接池参数
const Sequelize = require('sequelize');
const mssqlConfig = {
    host: 'localhost', //  接数据库的主机
    port: '1433', //  接数据库的端口
    protocol: 'tcp', //  连接数据库使用的协议
    dialect: 'mssql', //  使用mssql
    pool: {
        max: 5, //  最大连接数量
        min: 0, //  最小连接数量
        acquire: 30000,
        idle: 3000 //  连接空置时间（毫秒），超时后将释放连接
    },
    retry: { //  设置自动查询时的重试标志
        max: 3 //  设置重试次数
    },
    omitNull: false, //  null 是否通过SQL语句查询
    timezone: '+08:00' //  解决时差 - 默认存储时间存在8小时误差
};
//创建链接池
const sequelize = new Sequelize('TestDB', 'sa', 'Icon2019', mssqlConfig);

//第二步 建立模型与表产生映射
//----------------------
//定义模型结构
const TableStructure = {
    ID: Sequelize.INTEGER,
    Name: Sequelize.STRING,
    PassWord: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}

const TableSequelize = {
    timestamps: false,
    freezeTableName: true, //禁止修改表名字
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true, //主键
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PassWord: {
        type: Sequelize.STRING,
        allowNull: false
    },
    create_time: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
        }
    },
    update_time: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('update_time')).format('YYYY-MM-DD HH:mm:ss');
        }
    }
}
//sequelize.define
//方法接收三个参数，第一个参数为表名称，第二个为所需要创建的数据库字段，第三个参数是相关表配置。
const AaronTest = sequelize.define('User', TableStructure, TableSequelize)

//更新数据
var TcreatedAt = {
    get() {
        return moment(this.getDataValue('update_time')).format('YYYY-MM-DD HH:mm:ss');
    }
};
var TupdatedAt = {
    get() {
        return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
    }
};

AaronTest.update({
    createdAt: 'createdAt',
    title: `createdAt | 20200202`

}, {
    where: {
        //createdAt: ''
    }
}).then((result) => {
    console.log('已执行!')
    console.log(result)
}).catch((error) => {
    console.log('错误!')
    console.log(error)
})