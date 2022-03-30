const http = require('http');
const routes = require('./module/routes');
const url = require('url');
const path = require('path');

http.createServer(function (req, res) {
    //创建静态web服务
    routes.static(req, res, 'static');
    //路由
    let pathname = url.parse(req.url).pathname.replace("/", "");      
    //console.log(pathname);
    //http://127.0.0.1:3000/news      pathname=news  
    //http://127.0.0.1:3000/login      pathname=login  
    // http://127.0.0.1:3000/xxxx      pathname=xxxx   app.xxxx不存在 
    let extname = path.extname(pathname);
    //console.log(extname);
    if (!extname) {   //如果有后缀名的话让静态web服务去处理 
        try {
            routes[pathname](req, res);
        } catch (error) {
            routes['error'](req, res);
        }
    }


}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');


// let app={
//     login:(req,res)=>{
//         //处理登陆的业务逻辑
//     },
//     news:(req,res)=>{
//         //处理新闻逻辑
//     }
// }
// app.login('req','res');
// app['login']('req','res');
