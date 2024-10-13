"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

const Schema = _mongoose2.default.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		toJSON: false,
	},
	role: {
		type: String,
		default: "user",
		enum: ["user", "admin"],
	},
});

UserSchema.pre("save", async function (next) {
	try {
		if (this.isNew) {
			const salt = await _bcrypt2.default.genSalt(10);
			const hashed = await _bcrypt2.default.hash(this.password, salt);
			this.password = hashed;
		}

		next();
	} catch (e) {
		next(error);
	}
});

UserSchema.methods.isValidPass = async function (pass) {
	return await _bcrypt2.default.compare(pass, this.password);
};

const User = _mongoose2.default.model("user", UserSchema);

exports. default = User;
