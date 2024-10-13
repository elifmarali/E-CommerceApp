"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _joi = require('joi'); var _joi2 = _interopRequireDefault(_joi);

const ProductSchema = _joi2.default.object({
  title: _joi2.default.string().required(),
  description: _joi2.default.string().min(3),
  price: _joi2.default.string().required(),
  photos: _joi2.default.string(),
});

exports. default = ProductSchema;
