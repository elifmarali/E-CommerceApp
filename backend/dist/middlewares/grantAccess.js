"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _roles = require('../roles');
var _boom = require('boom'); var _boom2 = _interopRequireDefault(_boom);

const grantAccess = (action, resource) => {
  return async (req, res, next) => {
    const permission = _roles.roles.can(req.payload.role)[action](resource);

    if (!permission.granted) {
      return next(_boom2.default.unauthorized("You don't have permission."));
    }

    next();
  };
};

exports. default = grantAccess;
