var dns = require('dns');
dns.resolve('www.tencent.com', 'A', function (e, r) {
  if (e) {
    console.log(e);
  } else {
    console.log(r);
  }
});
dns.reverse('219.146.241.14', function (e, r) {
  if (e) {
    console.log(e);
  } else {
    console.log(r)
  }
})