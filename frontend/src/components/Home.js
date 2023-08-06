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
		<div className="bg-gray-200 flex flex-col items-center w-fit p-4 rounded-md gap-4">
			{randomRestaurant ? (
				<Restaurant restaurant={randomRestaurant} />
			) : (
				<p>No restaurants in database.</p>
			)}
			<button
				className="p-4 rounded-xl bg-sky-200 hover:bg-sky-300 active:bg-sky-400"
				onClick={handleClick}>
				Get another restaurant
			</button>
		</div>
	);
};

export default Home;
