function _require(module, exports) {
    let _module = {exports: {}};
    (function (module, exports) {
        exports.sayHello = function () {
            console.log('hello');
        };
        console.dir(module);
        module.exports = {
            sayHi: function () {
                console.log('hi');
            }
        };
    })(_module, _module.exports);
    return module.exports;
}

let obj = _require(_module, _module.exports);
console.log(typeof obj);
console.dir(obj);
//exports是module.exports指向的值的引用，module.exports改变使exports失效，require导出的是module.exports
//Node.js 模块正常情况对作用域不会造成污染，意外创建全局变量是一种例外，可以采用严格模式来避免。