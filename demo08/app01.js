/*
1. let const 
2. 箭头函数
3. 对象 属性的简写
4. 模板字符串
5. Promise
*/

//1. let const的使用   let和var是一样的 用来定义变量

//let 是一个块作用域

/**
//let a = 123;
if(true){
    let a = 456;
}
console.log(a);
 */

//常量
//const PI = 3.14159;
//PI=3;
//console.log(PI);

//模板字符串
//var name="zhangsan";
//var age=20;
//console.log(name+"的年龄是"+age);
//console.log(`${name}的年龄是${age}`);


// var name='zhangsan';
// var app={
//     "name":name
// }
// var app={
//     name
// }
// console.log(app.name);


/**
var name='zhangsan';
var app={
    name,
    run1:function(){
        console.log(`${this.name}在跑步1`);
    },
    run(){
        console.log(`${this.name}在跑步`);
    }
}
app.run();
app.run1();
 */


/**
//箭头函数 this 指向上下文
setTimeout(function(){
    console.log('执行');
},1000);
setTimeout(()=>{
    console.log('执行1');
},1000);
 */


/**
//回调函数 获取异步方法里面的数据
function getData(callback){

    //ajax
    setTimeout(function(){
        var name='zhangsan';
        callback(name);
    },1000);
}
//外部获取异步方法里面的数据
getData(function(data){
    console.log(data+'111');
})
 */

//Promise来处理异步  resolve 成功的回调函数  reject 失败的回调函数
/**
 var p=new Promise(function(resolve,reject){
    setTimeout(function(){
        var name="zhangsan 22";
        resolve(name);
    },1000)
})
p.then(function(data){
    console.log(data);
})
 */

function getData(resolve,reject){
    setTimeout(function(){
        var name="zhangsan 33";
        resolve(name);
    },1000)
}
var p=new Promise(getData);
p.then((data)=>{
    console.log(data);
})