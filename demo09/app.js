const fs=require('fs');

var readStream=fs.createReadStream('./aaa.jpg');
var writeStream=fs.createWriteStream('./data/aaa.jpg');

readStream.pipe(writeStream);