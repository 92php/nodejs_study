// var db=require('db'); //错误  因为nodejs 默认会找node_modules对应模块里的index.js
// db.find();

//怎么解决 配置package.json

var db=require('db');
db.find();