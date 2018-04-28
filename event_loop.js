new Promise(function executor(resolve, reject) {
    console.log(1);
    reject(3);
    setTimeout(function () {
        resolve(2);
        console.log(4);
    });
    Promise.resolve().then(() => console.log(5));
    console.log(6);
}).then(function (t) {
    console.log(t);
},function (e) {
    console.log(e + '-1')
}).catch(function (e) {
    console.log(e + '-2')
});
console.log(7);
setTimeout(() => console.log(8));
setImmediate(() => console.log(9));
process.nextTick(() => console.log(10));
//process.nextTick -> Promise.resolve -> (setTimeout、setInterval -> setImmediate) 由于定时器至少需要一毫秒，所以括号里的顺序不一定
//new Promise里的函数同步执行,多个谁先注册回调谁在前面
//reject将Promise放在了process.nextTick前面？或者将nextTick放到了下一轮循环里了？