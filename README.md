# Sequelize 学习参考

参考原文:https://segmentfault.com/a/1190000019760817

根据文章的步骤一步一步学习使用 Sequelize 链接 mssql 的功能.

by [Well-BoB](https://github.com/wangbinwww/Sequelize)

**最新版本: v1 2020.02.02**

## 文档地址

- [项目文档](https://github.com/wangbinwww/Sequelize)

## 初始化项目

- 1.使用 'npm install' 命令初始化项目

## 目录

**发现任何问题欢迎帮忙完善。**

- [L0](README.md)
- [L1](README.md)
  - [L1.1 ](README.md)
  - [L1.2 ](README.md)
- [L2](README.md)
- [L3](README.md)
- [L4](README.md)

---

## 说明、参数文档

> 常用类型

```groovy
// app.js
const AaronTest = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
},{
  timestamps: false
})
```

| 类型     | 说明                                                                                  |
| -------- | ------------------------------------------------------------------------------------- |
| STRING   | 将字段指定为变长字符串类型，默认长度为 255。Sequelize.STRING(64)                      |
| CHAR     | 将字段指定为定长字符串类型，默认长度为 255。Sequelize.CHAR(64)                        |
| TEXT     | 将字段指定为(无)有限长度的文本列。可用长度：tiny, medium, long,Sequelize.TEXT('tiny') |
| INTEGER  | 32 位整型，可用属性：UNSIGNED,ZEROFILL，Sequelize.INTEGER('UNSIGNED')                 |
| BOOLEAN  | 小数，接受一个或两个参数表示精度，Sequelize.BOOLEAN()                                 |
| TIME     | 指定为时间类型列，Sequelize.TIME()                                                    |
| DATE     | 指定为日期时间类型列,Sequelize.DATE()                                                 |
| DATEONLY | 指定为日期类型列,Sequelize.DATEONLY()                                                 |
| HSTORE   | 指定为键/值类型列，仅 Postgres 适用,Sequelize.HSTORE()                                |
| JSON     | 指定为 JSON 字符串类型列，仅 Postgres 适用,Sequelize.JSON()                           |
| JSONB    | 指定为预处理的 JSON 数据列，仅 Postgres 适用,Sequelize.JSONB()                        |
| NOW      | 一个表示当前时间戳的默认值,Sequelize.NOW()                                            |
| UUID     | UUID 类型列，其默认值可以为 UUIDV1 或 UUIDV4，Sequelize.UUID()                        |
| ENUM     | 枚举类型,Sequelize.ENUM()                                                             |
| ARRAY    | 数组类型，仅 Postgres 适用,Sequelize.ARRAY()                                          |

> Model 进行二次设置

- timestamps:不要添加时间戳属性 (updatedAt, createdAt)
- paranoid:paranoid 属性只在启用 timestamps 时适用,不从数据库中删除数据，而只是增加一个 deletedAt 标识当前时间,我们常说的逻辑删除
- underscored: 不使用驼峰式命令规则，这样会在使用下划线分隔，updatedAt 的字段名会是 updated_at
- freezeTableName：禁止修改表名. 默认情况下 sequelize 会自动使用传入的模型名（define 的第一个参数）做为表名，如果你不想使用这种方式你需要进行以下设置
- tableName：定义表名
- createdAt：不想使用 createdAt
- updatedAt：想 updatedAt 的实际名为'\*'
- deletedAt: 要将 deletedAt 设置为 destroyTime (注意要启用 paranoid)

> Model 附加属性

- autoIncrement：是否自增
- references：通过 references 选项可以创建外键
- allowNull：设置 allowNull 选项为 false 后，会为列添加 NOT NULL 非空限制
- defaultValue：设置默认值
- type：字段类型
- unique：添加唯一（unique）约束后插入重复值会报错，unique 属性可以是 boolean 或 string 类型
- primaryKey：设置为主键
- comment：字段描述
- field：指定数据库中的字段名

> Model validate 属性

| 字段           | 说明                       | 值类型 |
| -------------- | -------------------------- | ------ |
| is             | 存储值必须满足正则         | 正则   |
| not            | 除正则之外的值             | 布尔   |
| isEmail        | 是否为邮箱                 | 布尔   |
| isUrl          | 检查 Url 格式              | 布尔   |
| isIP           | 检查 IPv4 或 IPv6 格式     | 布尔   |
| isIPv4         | 检查 IPv4                  | 布尔   |
| isIPv6         | 检查 IPv6                  | 布尔   |
| isAlpha        | 不能使用字母               | 布尔   |
| isAlphanumeric | 只允许字母数字字符         | 布尔   |
| isNumeric      | 只能使用数字               | 布尔   |
| isInt          | 只能是整数                 | 布尔   |
| isFloat        | 只能是浮点数               | 布尔   |
| isDecimal      | 检查数字                   | 布尔   |
| isLowercase    | 检查小写字母               | 布尔   |
| isUppercase    | 检查大写字母               | 布尔   |
| notNull        | 不允许 null                | 布尔   |
| isNull         | 只能为 null                | 布尔   |
| notEmpty       | 不能空字符串               | 布尔   |
| equals         | 只能使用指定值             | 字符串 |
| contains       | 必须包含子字符串           | 字符串 |
| notIn          | 不能是数组中的任意一个值   | 数组   |
| isIn           | 只能是数组中的任意一个值   | 数组   |
| notContains    | 不能包含子字符串           | 字符串 |
| len            | 值的长度必在 2 和 10 之间  | 数组   |
| isUUID         | 只能是 UUID                | 数字   |
| isDate         | 只能是日期字符串           | 布尔   |
| isAfter        | 只能使用指定日期之后的时间 | 字符串 |
| isBefore:      | 只能使用指定日期之前的时间 | 字符串 |
| max            | 允许的最大值               | 数字   |
| min            | 允许的最小值               | 数字   |
| isArray        | 不能使用数组               | 布尔   |
| isCreditCard   | 检查是有效的信用卡         | 布尔   |

> CRUD

CRUD：是指在做计算处理时的增加(Create)、读取(Read)、更新(Update)和删除(Delete)几个单词的首字母简写。crud 主要被用在描述软件系统中数据库或者持久层的基本操作功能。

> 增加(Create)

创建数据的方法有很多种，这里简单的介绍一些常用的：
先创建数据实例，然后调用实例的 save 方法，完成数据存储。

```groovy
//第一种：
//save方法
  const Aaron = AaronTest.build({
      'title': `后端 | ${Math.random()}`,
      'description': '技术部'
  });
  Aaron.save().then((result) => {
      //  成功
      console.log(result)
  }).catch((error) => {
      //  失败
      console.log(error)
  })

//第二种：
//通过静态create方法
  const user = AaronTest.create({
    'title': `前端 | ${Math.random()}`,
    'description': '网络部'
}).then(function (result) {
    //  成功
    console.log(result)
}).catch(function (error) {
    //  失败
    console.log(error)
});
```

> 读取(Read)

```groovy

  AaronTest.findAll({
      where: {
          description: '网络部'
      },
      limit: 10, //  查询多少条
      offset: 0, //  查询开始位置
      raw: true
  }).then(function (result) {
      // success
      console.log(result)
  }).catch(function (error) {
      // error
      console.log(error)
  });
  //通过上述方法创建的数据可以直接作为返回结果返回给前台，如果想对其操作需要在参数中添加row:true属性
  //添加row:true返回的则是一个没有被包装过的数组了。在项目过程中需要查询一下当前所查询的数据共有多少条返回给前端。

  AaronTest.count({
      where: {
          description: '网络部'
      }
  }).then().then(function (result) {
      // success
      console.log(result)
  }).catch(function (error) {
      // error
      console.log(error)
  });
  //通过上面的方法则可以查询到总数

  AaronTest.findAndCountAll({
      where: {
          description: '网络部'
      },
      limit: 10,
      offset: 0,
      raw: true,
      attributes: ["id", "title"] //  需要查询出的字段
  }).then(function (result) {
      // success
      console.log(result)
  }).catch(function (error) {
      // error
      console.log(error)
  });
  //添加row:true返回的则是一个没有被包装过的数组了。在项目过程中需要查询一下当前所查询的数据共有多少条返回给前端。
  //通过上面的方法则可以查询到总数以及条件范围内的数据，一举两得。查询结果返回的是一个json对象，其包括cont和rows两个属性，分别是总数和数据。很舒服有没有。

```

**查询单条数据**

```groovy
  AaronTest.findOne({
      where: {
          id: 6
      },
      raw: true,
      attributes: ["id", "title"]
  }).then((result) => {
      console.log(result)
  }).catch((error) => {
      console.log(error)
  })
```

> 更新(Update)

```groovy
  AaronTest.update({
      description: '前端部',
      title: `前端 | ${Math.random()}`
  }, {
      where: {
          description: "网络部"
      }
  }).then((result) => {
      console.log(result)
  }).catch((error) => {
      console.log(error)
  })
  //修改数据可以直接调用静态的update方法，通过where条件查询，对其搜索到的数据进行查询，并对查询到的数据进行更改。
  //该方法修改所有查询的到的数据，返回结果为数组形式，数据只有一个值，也就是数组的第0项，则是N条数据修改成功。

```

> 删除(Delete)

```groovy
AaronTest.destroy({
    where: {
        description: "UI部",
    }
}).then(function (result) {
    console.log(result)
}).catch(function (error) {
    console.log(error)
});
//删除操作通过destroy方法，同样也是通过where条件查询，对所查询数据进行删除。
//当删除成功后，返回结果为Number，删除多少条数据，如果没有删除则会返回0。此方法属于物理删除，删除后无法进行恢复。
```

> 查询参数

CRUD 操作过程中，都少不了的就是查询，细心的应该可以看的出，上面的例子中查询的时候多多少少的对其进行了一些小的改动。Sequelize 中有两种查询：使用 Model(模型)中的方法查询和使用 sequelize.query()进行基于 SQL 语句的原始查询。上面用到的是 Model 查询方式，接下来就详细的介绍一些常用的参数以及其代表的意义。

> attributes - 属性与查询字段

查询时，如果只需要查询模型的部分属性，可以在通过在查询选项中指定 attributes 实现。该选项是一个数组参数，在数组中指定要查询的属性即可，这个字段在上面进行查询的时候已经使用过了。

```groovy
//查询属性（字段）可以通过传入一个嵌套数据进行重命名，这里需要强调一下重命名所指的是对查询出的数据键值进行重命名处理，而不是更改数据表中的字段名称。
AaronTest.findOne({
    where: {
        id: 2
    },
    attributes: ["id", ["title", "t"]],
    raw: true
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
//  注意这里t ↓
//  { id: 2, t: '前端 | 0.8765218593370694' }
```

> where - 指定筛选条件

上面的那么多例子中 where 出现的次数最多了，除了增加数据不需要，其他的都需要用到 where 条件，可以指定一个 where 选项以指定筛选条件，where 是一个包含属性/值对对象，sequelize 会根据此对象生产查询语句的筛选条件。

where 的基础用法也就向上面那样，针对某些特定的条件进行查询处理。

```groovy
AaronTest.findOne({
    where: {
        id: 2
    },
    attributes: {
        exclude: ['id']
    },
    raw: true
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
```

就像上面那样简单的查询无法满足所有的业务需求，Sequelize 还提供了操作符以满足更多的查询条件，常用的操作符如下：

```groovy
$and: {a: 5}                    // AND (a = 5)
$or: [{a: 5}, {a: 6}]           // (a = 5 OR a = 6)
$gt: 6,                         // > 6
$gte: 6,                        // >= 6
$lt: 10,                        // < 10
$lte: 10,                       // <= 10
$ne: 20,                        // != 20
$not: true,                     // IS NOT TRUE
$between: [6, 10],              // BETWEEN 6 AND 10
$notBetween: [11, 15],          // NOT BETWEEN 11 AND 15
$in: [1, 2],                    // IN [1, 2]
$notIn: [1, 2],                 // NOT IN [1, 2]
$like: '%hat',                  // LIKE '%hat'
$notLike: '%hat'                // NOT LIKE '%hat'
$iLike: '%hat'                  // 包含'%hat' (case insensitive) (PG only)
$notILike: '%hat'               // 不包含'%hat'  (PG only)
$like: { $any: ['cat', 'hat']}  // 像任何数组['cat'， 'hat'] -也适用于iLike和notLike
```

> limit/offset - 分页与限制返回结果数

在进行列表查询时，不能把查询道德所有数据全部返回出去，需要对数据进行分页处理。

```groovy
// 获取 10 条数据（实例）
AaronTest.findAll({ limit: 10 })
// 跳过 8 条数据（实例）
AaronTest.findAll({ offset: 8 })
// 跳过 5 条数据并获取其后的 5 条数据（实例）
AaronTest.findAll({ offset: 5, limit: 5 })
```

> 查询排序

order 选项用于查询结果的排序数据。排序时应该传入一个包含属性-排序方向的元组/数组，以保证正确的转义：

```groovy
AaronTest.findAll({
    order: [
        // 转义 username 并对查询结果按 DESC 方向排序
        ['username', 'DESC'],
        // 按 max(age) 排序
        sequelize.fn('max', sequelize.col('age')),
        // 按 max(age) DESC 排序
        [sequelize.fn('max', sequelize.col('age')), 'DESC'],
        // 按 otherfunction(`col1`, 12, 'lalala') DESC 排序
        [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],
        // 按相关联的User 模型的 name 属性排序
        [User, 'name', 'DESC'],
        // 按相关联的User 模型的 name 属性排序并将模型起别名为 Friend
        [{
            model: User,
            as: 'Friend'
        }, 'name', 'DESC'],
        // 按相关联的User 模型的嵌套关联的 Company 模型的 name 属性排序
        [User, Company, 'name', 'DESC'],
    ]
    // 以下所有声明方式都会视为字面量，应该小心使用
    order: 'convert(user_name using gbk)'
    order: 'username DESC'
    order: sequelize.literal('convert(user_name using gbk)')
})
```

> SQL 语句查询

原始查询中有两种替换查询参数的方法，以:开头的参数的形式替换或以不命名以?替换。在选项对象中传递参数：

- 如果传递一个数组，? 会按数组的顺序被依次替换
- 巢传递一个对象，:key 将会用对象的键替换。如果对象中未找到指定键，则会引发异常（反之亦然）

```groovy
//  这里是sequelize，并不是model
sequelize.query('SELECT * FROM projects WHERE id = ?', {
    replacements: ['active'],
    type: sequelize.QueryTypes.SELECT
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
```

## 许可协议

- [署名-非商业性使用-相同方式共享 4.0 国际](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans)

---

## 联系方式

- Github: <https://github.com/wangbinwww/Sequelize>
- Email: [13331036973@163.com](mailto:github#mcxiaoke.com)

## 其它

- Github: <https://github.com/wangbinwww/Sequelize>

---

```

```

```

```
