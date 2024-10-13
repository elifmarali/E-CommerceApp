"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const Schema = _mongoose2.default.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  adress: {
    type: String,
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = _mongoose2.default.model('order', OrderSchema);

exports. default = Order;
