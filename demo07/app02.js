
var mkdirp = require('mkdirp');

// mkdirp('./upload',function(err){
//     if(err){
//         console.log(err);
//     }
// });

mkdirp('./upload/aaa').then(made =>
    console.log(`made directories, starting with ${made}`))