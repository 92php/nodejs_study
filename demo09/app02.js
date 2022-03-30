const fs=require('fs');
var str='';

for(var i=0;i<500;i++){
    str+='我是从数据库读取的数据，我要保存起来\n';
}

var writeStream=fs.createWriteStream('./data/output.txt');
writeStream.write(str);

//标记写入完成
writeStream.end();

//监听写入完成的事件
writeStream.on('finish',()=>{
    console.log('写入完成');
})