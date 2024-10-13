"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _expressratelimit = require('express-rate-limit'); var _expressratelimit2 = _interopRequireDefault(_expressratelimit);
var _ratelimitredis = require('rate-limit-redis'); var _ratelimitredis2 = _interopRequireDefault(_ratelimitredis);
var _redis = require('./clients/redis'); var _redis2 = _interopRequireDefault(_redis);
var _boom = require('boom'); var _boom2 = _interopRequireDefault(_boom);

const limiter = new (0, _expressratelimit2.default)({
  store: new (0, _ratelimitredis2.default)({
    client: _redis2.default,
    resetExpiryOnChange: true,
    expiry: 30,
  }),
  max: 1000,
  handler: (req, res, next) => {
    next(_boom2.default.tooManyRequests());
  },
});

exports. default = limiter;
