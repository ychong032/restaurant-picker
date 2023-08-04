import Restaurant from "./Restaurant";

const Restaurants = ({ restaurants }) => {
	const restaurantElements = restaurants.map((data) => (
		<Restaurant restaurant={data} key={data.name} />
	));

	return <div className="flex flex-col gap-4">{restaurantElements}</div>;
};

export default Restaurants;
