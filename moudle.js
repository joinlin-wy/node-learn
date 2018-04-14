let _module = {};
_module.exports = {};

function _require(module, exports) {
  exports.sayHello = function () {
    console.log('hello');
  };
  console.dir(module);
  module.exports = {
    sayHi: function () {
      console.log('hi');
    }
  };
  console.log(exports);
  return module;
}

let obj = _require(_module, _module.exports);
console.log(typeof obj);
console.dir(obj);
//exports是module.exports指向的值的引用，module.exports改变使exports失效，require导出的是module.exports