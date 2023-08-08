import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";

const Restaurants = ({ restaurants, onDelete, onUpdate }) => {
	const [restaurantsToDisplay, setRestaurantsToDisplay] = useState([]);

	useEffect(() => {
		setRestaurantsToDisplay(restaurants);
	}, [restaurants]);

	const filterRestaurants = (e) => {
		if (e.target.value) {
			setRestaurantsToDisplay(
				restaurants.filter((el) => el.cuisine === e.target.value)
			);
		} else {
			setRestaurantsToDisplay(restaurants);
		}
	};

	const restaurantElements = restaurantsToDisplay.map((data) => (
		<Restaurant
			restaurant={data}
			key={data.name}
			isEditable={true}
			onDelete={onDelete}
			onUpdate={onUpdate}
		/>
	));

	return (
		<div className="bg-blue-200 min-w-full min-h-full flex flex-col gap-8 p-8 rounded-md">
			<div className="flex self-start justify-self-start items-center justify-center bg-gray-200 p-4 rounded-md gap-4">
				<p>Filter by cuisine:</p>
				<select
					name="cuisine"
					className="px-1 py-1 rounded-md"
					onChange={filterRestaurants}>
					<option value="">All</option>
					<option>Chinese</option>
					<option>Indian</option>
					<option>Fast Food</option>
					<option>Italian</option>
					<option>Japanese</option>
					<option>Korean</option>
					<option>Local</option>
					<option>Malay</option>
					<option>Thai</option>
					<option>Vietnamese</option>
					<option>Western</option>
				</select>
			</div>
			<div className="w-full grid grid-cols-2 gap-4 grid-rows-1 auto-rows-fr">
				{restaurantElements}
			</div>
		</div>
	);
};

export default Restaurants;
