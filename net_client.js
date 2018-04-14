const net = require('net');
const readline = require('readline');

let rl = null;
let res = {tocken: 'wangyue', message: '你好'};
let client = new net.Socket();
client.setEncoding('utf8');
client.connect(8080, 'localhost', function () {
  console.log('已连接到服务器');
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line', (input) => {
    console.log(`发送: ${input}`);
    res.message = input;
    client.write(JSON.stringify(res));
  });
  // client.end('BYE')
})
  .on('error', (e) => {
    console.log('与服务器的连接发生了错误，错误：%j', e);
    rl && rl.close();
  })
  .on('data', (data) => {
    let obj = JSON.parse(data);
    if (obj.id) {
      res.tocken = 'wangyue' + obj.id;
      console.log(JSON.stringify(res));
    }
    console.log('收到:' + obj.message);
  })
  .on('end', function () {
    console.log('断开与服务器的连接');
    rl && rl.close();
  });