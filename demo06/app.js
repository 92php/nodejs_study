/**
 * 1. fs.stat 检测是文件还是目录
 * 2. fs.mkdir 创建目录
 * 3. fs.writeFile 创建写入文件
 * 4. fs.appendFile 追加文件
 * 5. fs.readFile 读取文件
 * 6. fs.readdir 读取目录 
 * 7. fs.rename 重命名 
 * 8. fs.rmdir 删除目录
 * 9. fs.unlink 删除文件
 */

const fs=require('fs');

/**
 fs.stat('./html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`是文件：${data.isFile()}`);
    console.log(`是目录：${data.isDirectory()}`);
})

 */

/**
fs.stat('./package.json',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`是文件：${data.isFile()}`);
    console.log(`是目录：${data.isDirectory()}`);
})

 */

/**
fs.mkdir('./css',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('创建目录成功');
})

 */

/**
fs.writeFile('./html/index.html','haha',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('创建写入文件成功');
})

 */

/**
fs.appendFile('./css/base.css','body{color:red}\n',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('appendfile 成功');
})
 */

/**
fs.readFile('./html/index.html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.toString());
})
 */

/**
 fs.readdir('./html',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})
 */

/**
 //重命名  移动
fs.rename('./css/aaa.css','./css/index.css',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('重命名成功');
})
 */

/**
fs.rename('./css/index.css','./html/index.css',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('移动文件成功');
})
 */

// fs.rmdir('./aaa',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除目录成功');
// })

fs.unlink('./aaa/index.html',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除文件成功');
})