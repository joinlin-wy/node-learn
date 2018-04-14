const events = require('events');
let sayHi = function () {
  console.log('Hi~~~');
};
let HI = new events.EventEmitter();
HI.addListener('sayHi', sayHi);
HI.emit('sayHi');