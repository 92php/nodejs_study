
const fs=require('fs');

//创建一个读取流
var readStream=fs.createReadStream('./data/input.txt');

var count=0; //方法执行的次数
var str='';
//监听读取的状态
readStream.on('data',(data)=>{
    str+=data;
    count++;
})

//监听什么时候读取完
readStream.on('end',()=>{
    console.log(str);
    console.log(count);
})

//监听错误信息
readStream.on('error',(err)=>{
    console.log(err);
})
