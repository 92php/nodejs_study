const http=require('http');
const url=require('url');
const routes=require('./module/routes.js');
const ejs=require('ejs');





http.createServer(function(req,res){

    //创建静态web服务
     routes.static(req,res,'static');

     //路由
     let pathname=url.parse(req.url).pathname;

     //获取请求类型
     console.log(req.method);

     //http://127.0.0.1:3000/news?page=2&id=1
     if(pathname=='/news'){
      //get
      var query=url.parse(req.url,true).query;
      console.log(query.page);
      res.writeHead(200,{'Content-Type': 'text/html;charset="utf-8"'});
      res.end('get传值获取成功');

     }else if(pathname=='/login'){
       //ejs模板 
      let msg="数据库里面获取的数据";
      let list=[
         {
            title:'新闻111'
         },
         {
            title:'新闻222'
         },
         {
            title:'新闻333'
         }
      ];
      ejs.renderFile('./views/login.ejs',{
         msg:msg,
         list:list
      },(err,data)=>{
         res.writeHead(200,{'Content-Type': 'text/html;charset="utf-8"'});
         res.end(data);
      })

     }else if(pathname=='/login_in'){
       //post演示

       ejs.renderFile('./views/form.ejs',{},(err,data)=>{
         res.writeHead(200,{'Content-Type': 'text/html;charset="utf-8"'});
         res.end(data);
       })


     }else if(pathname=='/doLogin'){

      //获取post传值
      let postData='';
      req.on('data',(chunk)=>{
         postData+=chunk;
      })
      req.on('end',()=>{
         console.log(postData);
      })

        res.writeHead(200,{'Content-Type': 'text/html;charset="utf-8"'});
        res.end('post ok');
     }else{
        res.writeHead(404,{'Content-Type': 'text/html;charset="utf-8"'});
        res.end('这个页面不存在');
     }




}).listen(3000);

console.log('Server runing at http://127.0.0.1:3000/');