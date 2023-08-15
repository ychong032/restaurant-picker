import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";

const Home = ({ restaurants }) => {
	const [randomRestaurant, setRandomRestaurant] = useState({});

	useEffect(() => {
		setRandomRestaurant(
			restaurants[Math.floor(Math.random() * restaurants.length)]
		);
	}, [restaurants]);

	const handleClick = () => {
		setRandomRestaurant(
			restaurants[Math.floor(Math.random() * restaurants.length)]
		);
	};

	return (
		<div className="bg-gray-100 flex flex-col w-1/2 h-fit p-4 rounded-md gap-4">
			{randomRestaurant ? (
				<Restaurant restaurant={randomRestaurant} isEditable={false} />
			) : (
				<p>No restaurants in database.</p>
			)}
			<button
				className="p-4 rounded-xl bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-gray-200"
				onClick={handleClick}>
				Get another restaurant
			</button>
		</div>
	);
};

export default Home;
