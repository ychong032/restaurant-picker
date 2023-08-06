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

		fetchData();
	}, []);

	return (
		<div className="flex flex-1 items-center justify-center py-8">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/restaurants"
					element={<Restaurants restaurants={restaurantData} />}
				/>
				<Route
					path="/create"
					element={
						<Create
							restaurants={restaurantData}
							onChange={setRestaurantData}
						/>
					}
				/>
				<Route path="/success" element={<Success />} />
			</Routes>
		</div>
	);
};

export default Body;
