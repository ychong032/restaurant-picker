const Restaurant = require("../models/restaurant");

const getRestaurants = async (req, res) => {
	try {
		const response = await Restaurant.find().sort({ name: 1 });
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
	}
};

const getRestaurant = async (req, res) => {
	const id = req.params.id;
	try {
		const response = await Restaurant.findById(id);
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
	}
};

const createRestaurant = async (req, res) => {
	const restaurant = new Restaurant(req.body);
	try {
		const response = await restaurant.save();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
	}
};

const deleteRestaurant = async (req, res) => {
	const id = req.params.id;
	try {
		const response = await Restaurant.findByIdAndDelete(id);
		res.status(200).json({
			message: `Successfully deleted restaurant: ${response.name}`,
		});
	} catch (err) {
		console.log(err);
	}
};

const updateRestaurant = async (req, res) => {
	const id = req.params.id;
	const update = req.body;
	try {
		const response = await Restaurant.findByIdAndUpdate(id, update, {
			new: true,
		});
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getRestaurants,
	getRestaurant,
	createRestaurant,
	deleteRestaurant,
	updateRestaurant,
};
