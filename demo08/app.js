

const fs=require('fs');

//定义一个isDir的方法判断一个资源是目录还是文件

async function isDir(path){
    return new Promise((resolve,reject)=>{
        fs.stat(path,(error,stats)=>{
            if(error){
                console.log(error);
                reject(error);
                return;
            }
            if(stats.isDirectory()){
                resolve(true);
            }else{
                resolve(false);
            }
        })
    }) 
}

//获取wwwroot里面的所有资源 循环遍历

function main(){
    var path="./wwwroot";
    var dirArr=[];
    fs.readdir(path,async (err,data)=>{ //注意
        if(err){
            console.log(err);
            return;
        }
        for(var i=0;i<data.length;i++){
            if(await isDir(path+'/'+data[i])){
                dirArr.push(data[i]);
            }
        }
        console.log(dirArr);
    })
}

main();