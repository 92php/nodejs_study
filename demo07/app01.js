const fs=require('fs');
var path="./upload";

fs.stat(path,(err,data)=>{
    if(err){
        //执行创建目录
        mkdir(path);
        return;
    }

    if(data.isDirectory()){
        console.log("upload目录存在");
    }else{

        //首先删除文件，再去执行创建目录
        fs.unlink(path,(err)=>{
            if(!err){
                mkdir(path);
                return;
            }else{
                console.log("请检测传入的数据是否正确");
            }
        })

    }
})


//创建目录方法
function mkdir(dir){
    fs.mkdir(dir,(err)=>{
        if(err){
            console.log(err);
            return;
        }
    });
}