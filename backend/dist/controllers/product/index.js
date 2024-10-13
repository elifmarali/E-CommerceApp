"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _product = require('../../models/product'); var _product2 = _interopRequireDefault(_product);
var _boom = require('boom'); var _boom2 = _interopRequireDefault(_boom);
var _validations = require('./validations'); var _validations2 = _interopRequireDefault(_validations);

const Create = async (req, res, next) => {
	const input = req.body;
	const { error } = _validations2.default.validate(input);

	if (error) {
		return next(_boom2.default.badRequest(error.details[0].message));
	}

	try {
		input.photos = JSON.parse(input.photos);

		const product = new (0, _product2.default)(input);
		const savedData = await product.save();

		res.json(savedData);
	} catch (e) {
		next(e);
	}
};

const Get = async (req, res, next) => {
	const { product_id } = req.params;

	if (!product_id) {
		return next(_boom2.default.badRequest("Missing paramter (:product_id)"));
	}

	try {
		const product = await _product2.default.findById(product_id);

		res.json(product);
	} catch (e) {
		next(e);
	}
};

const Update = async (req, res, next) => {
	const { product_id } = req.params;

	try {
		const updated = await _product2.default.findByIdAndUpdate(product_id, req.body, {
			new: true,
		});

		res.json(updated);
	} catch (e) {
		next(e);
	}
};

const Delete = async (req, res, next) => {
	const { product_id } = req.params;

	try {
		const deleted = await _product2.default.findByIdAndDelete(product_id);

		if (!deleted) {
			throw _boom2.default.badRequest("Product not found.");
		}

		res.json(deleted);
	} catch (e) {
		next(e);
	}
};

const limit = 12;
const GetList = async (req, res, next) => {
	let { page } = req.query;

	if (page < 1) {
		page = 1;
	}

	const skip = (parseInt(page) - 1) * limit;

	try {
		const products = await _product2.default.find({})
			.sort({ createdAt: -1 })
			.skip(skip)
			.limit(limit);

		res.json(products);
	} catch (e) {
		next(e);
	}
};

exports. default = {
	Create,
	Get,
	Update,
	Delete,
	GetList,
};
