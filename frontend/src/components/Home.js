import Restaurant from "./Restaurant";

const Home = ({ restaurants }) => {
	const getRandomRestaurant = () =>
		restaurants[Math.floor(Math.random() * restaurants.length)];

	return (
		<div className="bg-gray-200 flex flex-col items-center w-fit p-4 rounded-md gap-4">
			{restaurants.length ? (
				<Restaurant restaurant={getRandomRestaurant()} />
			) : (
				<p>No restaurants in database.</p>
			)}
			<button className="p-4 rounded-xl bg-sky-200 hover:bg-sky-300 active:bg-sky-400">
				Get another restaurant
			</button>
		</div>
	);
};

export default Home;
