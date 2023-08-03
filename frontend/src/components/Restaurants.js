import Restaurant from "./Restaurant";

const Restaurants = ({ restaurants }) => {
	const restaurantElements = restaurants.map((data) => (
		<Restaurant restaurant={data} key={data.name} />
	));

	return (
		<div className="bg-gray-200 p-4 text-center">{restaurantElements}</div>
	);
};

export default Restaurants;
