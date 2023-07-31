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
	res.status(200).json({ message: "This request creates a new restaurant" });
};

const deleteRestaurant = (req, res) => {
	const id = req.params.id;
	res.json({
		message: `This request deletes a single restaurant of id ${id}`,
	});
};

const updateRestaurant = (req, res) => {
	const id = req.params.id;
	res.json({ message: `This request updates a restaurant of id ${id}` });
};

module.exports = {
	getRestaurants,
	getRestaurant,
	createRestaurant,
	deleteRestaurant,
	updateRestaurant,
};
