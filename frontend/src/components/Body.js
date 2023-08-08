import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Restaurants from "./Restaurants";
import Create from "./Create";
import Success from "./Success";

const Body = () => {
	const [restaurantData, setRestaurantData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://localhost:3001/api/restaurants"
				);
				const restaurants = await response.json();

				setRestaurantData(restaurants);
			} catch (err) {
				console.log(err);
			}
		};

		console.log("I fire once");

		fetchData();
	}, []);

	const handleDeleteRestaurant = (id) => {
		const filteredRestaurants = restaurantData.filter(
			(restaurant) => restaurant._id !== id
		);
		setRestaurantData(filteredRestaurants);
	};

	const handleCreateRestaurant = (newRestaurant) => {
		setRestaurantData(
			[...restaurantData, newRestaurant].sort((a, b) => {
				const restaurantA = a.name.toUpperCase();
				const restaurantB = b.name.toUpperCase();

				if (restaurantA < restaurantB) {
					return -1;
				}

				if (restaurantA > restaurantB) {
					return 1;
				}

				return 0;
			})
		);
	};

	const handleUpdateRestaurant = (updatedRestaurant) => {
		const filteredRestaurants = restaurantData.filter(
			(restaurant) => restaurant._id !== updatedRestaurant._id
		);

		setRestaurantData([...filteredRestaurants, updatedRestaurant]);
	};

	return (
		<div className="flex flex-1 flex-col items-center justify-center py-8 px-60 gap-8">
			<Routes>
				<Route
					path="/"
					element={<Home restaurants={restaurantData} />}
				/>
				<Route
					path="/restaurants"
					element={
						<Restaurants
							restaurants={restaurantData}
							onDelete={handleDeleteRestaurant}
							onUpdate={handleUpdateRestaurant}
						/>
					}
				/>
				<Route
					path="/create"
					element={
						<Create
							restaurants={restaurantData}
							onCreate={handleCreateRestaurant}
						/>
					}
				/>
				<Route path="/success" element={<Success />} />
			</Routes>
		</div>
	);
};

export default Body;
