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

## 许可协议

- [署名-非商业性使用-相同方式共享 4.0 国际](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans)

---

## 联系方式

- Github: <https://github.com/wangbinwww/Sequelize>
- Email: [13331036973@163.com](mailto:github#mcxiaoke.com)

## 其它

- Github: <https://github.com/wangbinwww/Sequelize>

---
