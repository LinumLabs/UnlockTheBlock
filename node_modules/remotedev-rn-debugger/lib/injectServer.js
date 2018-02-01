'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inject = exports.revert = exports.fullPath = exports.file = exports.dir = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _injectServer = require('remotedev-server/bin/injectServer');

var _injectServer2 = _interopRequireDefault(_injectServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'remote-redux-devtools-on-debugger';
var startFlag = '/* ' + name + ' start */';
var endFlag = '/* ' + name + ' end */';
var serverFlag = '    _server(argv, config, resolve, reject);';

var dir = exports.dir = 'local-cli/server';
var file = exports.file = 'server.js';
var fullPath = exports.fullPath = _path2.default.join(dir, file);

var revert = exports.revert = function revert(modulePath, moduleName) {
  var filePath = _path2.default.join(modulePath, fullPath);
  if (!_fs2.default.existsSync(filePath)) return false;

  // Revert legacy injected code
  var serverCode = _fs2.default.readFileSync(filePath, 'utf-8');
  var start = serverCode.indexOf(startFlag); // already injected ?
  var end = serverCode.indexOf(endFlag) + endFlag.length;
  if (start !== -1) {
    _fs2.default.writeFileSync(filePath, serverCode.substr(0, start) + serverFlag + serverCode.substr(end, serverCode.length));
  }
  return _injectServer2.default.revert(modulePath, moduleName);
};

var inject = exports.inject = function inject(modulePath, options, moduleName) {
  revert(modulePath, moduleName);
  return _injectServer2.default.inject(modulePath, options, moduleName);
};