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

## 其它文档

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

## 许可协议

- [署名-非商业性使用-相同方式共享 4.0 国际](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-Hans)

---

## 联系方式

- Github: <https://github.com/wangbinwww/Sequelize>
- Email: [13331036973@163.com](mailto:github#mcxiaoke.com)

## 其它

- Github: <https://github.com/wangbinwww/Sequelize>

---
