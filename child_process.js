const spawn = require('child_process').spawn;
var sp = spawn('node', ['fs.js'], {stdio: 'pipe'});
sp.stdout.on('data', data => {
  console.log(data.toString());
});
sp.on('error', e => {
  console.log(e);
});