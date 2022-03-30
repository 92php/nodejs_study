const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');


exports.getMime=function(extname){

    switch(extname){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html'; 

    }
}




exports.getFileMime=function(extname){

    // fs.readFile('./data/mime.json',(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     //console.log(data.toString());
    //     let mimeObj = JSON.parse(data.toString());
    //     //console.log(mimeObj[extname]);
    // })
    
    // return new Promise((resolve,reject)=>{
    //     fs.readFile('./data/mime.json',(err,data)=>{
    //         if(err){
    //             console.log(err);
    //             reject(err);
    //             return;
    //         }
           
    //         let mimeObj = JSON.parse(data.toString());
    //         resolve(mimeObj[extname]);
    //     })
    // })

    var data=fs.readFileSync('./data/mime.json'); //同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];

}