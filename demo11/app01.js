const http=require('http');
const fs=require('fs');
const common=require('./module/common.js');
const path=require('path');
const url=require('url');

//common.getFileMime('xxx');

http.createServer(function(require,response){

    //http://127.0.0.1:8081/login.html
    //http://127.0.0.1:8081/index.html
    //console.log(require.url);

    //1.获取地址
    //let pathname=require.url;
    let pathname=url.parse(require.url).pathname;
    pathname = pathname=='/' ? '/index.html' : pathname;

    let extname=path.extname(pathname);  //可以获取后缀名

    //2.通过fs模块读取文件
    if(pathname!='/favicon.ico'){

        fs.readFile('./static'+pathname,async (err,data)=>{

            if(err){
                //console.log('404');
                //return;
                response.writeHead(404,{'Content-Type': 'text/html;charset="utf-8"'});
                response.end('这个页面不存在');
            }
            //let mime=common.getMime(extname);
            let mime=await common.getFileMime(extname);
            response.writeHead(200,{'Content-Type': ''+mime+';charset="utf-8"'});
            response.end(data);
            
        })
    }



}).listen(8081);

console.log('Server runing at http://127.0.0.1:8081/');