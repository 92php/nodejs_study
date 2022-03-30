const fs=require('fs');

//错误写法 注意 fs里面的方法是异步的
/**
var path="./wwwroot";
var dirArr=[];
fs.readdir(path,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    for(var i=0;i<data.length;i++){
        fs.stat(path+'/'+data[i],(error,stats)=>{
            if(stats.isDirectory()){
                dirArr.push(data[i]);
            }
        })
    }
    console.log(dirArr);
})

console.log(dirArr);
 */

//打印出3个3
// for(var i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },100)
// }

//1.改造for循环===》递归实现   2.nodejs里面的新特性 async  await

var path="./wwwroot";
var dirArr=[];
fs.readdir(path,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    (function getDir(i){
        if(i==data.length){ //执行完成
            console.log(dirArr);
            return;
        }
        fs.stat(path+'/'+data[i],(error,stats)=>{
            if(stats.isDirectory()){
                dirArr.push(data[i]);
            }
            getDir(i+1);
        })
    })(0)
})

