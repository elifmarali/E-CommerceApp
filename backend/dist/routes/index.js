"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

// helpers
var _jwt = require('../helpers/jwt');

// routes
var _auth = require('./auth'); var _auth2 = _interopRequireDefault(_auth);
var _product = require('./product'); var _product2 = _interopRequireDefault(_product);
var _order = require('./order'); var _order2 = _interopRequireDefault(_order);

const router = _express.Router.call(void 0, );

router.get('/', (req, res) => {
  res.end('hey');
});

router.use('/auth', _auth2.default);
router.use('/product', _product2.default);
router.use('/order', _jwt.verifyAccessToken, _order2.default);

exports. default = router;
