
/**
 * 1.https://www.npmjs.com/package/silly-datetime
 * 2.npm i silly-datetime --save
 * 3.var sd = require('silly-datetime');
 * 4.看文档使用
 * 5.指定包的版本 
 *   npm install node-media-server@2.1.0 --save
 * 6. npm i  / cnpm i 表示package 安装dependencies对应的包
 */

var sd = require('silly-datetime');

console.log(new Date());

var d = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
console.log(d);

 
var dd = sd.fromNow(+new Date() - 2000);
console.log(dd);