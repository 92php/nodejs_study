const http=require('http');

//http://www.yiwenbing.com/api/list

function formatApi(api){
    return "http://www.yiwenbing.com/"+api;
}


http.createServer((req,res)=>{

    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
    res.write('<head><meta charset="UTF-8"></head>');
    res.write('this is nodejs<br/>');
    
    var api=formatApi('api/list');
    res.write(api);

    res.end(); //结束响应

}).listen(3000)