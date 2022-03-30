const http=require('http');
const url=require('url');


/**
 * req 获取客户端url传过来的信息
 * res 浏览器响应信息
 */
http.createServer((req,res)=>{

    
    //http://127.0.0.1?name=zhangsan&age=20  想获取url传过来的name 和 age


    //设置响应头
    //状态码是200 文件类型是 html 字符集是 utf-8
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});

    //console.log(req);
    //console.log(req.url);  //获取url

    if(req.url!='/favicon.ico'){
        var userinfo=url.parse(req.url,true).query;
        console.log(`姓名：${userinfo.name}--年龄：${userinfo.age}`);
    }

    res.end('hehe'); //结束响应

}).listen(3000)