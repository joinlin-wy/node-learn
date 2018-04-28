const express = require('express');
const os = require('os');
const app = express();
app.use(express.static('./dist'));
let port = '80';
app.listen(port, function () {
  let address = [];
  let network = os.networkInterfaces();
  for (let net in network) {
    network[net].forEach(value => {
      if (value.address.split('.').length === 4) {
        address.push(value.address);
      }
    });
  }
  console.log(address);
  address.forEach((value => {
    console.log(`serving on ${value}:${port}`);
  }));
  
});