const http=require('http');
const url=require('url');
const routes=require('./module/routes.js');





http.createServer(function(req,res){

    //创建静态web服务
     routes.static(req,res,'static');

     //路由
     let pathname=url.parse(req.url).pathname;

     if(pathname=='/login'){
        res.writeHead(200,{'Content-Type': 'text/html;charset="utf-8"'});
        res.end('login');
     }else if(pathname=='/register'){
        res.writeHead(200,{'Content-Type': 'text/html;charset="utf-8"'});
        res.end('register');
     }else if(pathname=='/admin'){
        res.writeHead(200,{'Content-Type': 'text/html;charset="utf-8"'});
        res.end('admin');
     }else{
        res.writeHead(404,{'Content-Type': 'text/html;charset="utf-8"'});
        res.end('这个页面不存在');
     }




}).listen(3000);

console.log('Server runing at http://127.0.0.1:3000/');