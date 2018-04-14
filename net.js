const net = require('net');
const server = net.createServer();
const fs = require('fs');
const readline = require('readline');

function log(str) {
  console.log(str);
  fs.appendFileSync('./message.log', str + '\n');
}

function getTime() {
  let time = new Date();
  let date = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() +
    ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
  return date;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
server.listen(8080, function () {
  console.log('开始监听:' + JSON.stringify(server.address()));
}).on('error', function (e) {
  throw e;
});
server.on('connection', (socket) => {
  let id = Math.round(Math.random() * 1024);
  let res = {id: id, message: ''};
  log('连接' + id + '已建立');
  let str = {
    id: id,
    tocken: id,
    message: '接收到你的连接，你的id:' + id
  };
  socket.write(JSON.stringify(str));
  log('socket端口对象信息：' + JSON.stringify(server.address()));
  rl.on('line', (input) => {
    res.message = input;
    socket.write(JSON.stringify(res));
  });
  server.getConnections((err, count) => {
    server.maxConnections = 2;
    log('当前连接数状态：' + count + '/' + server.maxConnections);
  });
  socket.setEncoding('utf8');
  socket.setTimeout(500000);
  socket.on('data', (data) => {
    
    let obj = JSON.parse(data);
    if (!obj.tocken || obj.tocken != 'wangyue' + id) {
      socket.destroy();
    } else {
      log(getTime() + ' ' + obj.message);
    }
    
  })
    .on('timeout', () => {
      console.log('客户端连接已超时！');
      socket.destroy();
    })
    .on('end', () => {
      console.log('end 连接' + id + '已关闭');
    })
    .on('close', () => {
      console.log('close 连接' + id + '已关闭');
    })
    .on('error', (error) => {
      console.log(error);
    });
});
server.on('close', function () {
  console.log('服务器关闭');
});