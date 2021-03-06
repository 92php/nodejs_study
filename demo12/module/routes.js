
const fs=require('fs');
const path=require('path');
const url=require('url');




let getFileMime=function(extname){

    var data=fs.readFileSync('./data/mime.json'); //同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];

}

exports.static=function(req,res,staticPath){
    
    
    //1.获取地址
    let pathname=url.parse(req.url).pathname;
    pathname = pathname=='/' ? '/index.html' : pathname;

    let extname=path.extname(pathname);  //可以获取后缀名

    //2.通过fs模块读取文件
    if(pathname!='/favicon.ico'){

        // fs.readFile('./'+staticPath+pathname,(err,data)=>{
        //     if(!err){
        //         let mime=getFileMime(extname);
        //         res.writeHead(200,{'Content-Type': ''+mime+';charset="utf-8"'});
        //         res.end(data);
        //     } 
        // })

        try {
            let data=fs.readFileSync('./'+staticPath+pathname);
            if(data){
                let mime=getFileMime(extname);
                res.writeHead(200,{'Content-Type': ''+mime+';charset="utf-8"'});
                res.end(data);
            }
        } catch (error) {
            
        }


    }

}