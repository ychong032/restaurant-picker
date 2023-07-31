// const restaurantModel = require("../models/restaurant");

const getRestaurants = (req, res) => {
	res.status(200).json({ message: "This request gets all restaurants" });
};

const getRestaurant = (req, res) => {
	const id = req.params.id;
	res.status(200).json({
		message: `This request gets a single restaurant of id ${id}`,
	});
};

const createRestaurant = (req, res) => {
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
