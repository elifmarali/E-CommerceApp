"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _boom = require('boom'); var _boom2 = _interopRequireDefault(_boom);
var _user = require('../../models/user'); var _user2 = _interopRequireDefault(_user);

// helpers




var _jwt = require('../../helpers/jwt');

// validations
var _validations = require('./validations'); var _validations2 = _interopRequireDefault(_validations);
var _redis = require('../../clients/redis'); var _redis2 = _interopRequireDefault(_redis);

const Register = async (req, res, next) => {
	const input = req.body;

	const { error } = _validations2.default.validate(input);

	if (error) {
		return next(_boom2.default.badRequest(error.details[0].message));
	}

	try {
		const isExists = await _user2.default.findOne({ email: input.email });

		if (isExists) {
			return next(_boom2.default.conflict("This e-mail already using."));
		}

		const user = new (0, _user2.default)(input);
		const data = await user.save();
		const userData = data.toObject();

		delete userData.password;
		delete userData.__v;

		const accessToken = await _jwt.signAccessToken.call(void 0, {
			user_id: user._id,
			role: user.role,
		});
		const refreshToken = await _jwt.signRefreshToken.call(void 0, user._id);

		res.json({
			user: userData,
			accessToken,
			refreshToken,
		});
	} catch (e) {
		next(e);
	}
};

const Login = async (req, res, next) => {
	const input = req.body;

	const { error } = _validations2.default.validate(input);

	if (error) {
		return next(_boom2.default.badRequest(error.details[0].message));
	}

	try {
		const user = await _user2.default.findOne({ email: input.email });

		if (!user) {
			throw _boom2.default.notFound("The email address was not found.");
		}

		const isMatched = await user.isValidPass(input.password);
		if (!isMatched) {
			throw _boom2.default.unauthorized("email or password not correct");
		}

		const accessToken = await _jwt.signAccessToken.call(void 0, {
			user_id: user._id,
			role: user.role,
		});
		const refreshToken = await _jwt.signRefreshToken.call(void 0, user._id);

		const userData = user.toObject();
		delete userData.password;
		delete userData.__v;

		res.json({ user: userData, accessToken, refreshToken });
	} catch (e) {
		return next(e);
	}
};

const RefreshToken = async (req, res, next) => {
	const { refresh_token } = req.body;

	try {
		if (!refresh_token) {
			throw _boom2.default.badRequest();
		}

		const user_id = await _jwt.verifyRefreshToken.call(void 0, refresh_token);
		const accessToken = await _jwt.signAccessToken.call(void 0, user_id);
		const refreshToken = await _jwt.signRefreshToken.call(void 0, user_id);

		res.json({ accessToken, refreshToken });
	} catch (e) {
		next(e);
	}
};

const Logout = async (req, res, next) => {
	try {
		const { refresh_token } = req.body;
		if (!refresh_token) {
			throw _boom2.default.badRequest();
		}

		const user_id = await _jwt.verifyRefreshToken.call(void 0, refresh_token);
		const data = await _redis2.default.del(user_id);

		if (!data) {
			throw _boom2.default.badRequest();
		}

		res.json({ message: "success" });
	} catch (e) {
		console.log(e);
		return next(e);
	}
};

const Me = async (req, res, next) => {
	const { user_id } = req.payload;

	try {
		const user = await _user2.default.findById(user_id).select("-password -__v");

		res.json(user);
	} catch (e) {
		next(e);
	}
};

exports. default = {
	Register,
	Login,
	RefreshToken,
	Logout,
	Me,
};
