const http=require('http');
const tools=require('./module/tools.js');

console.log(tools);

http.createServer((req,res)=>{

    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
    res.write('<head><meta charset="UTF-8"></head>');
    res.write('this is nodejs<br/>');
    
    var api=tools.formatApi('api/focus');
    res.write(api);

    res.end(); //η»ζεεΊ

}).listen(3000)