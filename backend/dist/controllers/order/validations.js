"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _joi = require('joi'); var _joi2 = _interopRequireDefault(_joi);

const OrderSchema = _joi2.default.object({
  address: _joi2.default.string().required(),
  items: _joi2.default.array().items(_joi2.default.string()).required(),
});

exports. default = OrderSchema;
