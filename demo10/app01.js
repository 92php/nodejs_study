const http=require('http');
const fs=require('fs');

http.createServer(function(require,response){

    //http://127.0.0.1:8081/login.html
    //http://127.0.0.1:8081/index.html
    //console.log(require.url);

    //1.获取地址
    let pathname=require.url;
    pathname = pathname=='/' ? '/index.html' : pathname;

    //2.通过fs模块读取文件
    if(pathname!='/favicon.ico'){

        fs.readFile('./static'+pathname,(err,data)=>{

            if(err){
                //console.log('404');
                //return;
                response.writeHead(404,{'Content-Type': 'text/html;charset="utf-8"'});
                response.end('这个页面不存在');
            }

            response.writeHead(200,{'Content-Type': 'text/html;charset="utf-8"'});
            response.end(data);
            
        })
    }



}).listen(8081);

console.log('Server runing at http://127.0.0.1:8081/');