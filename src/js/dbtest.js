var db = require('./MSsql_CRUD')
db.list_sql('select * as count from user', function (result) {
    console.log("查询数量：" + result[0].count)
});