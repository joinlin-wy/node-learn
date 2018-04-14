const http = require('http');

var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.write('你好');
  res.end();
}).listen(8888, 'localhost', function () {
  console.log('服务启动。端口号：%d', server.address().port);
});