'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revert = exports.inject = exports.fileInfos = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getFileInfo = getFileInfo;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'remote-redux-devtools-on-debugger';
var flag = '<!--  ' + name + ' -->';
var end = '</body>\n</html>\n';

var tips = '\n  <div class="content">\n    <p>Redux DevTools: Type <kbd id=\'dev_tools_shortcut\' class="shortcut">\u2303H</kbd> for toggle the dock visibility, <kbd id=\'dev_tools_shortcut\'\n        class="shortcut">\u2303Q</kbd> for toggle the dock position.</p>\n  </div>\n';

var fileInfos = exports.fileInfos = {
  'react-native': {
    '0.50.0-rc.0': {
      dir: 'local-cli/server/util/debugger-ui',
      file: 'index.html',
      path: 'local-cli/server/util/debugger-ui/index.html'
    }
  },
  default: {
    dir: 'local-cli/server/util',
    file: 'debugger.html',
    path: 'local-cli/server/util/debugger.html'
  }
};

var getModuleInfo = function getModuleInfo(modulePath) {
  var pkg = JSON.parse(_fs2.default.readFileSync(_path2.default.join(modulePath, 'package.json'))); // eslint-disable-line
  return { version: pkg.version, name: pkg.name };
};

function getFileInfo(moduleName, version) {
  var list = fileInfos[moduleName || 'react-native'] || {};
  var versions = Object.keys(list);
  var info = fileInfos.default;
  for (var i = 0; i < versions.length; i += 1) {
    if (_semver2.default.gte(version, versions[i])) {
      info = list[versions[i]];
    }
  }
  return info;
}

var inject = exports.inject = function inject(modulePath, bundleCode, options) {
  var info = getModuleInfo(modulePath);
  var filePath = _path2.default.join(modulePath, getFileInfo(info.name, info.version).path);
  if (!_fs2.default.existsSync(filePath)) return false;

  var opts = _extends({}, options, { autoReconnect: true });
  // Check development mode
  var bundleTag = !process.env.__DEV__ ? '  <script>\n    ' + bundleCode + '\n  </script>' : '  <script src="http://localhost:3030/js/bundle.js"></script>';
  var optionsTag = options ? '  <script>window.remotedevOptions = ' + JSON.stringify(opts) + ';</script>' : '';
  var code = [flag, '  </audio>', // Fix for RN ^0.44, it will skiped on Chrome for old versions of RN
  options.showtips ? tips : '', '  <style>', '    body { overflow: hidden; }', '  </style>', '  <div id="' + name + '"></div>', optionsTag, bundleTag, end].join('\n');

  var html = _fs2.default.readFileSync(filePath, 'utf-8');
  var position = html.indexOf(flag); // already injected ?
  if (position === -1) {
    position = html.indexOf('</body>');
  }
  _fs2.default.writeFileSync(filePath, html.substr(0, position) + code);
  return true;
};

var revert = exports.revert = function revert(modulePath) {
  var info = getModuleInfo(modulePath);
  var filePath = _path2.default.join(modulePath, getFileInfo(info.name, info.version).path);
  if (!_fs2.default.existsSync(filePath)) return false;

  var html = _fs2.default.readFileSync(filePath, 'utf-8');
  var position = html.indexOf(flag);
  if (position !== -1) {
    _fs2.default.writeFileSync(filePath, html.substr(0, position) + end);
  }
  return true;
};