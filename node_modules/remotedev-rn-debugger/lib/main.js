'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _injectDebugger = require('./injectDebugger');

var injectDebugger = _interopRequireWildcard(_injectDebugger);

var _injectServer = require('./injectServer');

var injectServer = _interopRequireWildcard(_injectServer);

var _runServer = require('./runServer');

var _runServer2 = _interopRequireDefault(_runServer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bundleCode = _fs2.default.readFileSync(_path2.default.join(__dirname, '../bundle.js'), 'utf-8');

var getModuleName = function getModuleName(type) {
  switch (type) {
    case 'macos':
      return 'react-native-macos';
    // react-native-macos is renamed from react-native-desktop
    case 'desktop':
      return 'react-native-desktop';
    default:
      return 'react-native';
  }
};
var getModulePath = function getModulePath(moduleName) {
  return _path2.default.join(process.cwd(), 'node_modules', moduleName);
};
var getModule = function getModule(type) {
  var moduleName = getModuleName(type);
  var modulePath = getModulePath(moduleName);
  if (type === 'desktop' && !_fs2.default.existsSync(modulePath)) {
    moduleName = getModuleName('macos');
    modulePath = getModulePath(moduleName);
  }
  return { moduleName: moduleName, modulePath: modulePath };
};

var log = function log(pass, msg) {
  var prefix = pass ? _chalk2.default.green.bgBlack('PASS') : _chalk2.default.red.bgBlack('FAIL');
  var color = pass ? _chalk2.default.blue : _chalk2.default.red;
  console.log(prefix, color(msg));
};

var getFullPath = function getFullPath(filePath) {
  return _path2.default.resolve(process.cwd(), filePath);
};
var assignSecureOptions = function assignSecureOptions(options, _ref) {
  var secure = _ref.secure,
      key = _ref.key,
      cert = _ref.cert,
      passphrase = _ref.passphrase;
  return _extends({}, options, secure ? {
    protocol: 'https',
    key: key ? getFullPath(key) : null,
    cert: cert ? getFullPath(cert) : null,
    passphrase: passphrase || null
  } : null);
};

module.exports = function (argv) {
  var type = argv.desktop ? 'desktop' : argv.macos && 'macos';

  var _getModule = getModule(type),
      moduleName = _getModule.moduleName,
      modulePath = _getModule.modulePath;

  // Revert all injection


  if (argv.revert) {
    var passServ = injectServer.revert(modulePath, moduleName);
    var msg = 'Revert injection of RemoteDev server from React Native local server';
    log(passServ, msg + (!passServ ? ', the file not found.' : '.'));

    var passDbg = injectDebugger.revert(modulePath);
    msg = 'Revert injection of RemoteDev monitor from React Native debugger';
    log(passDbg, msg + (!passDbg ? ', the file not found.' : '.'));

    return passServ && passDbg;
  }

  var defaultOptions = { showtips: argv.showtips };
  var options = argv.hostname || argv.port ? _extends({
    secure: argv.secure,
    hostname: argv.hostname || 'localhost',
    port: argv.port || 8000
  }, defaultOptions) : defaultOptions;

  // Inject server
  if (argv.injectserver) {
    var pass = injectServer.inject(modulePath, assignSecureOptions(options, argv), moduleName);
    var _msg = 'Inject RemoteDev server into React Native local server';
    log(pass, _msg + (pass ? '.' : ', the file not found.'));
    if (!pass) return false;
  }

  // Inject debugger
  if (argv.injectdebugger) {
    var _pass = injectDebugger.inject(modulePath, bundleCode, options);
    var _msg2 = 'Inject RemoteDev monitor into React Native debugger';
    log(_pass, _msg2 + (_pass ? '.' : ', the file not found.'));
    if (!_pass) return false;
  }

  // Run RemoteDev server
  if (argv.runserver) {
    return (0, _runServer2.default)(assignSecureOptions(_extends({ secure: argv.secure, port: 8000 }, options), argv));
  }
  return true;
};