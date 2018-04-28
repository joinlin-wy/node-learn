process.nextTick(() => console.log(0));
new Promise(function executor(resolve, reject) {
    reject(1);
    Promise.resolve().then(() => console.log(2));
}).then(function (t) {
    console.log(t);
},function (e) {
    console.log(e + '-1')
}).catch(function (e) {
    console.log(e + '-2')
});
Promise.resolve().then(() => console.log(4));
process.nextTick(() => console.log(3));
//then方法第二个参数传递的回调方法优先于catch方法。
//process.nextTick -> Promise.resolve -> (setTimeout、setInterval -> setImmediate) 由于定时器至少需要一毫秒，所以括号里的顺序不一定
//new Promise里的函数同步执行,多个谁先注册回调谁在前面
//reject将Promise放在了process.nextTick前面？