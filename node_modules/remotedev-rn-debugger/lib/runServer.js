'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _remotedevServer = require('remotedev-server');

var _remotedevServer2 = _interopRequireDefault(_remotedevServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readFile = function readFile(filePath) {
  return _fs2.default.readFileSync(_path2.default.resolve(process.cwd(), filePath), 'utf-8');
};

exports.default = function (options) {
  var protocol = options.protocol,
      key = options.key,
      cert = options.cert;

  var opts = _extends({}, options, protocol === 'https' ? {
    key: key ? readFile(key) : null,
    cert: cert ? readFile(cert) : null
  } : null);
  return (0, _remotedevServer2.default)(opts);
};