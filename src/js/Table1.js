// module.exports = function (sequelize, DataTypes) {
//     return sequelize.define("project9999", {
//         name: DataTypes.STRING,
//         description: DataTypes.TEXT
//     })
// }


//创建project9999表
module.exports = function (sequelize, DataTypes) {
    const TableStructure = {
        name: DataTypes.STRING,
        password: DataTypes.TEXT
    }
    return AaronTest = sequelize.define('project9999', TableStructure, {
        timestamps: false,
    });
}