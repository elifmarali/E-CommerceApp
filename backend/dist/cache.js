"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _expressrediscache = require('express-redis-cache'); var _expressrediscache2 = _interopRequireDefault(_expressrediscache);
var _redis = require('./clients/redis'); var _redis2 = _interopRequireDefault(_redis);

const cache = _expressrediscache2.default.call(void 0, {
  client: _redis2.default,
  expire: 60,
});

exports. default = cache;
