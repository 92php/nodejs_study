
/**
 //普通方法
function test(){
    return 'nihao nodejs';
}
console.log(test());
 */

/**
async function test(){
    return 'nihao nodejs';
}
console.log(test()); //Promise { 'nihao nodejs' }
//console.log(await test()); //错误 await必须用在异步方法里面
 */


/**
async function test(){
    return 'nihao nodejs';
}
async function main(){
    var data=await test(); //获取异步方法里面的数据
    console.log(data);
}
main();
 */

async function test(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            var name="zhangsan 444";
            resolve(name);
        },1000);
    })
}
async function main(){
    var data=await test();
    console.log(data);
}
main();