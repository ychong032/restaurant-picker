import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Restaurants from "./Restaurants";
import Create from "./Create";

const Body = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://localhost:3001/api/restaurants"
				);
				const restaurants = await response.json();

				setData(restaurants);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="flex flex-1 items-center justify-center">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/restaurants"
					element={<Restaurants restaurants={data} />}
				/>
				<Route path="/create" element={<Create />} />
			</Routes>
		</div>
	);
};

export default Body;
