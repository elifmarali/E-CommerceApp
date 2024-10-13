"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _accesscontrol = require('accesscontrol'); var _accesscontrol2 = _interopRequireDefault(_accesscontrol);
const ac = new (0, _accesscontrol2.default)();

exports.roles = (function () {
  ac.grant('user').readAny('product');
  ac.grant('admin').extend('user').createAny('product');

  return ac;
})();
