const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		cuisine: {
			type: String,
			required: true,
		},
		description: String,
	},
	{ timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
