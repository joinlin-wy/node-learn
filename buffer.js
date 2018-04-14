var account = {
  name: 'wangyue',
  number: '66666688888888',
  balance: '1000000'
};
var str = '你最近好吗？';
var strBuffer = new Buffer(str);
console.log(strBuffer);
var strS = str.slice(1, 3);
strS = '还';
console.log(str);
var strBufferS = strBuffer.slice(1, 3);
console.log(strBufferS);

strBufferS[0] = 0xbd;//更改silce复制的buffer内容会影响原buffer的内容
console.log(strBufferS);
console.log(strBuffer.toString());

