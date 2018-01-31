var fs = require('fs');

var cryptoPath = './node_modules/ethereumjs-wallet/index.js'

// PACKAGE_ERROR and FILE_ERROR is shown on your error
fs.readFile(cryptoPath, 'utf8', function (err, data) {
  if (err) return console.log(err);

  var result = data.replace('require(\'crypto\')',
    'require(\'crypto-browserify\')');

  fs.writeFile(cryptoPath, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });

});
