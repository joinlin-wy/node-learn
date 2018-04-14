const fs = require('fs');
const zlib = require('zlib');

// fs.createReadStream('./炫彩.jpg').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./炫彩.zip'))
fs.readdir('./', function (err, files) {
  console.log(files);
});
fs.lstat('./fs.js', function (err, stats) {
  console.log(stats);
});