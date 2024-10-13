"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
const router = _express2.default.Router();

var _auth = require('../controllers/auth'); var _auth2 = _interopRequireDefault(_auth);
var _jwt = require('../helpers/jwt');

router.post('/register', _auth2.default.Register);
router.post('/login', _auth2.default.Login);
router.post('/refresh_token', _auth2.default.RefreshToken);
router.post('/logout', _auth2.default.Logout);
router.get('/me', _jwt.verifyAccessToken, _auth2.default.Me);

exports. default = router;
